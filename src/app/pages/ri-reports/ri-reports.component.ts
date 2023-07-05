import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as map_style from "../../../providers/map.styles";
import { Segments, SegmentMedia } from "../../../services/db";
import { AddSegment, AddSegmentMediaModal } from "../../../providers";
import { InspectionComponent } from "../../pages/inspection/inspection.component";
import { SegmentRecorderComponent } from "../../pages/segment-recorder/segment-recorder.component";
import {
  PopoverController,
  ModalController,
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { GeolocationService } from "../../../services/geolocation.service";
import { FirebaseStorage } from "../../../services/firebase.storage.service";
//import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { GlobalSettings } from "../../../services/global.service";

@Component({
  selector: "app-ri-reports",
  templateUrl: "./ri-reports.component.html",
  styleUrls: ["./ri-reports.component.scss"],
})
export class RiReportsComponent implements OnInit {
  @ViewChild("fileInput") fileInput: ElementRef;

  map: google.maps.Map;
  Segments: any;
  search_array: any[] = [];
  SegmentMediaArray: any;
  SegmentArray: any;
  Markers: any[] = [];
  SegmantData: any[] = [];
  latitude: number;
  longitude: number;
  surburb: any;
  postalCode: any;
  city: any;
  province: any;
  myV: string;
  uploadmedia: any = "";
  viewType: any = "";
  showMap: boolean = true;
  //media_url: any;
  opentype: any = "";
  show_info: boolean = false;
  current_roadid: any = "";

  opencnt: any = 0;

  // Create a reference to the class instance
  self = this;
  file: string | ArrayBuffer;

  streetName: string;
  roadID: string;
  munic: string;
  start_km: string;
  end_km: string;
  geometry: string[];
  road_len: string;
  route_seq: string;
  start_len: string;
  timerId: any;
  displayname: any;
  showpercent: any;
  progessStage: any = "";
  show_cond: boolean = false;
  show_cond_done: boolean = false;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 4,
  };

  media_url: string = "";
  isbusy: boolean = false;

  uploadPercent: any;
  downloadURL: any;
  segrec_id: any;

  SURFACE_TYPE: any;
  SURFACE_STATUS: any;

  constructor(
    private modalController: ModalController,
    private db: Segments,
    private db_m: SegmentMedia,
    private alertCtrl: AlertController,
    private global: GlobalSettings,
    //private storage: FirebaseStorage,
    private storage: AngularFireStorage,
    private location_services: GeolocationService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    console.log("Loading Reports Details");
    //this.load_map();
    //this.loadDetails();
  }

  change_st(event) {
    console.log("Surface Type Change");
    this.SURFACE_TYPE = event.detail.value;
    if (this.SURFACE_TYPE.length > 0) {
      this.show_cond = true;
      //this.loadSpecificDetails(-2, -2);
    } else {
      this.show_cond = false;
    }
    //console.log(this.SURFACE_TYPE);
    if (this.search_array.length > 0) {
      this.search_array[0] = this.SURFACE_TYPE;
      console.log("Search Array:", this.search_array);

      this.loadSpecificDetails(this.search_array);
    }
  }

  change_sc(event) {
    console.log("Surface Condition Change");
    this.show_cond_done = true;
    let input = event.detail.value;
    console.log(input);
    this.search_array = [];
    this.search_array[0] = this.SURFACE_TYPE;
    if (input.includes("assessed")) {
      this.search_array[1] = "assessed";
    }
    if (input.includes("notassessed")) {
      this.search_array[1] = "notassessed";
    }
    if (input.includes("assessed") && input.includes("notassessed")) {
      this.search_array[1] = "skip";
    }
    if (input.indexOf("assessed") == -1 && input.indexOf("notassessed") == -1) {
      this.search_array[1] = "skip";
    }

    console.log("What to show:", this.search_array[1]);

    if (input.includes("vpoor")) {
      this.search_array[2] = true;
    } else {
      this.search_array[2] = false;
    }
    if (input.includes("poor")) {
      this.search_array[3] = true;
    } else {
      this.search_array[3] = false;
    }
    if (input.includes("fair")) {
      this.search_array[4] = true;
    } else {
      this.search_array[4] = false;
    }
    if (input.includes("good")) {
      this.search_array[5] = true;
    } else {
      this.search_array[5] = false;
    }
    if (input.includes("vgood")) {
      this.search_array[6] = true;
    } else {
      this.search_array[6] = false;
    }

    console.log("Search Array:", this.search_array);

    this.loadSpecificDetails(this.search_array);
  }

  loadSpecificDetails(search) {
    this.db.Segments.subscribe((val) => {
      this.Segments = val;
      if (this.Segments.length > 0) {
        this.load_map(false);
        //console.log("Segments", this.Segments[2]);
        // this.latitude = Number("28.618020684007547");
        // this.longitude = Number("-26.651596892582404");
      } else {
        this.load_map(true);
      }
    });
    this.db.getAll();
  }

  // loadDetails() {
  //   this.db.Segments.subscribe((val) => {
  //     this.Segments = val;
  //     if (this.Segments.length > 0) {
  //       this.load_map();
  //       //console.log("Segments", this.Segments[2]);
  //       // this.latitude = Number("28.618020684007547");
  //       // this.longitude = Number("-26.651596892582404");
  //     }
  //   });
  //   this.db.getAll();
  // }

  async loadSegmentData(road_id, mid, mtype, murl) {
    (await this.db.getSegment(road_id)).subscribe(
      async (data: AddSegment[]) => {
        if (this.opencnt < 1) {
          const modal = await this.modalController.create({
            component: InspectionComponent,
            cssClass: "modal-full",
            componentProps: {
              title: "Open Inspection",
              segrec_id: this.segrec_id,
              roadid: data[0]["road_id"],
              mid: mid,
              murl: murl,
              mtype: mtype,
              segment: data[0],
            },
          });

          await modal.present();
          this.opencnt += 1;
        }
      }
    );
  }

  loadSegmentMedia(road_id) {
    //This gets the segment related media
    this.db_m.SegmentMedia.subscribe((val) => {
      this.SegmentMediaArray = val;
    });
    this.db_m.getSegmentMedia(road_id);
  }

  ionViewDidEnter() {
    //this.loadDetails();
  }

  getViewType(event: CustomEvent) {
    this.viewType = event.detail.value;
    if (this.viewType == "recondevice") {
      this.open_segmentrecorder(this.roadID, "recondevice");
    }
    if (this.viewType == "rec3d") {
      this.open_segmentrecorder(this.roadID, "rec3d");
    }
  }

  getMediaType(event: CustomEvent) {
    this.uploadmedia = event.detail.value;

    if (this.uploadmedia == "vid3d" || this.uploadmedia == "vid") {
      this.opentype = "video/*";
    } else {
      this.opentype = "image/*";
    }
    console.log(this.opentype);
  }

  async open_segmentrecorder(roadid, rectype) {
    const modal = await this.modalController.create({
      component: SegmentRecorderComponent,
      cssClass: "modal-full",
      componentProps: {
        title: "Open Recorder",
        roadid: roadid,
        rectype: rectype,
      },
    });

    await modal.present();
  }

  async open_inspection(roadid, mid, mtype, murl) {
    this.opencnt = 0;
    await this.loadSegmentData(roadid, mid, mtype, murl);
  }

  /**
   * load_map
   */
  public async load_map(clear) {
    this.latitude = Number("-26.651596892582404");
    this.longitude = Number("28.618020684007547");
    this.map = new google.maps.Map(
      document.getElementById("map_canvas_segments"),
      {
        center: { lat: this.latitude, lng: this.longitude },
        zoom: 12,
        zoomControl: true,
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: true,

        streetViewControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },

        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM,
        },

        fullscreenControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_RIGHT,
        },
      }
    );

    const loading = await this.loadingCtrl.create({
      message: "Loading Segments ...",
    });

    loading.present();

    await this.addSegments(this.map, clear);

    loading.dismiss();

    this.map.setMapTypeId("roadmap");
    //this.getAddress();

    // this.add_marker({ lat: this.latitude, lng: this.longitude });

    this.map.addListener("click", (mapsMouseEvent) => {
      let location = {
        lat: mapsMouseEvent.latLng.lat(),
        lng: mapsMouseEvent.latLng.lng(),
      };
      // this.add_marker(location);
    });
  }

  async setSegment(coords) {
    // Create a new polygon with the specified coordinates
    const polygon = new google.maps.Polyline({
      path: coords,
      strokeColor: "rgb(0, 195, 255)",
      strokeOpacity: 0.8,
      strokeWeight: 5,
    });

    let me = 0;

    // Add the polygon to the map
    polygon.setMap(this.map);
  }

  myFunction(name: string): void {}

  async resetSegment(coords) {
    // Create a new polygon with the specified coordinates
    const polygon = new google.maps.Polyline({
      path: coords,
      strokeColor: "rgb(122, 17, 163)",
      strokeOpacity: 0.8,
      strokeWeight: 5,
    });

    let me = 0;

    // Add the polygon to the map
    polygon.setMap(this.map);
  }

  async addSegments(map, clear) {
    for (let i = 0; i < this.Segments.length; i++) {
      if (
        //Display only selected surface type(s)
        this.search_array[0].indexOf(this.Segments[i]["surfacetype"]) !== -1
      ) {
        //Select Assessed/Not Assessed
        if (this.search_array[1] == "assessed") {
          if (this.Segments[i]["ASSESSED"]) {
            //Get selected Road Status/Condition
            let vci_array = [];
            let cnt = 0;

            if (this.search_array[2]) {
              //If Very Good Condition was selected
              while (cnt < 30) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[3]) {
              //If Good Condition was selected
              cnt = 30;
              while (cnt < 50) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[4]) {
              //If Fair Condition was selected
              cnt = 50;
              while (cnt < 70) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[5]) {
              //If Poor Condition was selected
              cnt = 70;
              while (cnt < 85) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[6]) {
              //If Very Poor Condition was selected
              cnt = 85;
              while (cnt <= 100) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }

            //console.log("Selected VCI:", vci_array);

            if (
              vci_array.includes(this.Segments[i]["VCI"]) ||
              vci_array.length == 0
            ) {
              let coords = this.Segments[i]["geometry"];
              let vci = Number(this.Segments[i]["VCI"]);

              let fin_coords = [];
              for (let i = 0; i < coords.length; i++) {
                let _res = [];
                let res = "lng:" + coords[i];
                res = res.replace(",", ",lat:");

                fin_coords.push(res);
              }

              const outputArray = fin_coords.map((item: string) => {
                const [lng, lat] = item.split(",");
                return {
                  lng: parseFloat(lng.split(":")[1]),
                  lat: parseFloat(lat.split(":")[1]),
                };
              });

              //console.log(outputArray);
              let poly_color = "rgb(255,0,170)";
              if (vci >= 0 && vci < 30) {
                poly_color = "rgb(128,0,128)";
              }
              if (vci >= 30 && vci < 50) {
                poly_color = "rgb(255,0,0)";
              }
              if (vci >= 50 && vci < 70) {
                poly_color = "rgb(255,165,0)";
              }
              if (vci >= 70 && vci < 85) {
                poly_color = "rgb(0,128,0)";
              }
              if (vci >= 85 && vci <= 100) {
                poly_color = "rgb(0,0,255)";
              }

              // Create a new polygon with the specified coordinates
              const polygon = new google.maps.Polyline({
                path: outputArray,
                strokeColor: poly_color,
                strokeOpacity: 0.8,
                strokeWeight: 5,
              });

              let me = 0;

              // Add the polygon to the map
              polygon.setMap(this.map);
              // Add a click event listener to the polygon

              if (clear) {
                polygon.setMap(null);
              }

              //clearTimeout(this.timerId);

              // Save the original stroke color of the polygon
              const originalStrokeColor = polygon.get("strokeColor");

              // Add a mouseover listener to change the stroke color to pink
              polygon.addListener("mouseover", async () => {
                polygon.setOptions({ strokeColor: "pink" });
                this.current_roadid = this.Segments[i]["road_id"];
                this.show_info = true;
                this.latitude = outputArray[0]["lat"];
                this.longitude = outputArray[0]["lng"];
                this.getAddress();
              });

              // Add a mouseout listener to reset the stroke color to the original color
              polygon.addListener("mouseout", async () => {
                polygon.setOptions({ strokeColor: originalStrokeColor });
                this.show_info = false;
              });

              polygon.addListener("click", async () => {
                this.show_info = false;
                this.current_roadid = this.uploadmedia = "";
                this.viewType = "";
                this.segrec_id = this.Segments[i]["id"];
                this.streetName = this.Segments[i]["street_name"];
                this.roadID = this.Segments[i]["road_id"];
                this.road_len = this.Segments[i]["road_len"];
                this.route_seq = this.Segments[i]["route_seq"];
                this.start_len = this.Segments[i]["st_length"];
                this.end_km = this.Segments[i]["end_km"];
                this.munic = this.Segments[i]["municipality"];
                this.start_km = this.Segments[i]["start_km"];
                this.latitude = outputArray[0]["lat"];
                this.longitude = outputArray[0]["lng"];

                this.showMap = false;
                await this.loadSegmentMedia(this.roadID);
                //this.setSegment(outputArray);
                ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
                //clearTimeout(timerId);
                //console.log(outputArray[0]["lat"]);
              });
            }
          }
        } else if (this.search_array[1] == "notassessed") {
          if (this.Segments[i]["ASSESSED"] == false) {
            //Get selected Road Status/Condition
            let vci_array = [];
            let cnt = 0;

            if (this.search_array[2]) {
              //If Very Good Condition was selected
              while (cnt < 30) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[3]) {
              //If Good Condition was selected
              cnt = 30;
              while (cnt < 50) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[4]) {
              //If Fair Condition was selected
              cnt = 50;
              while (cnt < 70) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[5]) {
              //If Poor Condition was selected
              cnt = 70;
              while (cnt < 85) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }
            if (this.search_array[6]) {
              //If Very Poor Condition was selected
              cnt = 85;
              while (cnt <= 100) {
                vci_array.push(String(cnt));
                cnt += 1;
              }
            }

            //console.log("Selected VCI:", vci_array);

            if (
              vci_array.includes(this.Segments[i]["VCI"]) ||
              vci_array.length == 0
            ) {
              let coords = this.Segments[i]["geometry"];
              let vci = Number(this.Segments[i]["VCI"]);

              let fin_coords = [];
              for (let i = 0; i < coords.length; i++) {
                let _res = [];
                let res = "lng:" + coords[i];
                res = res.replace(",", ",lat:");

                fin_coords.push(res);
              }

              const outputArray = fin_coords.map((item: string) => {
                const [lng, lat] = item.split(",");
                return {
                  lng: parseFloat(lng.split(":")[1]),
                  lat: parseFloat(lat.split(":")[1]),
                };
              });

              //console.log(outputArray);
              let poly_color = "rgb(255,0,170)";
              if (vci >= 0 && vci < 30) {
                poly_color = "rgb(128,0,128)";
              }
              if (vci >= 30 && vci < 50) {
                poly_color = "rgb(255,0,0)";
              }
              if (vci >= 50 && vci < 70) {
                poly_color = "rgb(255,165,0)";
              }
              if (vci >= 70 && vci < 85) {
                poly_color = "rgb(0,128,0)";
              }
              if (vci >= 85 && vci <= 100) {
                poly_color = "rgb(0,0,255)";
              }

              // Create a new polygon with the specified coordinates
              const polygon = new google.maps.Polyline({
                path: outputArray,
                strokeColor: poly_color,
                strokeOpacity: 0.8,
                strokeWeight: 5,
              });

              let me = 0;

              // Add the polygon to the map
              polygon.setMap(this.map);
              // Add a click event listener to the polygon

              if (clear) {
                polygon.setMap(null);
              }

              //clearTimeout(this.timerId);

              // Save the original stroke color of the polygon
              const originalStrokeColor = polygon.get("strokeColor");

              // Add a mouseover listener to change the stroke color to pink
              polygon.addListener("mouseover", async () => {
                polygon.setOptions({ strokeColor: "pink" });
                this.current_roadid = this.Segments[i]["road_id"];
                this.show_info = true;
                this.latitude = outputArray[0]["lat"];
                this.longitude = outputArray[0]["lng"];
                this.getAddress();
              });

              // Add a mouseout listener to reset the stroke color to the original color
              polygon.addListener("mouseout", async () => {
                polygon.setOptions({ strokeColor: originalStrokeColor });
                this.show_info = false;
              });

              polygon.addListener("click", async () => {
                this.show_info = false;
                this.current_roadid = this.uploadmedia = "";
                this.viewType = "";
                this.segrec_id = this.Segments[i]["id"];
                this.streetName = this.Segments[i]["street_name"];
                this.roadID = this.Segments[i]["road_id"];
                this.road_len = this.Segments[i]["road_len"];
                this.route_seq = this.Segments[i]["route_seq"];
                this.start_len = this.Segments[i]["st_length"];
                this.end_km = this.Segments[i]["end_km"];
                this.munic = this.Segments[i]["municipality"];
                this.start_km = this.Segments[i]["start_km"];
                this.latitude = outputArray[0]["lat"];
                this.longitude = outputArray[0]["lng"];

                this.showMap = false;
                await this.loadSegmentMedia(this.roadID);
                //this.setSegment(outputArray);
                ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
                //clearTimeout(timerId);
                //console.log(outputArray[0]["lat"]);
              });
            }
          }
        } else {
          //Get selected Road Status/Condition
          let vci_array = [];
          let cnt = 0;

          if (this.search_array[2]) {
            //If Very Good Condition was selected
            while (cnt < 30) {
              vci_array.push(String(cnt));
              cnt += 1;
            }
          }
          if (this.search_array[3]) {
            //If Good Condition was selected
            cnt = 30;
            while (cnt < 50) {
              vci_array.push(String(cnt));
              cnt += 1;
            }
          }
          if (this.search_array[4]) {
            //If Fair Condition was selected
            cnt = 50;
            while (cnt < 70) {
              vci_array.push(String(cnt));
              cnt += 1;
            }
          }
          if (this.search_array[5]) {
            //If Poor Condition was selected
            cnt = 70;
            while (cnt < 85) {
              vci_array.push(String(cnt));
              cnt += 1;
            }
          }
          if (this.search_array[6]) {
            //If Very Poor Condition was selected
            cnt = 85;
            while (cnt <= 100) {
              vci_array.push(String(cnt));
              cnt += 1;
            }
          }

          //console.log("Selected VCI:", vci_array);

          if (
            vci_array.includes(this.Segments[i]["VCI"]) ||
            vci_array.length == 0
          ) {
            let coords = this.Segments[i]["geometry"];
            let vci = Number(this.Segments[i]["VCI"]);

            let fin_coords = [];
            for (let i = 0; i < coords.length; i++) {
              let _res = [];
              let res = "lng:" + coords[i];
              res = res.replace(",", ",lat:");

              fin_coords.push(res);
            }

            const outputArray = fin_coords.map((item: string) => {
              const [lng, lat] = item.split(",");
              return {
                lng: parseFloat(lng.split(":")[1]),
                lat: parseFloat(lat.split(":")[1]),
              };
            });

            //console.log(outputArray);
            let poly_color = "rgb(255,0,170)";
            if (vci >= 0 && vci < 30) {
              poly_color = "rgb(128,0,128)";
            }
            if (vci >= 30 && vci < 50) {
              poly_color = "rgb(255,0,0)";
            }
            if (vci >= 50 && vci < 70) {
              poly_color = "rgb(255,165,0)";
            }
            if (vci >= 70 && vci < 85) {
              poly_color = "rgb(0,128,0)";
            }
            if (vci >= 85 && vci <= 100) {
              poly_color = "rgb(0,0,255)";
            }

            // Create a new polygon with the specified coordinates
            const polygon = new google.maps.Polyline({
              path: outputArray,
              strokeColor: poly_color,
              strokeOpacity: 0.8,
              strokeWeight: 5,
            });

            let me = 0;

            // Add the polygon to the map
            polygon.setMap(this.map);
            // Add a click event listener to the polygon

            if (clear) {
              polygon.setMap(null);
            }

            //clearTimeout(this.timerId);

            // Save the original stroke color of the polygon
            const originalStrokeColor = polygon.get("strokeColor");

            // Add a mouseover listener to change the stroke color to pink
            polygon.addListener("mouseover", async () => {
              polygon.setOptions({ strokeColor: "pink" });
              this.current_roadid = this.Segments[i]["road_id"];
              this.show_info = true;
              this.latitude = outputArray[0]["lat"];
              this.longitude = outputArray[0]["lng"];
              this.getAddress();
            });

            // Add a mouseout listener to reset the stroke color to the original color
            polygon.addListener("mouseout", async () => {
              polygon.setOptions({ strokeColor: originalStrokeColor });
              this.show_info = false;
            });

            polygon.addListener("click", async () => {
              this.show_info = false;
              this.current_roadid = this.uploadmedia = "";
              this.viewType = "";
              this.segrec_id = this.Segments[i]["id"];
              this.streetName = this.Segments[i]["street_name"];
              this.roadID = this.Segments[i]["road_id"];
              this.road_len = this.Segments[i]["road_len"];
              this.route_seq = this.Segments[i]["route_seq"];
              this.start_len = this.Segments[i]["st_length"];
              this.end_km = this.Segments[i]["end_km"];
              this.munic = this.Segments[i]["municipality"];
              this.start_km = this.Segments[i]["start_km"];
              this.latitude = outputArray[0]["lat"];
              this.longitude = outputArray[0]["lng"];

              this.showMap = false;
              await this.loadSegmentMedia(this.roadID);
              //this.setSegment(outputArray);
              ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
              //clearTimeout(timerId);
              //console.log(outputArray[0]["lat"]);
            });
          }
        }
      }
    }
  }

  async getAddress() {
    let location = {
      lat: this.latitude,
      lng: this.longitude,
    };
    this.location_services.osm_geocode_latlng(location).subscribe((res) => {
      console.log(res);

      this.displayname = res.display_name;

      // this.surburb = res.address.suburb;
      // this.postalCode = res.address.postcode;
      // this.city = res.address.city ? res.address.city : res.address.county;
      // this.province = res.address.state;

      // let name = `${res.address.road}, ${res.address.house_number}`;

      //this.billboardForm.get('name').setValue(name)
    });
  }

  getValue(val) {
    const roundedNum = Math.round(val);
    this.showpercent = "Uploading..." + roundedNum + "%";
    return roundedNum;
    //console.log("Progress: " + roundedNum);
  }

  select_file(event) {
    const file = event.target.files[0];
    const filepath = "road-inspection/" + this.roadID + `/${file.name}`;
    this.isbusy = true;
    //this.progessStage = "Uploading...";
    this.showpercent = "Wait...";

    try {
      const task = this.storage.upload(filepath, file);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();

      // get notified when the download URL is available
      task
        .snapshotChanges()
        .pipe(
          finalize(async () => {
            this.showpercent = "Processing...";
            this.downloadURL = await this.storage
              .ref(filepath)
              .getDownloadURL()
              .forEach(async (res) => {
                console.log(res);
                let media_name = String(file.name);
                media_name = media_name.slice(0, media_name.indexOf("."));
                await this.addSegmentMediaNow(
                  this.roadID,
                  media_name,
                  this.uploadmedia,
                  res
                );
                this.isbusy = false;
              });
          })
        )
        .subscribe();
    } catch (error) {
      // handle the exception
      console.error(error);
      this.isbusy = false;
    } finally {
    }
  }

  public gotoMap(res) {
    if (res) {
      //this.loadDetails();
    }
    this.showMap = res;
  }

  async addSegmentMediaNow(roadid, medianame, mediatype, mediaurl) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const dt = `${year}${month}${day}${hours}${minutes}${seconds}`;
    let segmentMedia: AddSegmentMediaModal = {
      user_id: localStorage.getItem("uuid"),
      road_id: roadid,
      media_name: medianame,
      media_type: mediatype,
      media_url: mediaurl,
      addedondatetime: dt,
      enabled: true,
      approved: true,
    };
    await this.db_m.create(segmentMedia);
  }
}
