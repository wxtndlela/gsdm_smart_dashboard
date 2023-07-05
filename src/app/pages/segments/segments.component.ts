import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  HostListener,
} from "@angular/core";
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
import { Storage } from "@ionic/storage-angular";
import firebase from "firebase/app";
import "firebase/storage";
import { saveAs } from "file-saver";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-segments",
  templateUrl: "./segments.component.html",
  styleUrls: ["./segments.component.scss"],
})
export class SegmentsComponent implements OnInit {
  @ViewChild("fileInput") fileInput: ElementRef;

  //map: google.maps.Map;
  //Segments: any;
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
  offlinemode: boolean = false;
  downloading: boolean = false;
  offlinemedia: any[] = [];
  totalIncr: number = 0;
  percDownload: number = 0;
  host: any = "192.168.15.187";

  //media_url: any;
  opentype: any = "";
  show_info: boolean = false;
  show_list: boolean = false;
  SegmentMediaOnline: boolean = false;
  current_roadid: any = "";
  isInternetAvailable: boolean;

  opencnt: any = 0;

  // Create a reference to the class instance
  self = this;
  file: string | ArrayBuffer;

  streetName: string;
  roadID: string;
  munic: string;
  start_km: string;
  end_km: string;
  VCI: string;
  geometry: string[];
  road_len: string;
  route_seq: string;
  start_len: string;
  timerId: any;
  displayname: any;
  showpercent: any;
  progessStage: any = "";
  _segments: any;
  searchQuery: string = "";

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
  mapSrc: SafeResourceUrl;

  constructor(
    private modalController: ModalController,
    private db: Segments,
    private db_m: SegmentMedia,
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private alertCtrl: AlertController,
    private global: GlobalSettings,
    //private storage: FirebaseStorage,
    public Offline: Storage,
    private storage: AngularFireStorage,
    private location_services: GeolocationService,
    private loadingCtrl: LoadingController
  ) {
    this.checkInternetAvailability();

    setInterval(() => {
      this.checkInternetAvailability();
    }, 2000);
  }

  ngOnInit(): void {
    this.attachMessageListener();
    console.log("Loading Segment Details");
    //this.load_map();
    this.loadDetails();

    setTimeout(() => {
      if (this.isInternetAvailable == false) {
        //Offline
        // console.log("--No Internet--");
        this.global.showSync = false;
        this.Offline.get("MasterData").then((_data) => {
          console.log("[OFFLINE-DATA]:", _data);
          this._segments = _data;
          this.showMap = true;
          this.offlinemode = true;
        });
      } else {
        //Online
        this.global.showSync = true;
        // console.log("[ONLINE-DATA]:",this._segments);
        this.Offline.set("MasterData", this._segments);
        this.Offline.get("MasterData").then((_data) => {
          console.log("[ONLINE-OFFLINE-DATA]:", _data);
        });
        this.offlinemode = false;

        //console.log(this._segments[0]);
      }
    }, 5000);
  }

  ngOnDestroy() {
    // Remove the message event listener when the component is destroyed

    this.detachMessageListener();
  }

  attachMessageListener() {
    // Add event listener to listen for messages from the iframe

    window.addEventListener("message", this.handleMessageEvent);
  }

  detachMessageListener() {
    // Remove event listener when the component is destroyed

    window.removeEventListener("message", this.handleMessageEvent);
  }

  @HostListener("window:message", ["$event"])
  handleMessageEvent(event: MessageEvent) {
    // Ensure the message is coming from a trusted source

    // You can check event.origin and validate it against your expected iframe origin

    // Handle the received message

    const message = event.data;
    if (message.type === "clickEvent") {
      setTimeout(async () => {
        const roadID = message.data.roadid;
        // Perform actions based on the received click data
        console.log("Click event received from Map:", roadID);
        //this.mapClickedSegment(roadID);
        const foundObject = await this._segments.find(
          (obj) => obj.road_id === roadID
        );
        //console.log("SEG:", foundObject.geometry[0]);
        let coords = foundObject.geometry;
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
        this.show_info = false;

        this.current_roadid = this.uploadmedia = "";
        this.viewType = "";
        this.segrec_id = foundObject.id;
        this.streetName = foundObject.street_name;
        this.roadID = foundObject.road_id;
        this.VCI = foundObject.VCI;
        this.road_len = foundObject.road_len;
        this.route_seq = foundObject.route_seq;
        this.start_len = foundObject.st_length;
        this.end_km = foundObject.end_km;
        this.munic = foundObject.municipality;
        this.start_km = foundObject.start_km;
        this.latitude = outputArray[0]["lat"];
        this.longitude = outputArray[0]["lng"];

        this.showMap = false;
        await this.loadSegmentMedia(this.roadID);
        await this.getMediaForOffline(this.roadID);
      }, 1000);
    }
  }

  // async mapClickedSegment(_segmentid) {
  //   const foundObject = await this._segments.find(
  //     (obj) => obj.road_id === _segmentid
  //   );
  //   //console.log("SEG:", foundObject.geometry[0]);
  //   let coords = foundObject.geometry;
  //   let fin_coords = [];
  //   for (let i = 0; i < coords.length; i++) {
  //     let _res = [];
  //     let res = "lng:" + coords[i];
  //     res = res.replace(",", ",lat:");

  //     fin_coords.push(res);
  //   }

  //   const outputArray = fin_coords.map((item: string) => {
  //     const [lng, lat] = item.split(",");
  //     return {
  //       lng: parseFloat(lng.split(":")[1]),
  //       lat: parseFloat(lat.split(":")[1]),
  //     };
  //   });
  //   this.show_info = false;

  //   this.current_roadid = this.uploadmedia = "";
  //   this.viewType = "";
  //   this.segrec_id = foundObject.id;
  //   this.streetName = foundObject.street_name;
  //   this.roadID = foundObject.road_id;
  //   this.VCI = foundObject.VCI;
  //   this.road_len = foundObject.road_len;
  //   this.route_seq = foundObject.route_seq;
  //   this.start_len = foundObject.st_length;
  //   this.end_km = foundObject.end_km;
  //   this.munic = foundObject.municipality;
  //   this.start_km = foundObject.start_km;
  //   this.latitude = outputArray[0]["lat"];
  //   this.longitude = outputArray[0]["lng"];

  //   this.showMap = false;
  //   await this.loadSegmentMedia(this.roadID);
  //   await this.getMediaForOffline(this.roadID);
  // }

  loadDetails() {
    this.db.Segments.subscribe((val) => {
      this._segments = val;
      //console.log(val[0]);

      // if (this._segments.length > 0) {
      this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        "http://" + this.host + ":3000/map"
      );
      //this.load_map();
      //}
    });
    this.db.getAll();
  }

  async downloadFileFromStorage(downloadURL: string, fileName: string) {
    try {
      // Fetch the file and create a blob
      const response = await fetch(downloadURL);
      const blob = await response.blob();

      // Save the blob as a file using the FileSaver library
      saveAs(blob, fileName);
      console.log("Downloaded: ", fileName);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }

  async gotoDownload_script(
    _url: any,
    _fileName: string,
    total_length: number
  ) {
    const apiUrl = "http://" + this.host + ":3000/run-script";
    // Replace with your server's URL

    const requestData = { url: _url, fname: _fileName, road_id: this.roadID };

    // Customize the data you want to send to the server

    this.http.post(apiUrl, requestData).subscribe(
      (res) => {
        if (res) {
          this.totalIncr += 1;

          //Store local file paths to ARRAY
          this.offlinemedia.push(
            "./assets/media/" + this.roadID + "/" + _fileName
          );
          if (this.totalIncr >= total_length) {
            this.downloading = false;
            //Store file path ARRAY to offline storage
            this.Offline.set(this.roadID, this.offlinemedia);
            //console.log("Media:", this.offlinemedia);
          } else {
            this.downloading = true;
          }
        }
        this.percDownload = Number(
          ((this.totalIncr / total_length) * 100).toFixed(1)
        );

        // Handle any further actions or responses from the server
      },

      (error) => {
        console.error("Error executing Download script:", error);

        // Handle the error condition if necessary
      }
    );
    return 0;
  }

  async gotoDownload() {
    this.downloading = true;
    this.totalIncr = 0;

    let len = this.SegmentMediaArray.length;
    let cnt = 0;
    this.offlinemedia = [];

    while (cnt < len) {
      let type_ = "";

      if (this.SegmentMediaArray[cnt].media_url.includes(".png")) {
        type_ = ".png";
      } else if (this.SegmentMediaArray[cnt].media_url.includes(".jpeg")) {
        type_ = ".jpeg";
      } else if (this.SegmentMediaArray[cnt].media_url.includes(".jpg")) {
        type_ = ".jpg";
      } else if (this.SegmentMediaArray[cnt].media_url.includes(".mp4")) {
        type_ = ".mp4";
      }

      await this.gotoDownload_script(
        this.SegmentMediaArray[cnt].media_url,
        this.SegmentMediaArray[cnt].media_name + type_,
        len
      );

      cnt += 1;
    }
  }

  async getMediaForOffline(roadID) {
    setTimeout(() => {
      //console.log("OFF:", this.SegmentMediaOnline);
      if (this.isInternetAvailable == false) {
        //Offline
        //console.log("--No Internet--");

        this.Offline.get("M-" + roadID).then((_data) => {
          this.SegmentMediaArray = _data;
          this.offlinemode = true;

          let _tmpMediaDownloaded = [];

          //Retrieve a list of media links that were downloaded
          this.Offline.get(roadID).then((ret) => {
            _tmpMediaDownloaded = ret;
            console.log(_tmpMediaDownloaded);
            let cnt = 0;
            let len = _tmpMediaDownloaded.length;
            while (cnt < len) {
              let _replace = "./assets/media/" + roadID + "/";
              let _fname = String(
                _tmpMediaDownloaded[cnt].replace(_replace, "")
              );
              _fname = _fname.substring(0, _fname.length - 4);

              //Find matching record by media_name
              const foundObject = this.SegmentMediaArray.find(
                (obj) => obj.media_name === _fname
              );
              if (foundObject) {
                //If found, then replace cloud url with local
                foundObject.media_url = _tmpMediaDownloaded[cnt];
              }

              cnt += 1;
            }
          });
        });
      } else {
        //Online

        this.Offline.set("M-" + roadID, this.SegmentMediaArray);
        this.offlinemode = false;
        //console.log("MEDIA:", this.SegmentMediaArray);

        //Assume Offline
      }
    }, 5000);
  }

  async loadSegmentData(road_id, mid, mtype, murl) {
    (await this.db.getSegment(road_id)).subscribe(
      async (data: AddSegment[]) => {
        if (this.opencnt < 1) {
          if (data.length > 0) {
            //We are online
            const modal = await this.modalController.create({
              component: InspectionComponent,
              cssClass: "modal-full",
              componentProps: {
                title: "Open Inspection",
                segrec_id: this.segrec_id,
                roadid: data[0]["road_id"],
                mid: mid,
                murl: murl,
                offline: false,
                mtype: mtype,
                segment: data[0],
              },
            });

            await modal.present();
          } else {
            //Offline /
            //Find matching record by road_id
            const foundObject = this._segments.find(
              (obj) => obj.road_id === road_id
            );
            if (foundObject) {
              const modal = await this.modalController.create({
                component: InspectionComponent,
                cssClass: "modal-full",
                componentProps: {
                  title: "Open Inspection",
                  segrec_id: this.segrec_id,
                  roadid: foundObject.road_id,
                  mid: murl, //Insert real media URL if we are working offline
                  murl: "",
                  offline: true,
                  mtype: mtype,
                  segment: foundObject,
                },
              });

              await modal.present();
            }
          }

          this.opencnt += 1;
        }
      }
    );
  }

  loadSegmentMedia(road_id) {
    //This gets the segment related media
    this.db_m.SegmentMedia.subscribe((val) => {
      this.SegmentMediaOnline = true;
      this.SegmentMediaArray = val;
    });
    this.db_m.getSegmentMedia(road_id);
  }

  ionViewDidEnter() {
    this.loadDetails();
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
  public async load_map() {
    // this.latitude = Number("-26.651596892582404");
    // this.longitude = Number("28.618020684007547");
    // this.map = new google.maps.Map(
    //   document.getElementById("map_canvas_segments"),
    //   {
    //     center: { lat: this.latitude, lng: this.longitude },
    //     zoom: 12,
    //     zoomControl: true,
    //     mapTypeControl: false,
    //     fullscreenControl: true,
    //     streetViewControl: true,
    //     streetViewControlOptions: {
    //       position: google.maps.ControlPosition.RIGHT_BOTTOM,
    //     },
    //     zoomControlOptions: {
    //       position: google.maps.ControlPosition.LEFT_BOTTOM,
    //     },
    //     fullscreenControlOptions: {
    //       position: google.maps.ControlPosition.BOTTOM_RIGHT,
    //     },
    //   }
    // );
    // const loading = await this.loadingCtrl.create({
    //   message: "Loading Segments ...",
    // });
    // loading.present();
    // await this.addSegments(this.map);
    // loading.dismiss();
    // this.map.setMapTypeId("hybrid");
    // //this.getAddress();
    // // this.add_marker({ lat: this.latitude, lng: this.longitude });
    // this.map.addListener("click", (mapsMouseEvent) => {
    //   let location = {
    //     lat: mapsMouseEvent.latLng.lat(),
    //     lng: mapsMouseEvent.latLng.lng(),
    //   };
    //   // this.add_marker(location);
    // });
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
    //polygon.setMap(this.map);
  }

  myFunction(name: string): void {}

  async resetSegment(coords) {
    // Create a new polygon with the specified coordinates
    // const polygon = new google.maps.Polyline({
    //   path: coords,
    //   strokeColor: "rgb(122, 17, 163)",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 5,
    // });
    // let me = 0;
    // // Add the polygon to the map
    // polygon.setMap(this.map);
  }

  async addSegments(map) {
    // for (let i = 0; i < this._segments.length; i++) {
    //   let coords = this._segments[i]["geometry"];
    //   let fin_coords = [];
    //   for (let i = 0; i < coords.length; i++) {
    //     let _res = [];
    //     let res = "lng:" + coords[i];
    //     res = res.replace(",", ",lat:");
    //     fin_coords.push(res);
    //   }
    //   const outputArray = fin_coords.map((item: string) => {
    //     const [lng, lat] = item.split(",");
    //     return {
    //       lng: parseFloat(lng.split(":")[1]),
    //       lat: parseFloat(lat.split(":")[1]),
    //     };
    //   });
    //   //console.log(outputArray);
    //   // Create a new polygon with the specified coordinates
    //   const polygon = new google.maps.Polyline({
    //     path: outputArray,
    //     strokeColor: "rgb(122, 17, 163)",
    //     strokeOpacity: 0.8,
    //     strokeWeight: 5,
    //   });
    //   let me = 0;
    //   // Add the polygon to the map
    //   //polygon.setMap(this.map);
    //   // Add a click event listener to the polygon
    //   //clearTimeout(this.timerId);
    //   // Save the original stroke color of the polygon
    //   const originalStrokeColor = polygon.get("strokeColor");
    //   // Add a mouseover listener to change the stroke color to pink
    //   polygon.addListener("mouseover", async () => {
    //     polygon.setOptions({ strokeColor: "pink" });
    //     this.current_roadid = this._segments[i]["road_id"];
    //     this.show_info = true;
    //     this.latitude = outputArray[0]["lat"];
    //     this.longitude = outputArray[0]["lng"];
    //     this.getAddress();
    //   });
    //   // Add a mouseout listener to reset the stroke color to the original color
    //   polygon.addListener("mouseout", async () => {
    //     polygon.setOptions({ strokeColor: originalStrokeColor });
    //     this.show_info = false;
    //   });
    //   polygon.addListener("click", async () => {
    //     this.show_info = false;
    //     this.current_roadid = this.uploadmedia = "";
    //     this.viewType = "";
    //     this.segrec_id = this._segments[i]["id"];
    //     this.streetName = this._segments[i]["street_name"];
    //     this.roadID = this._segments[i]["road_id"];
    //     this.VCI = this._segments[i]["VCI"];
    //     this.road_len = this._segments[i]["road_len"];
    //     this.route_seq = this._segments[i]["route_seq"];
    //     this.start_len = this._segments[i]["st_length"];
    //     this.end_km = this._segments[i]["end_km"];
    //     this.munic = this._segments[i]["municipality"];
    //     this.start_km = this._segments[i]["start_km"];
    //     this.latitude = outputArray[0]["lat"];
    //     this.longitude = outputArray[0]["lng"];
    //     this.showMap = false;
    //     await this.loadSegmentMedia(this.roadID);
    //     await this.getMediaForOffline(this.roadID);
    //     //this.setSegment(outputArray);
    //     ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
    //     //clearTimeout(timerId);
    //     //console.log(outputArray[0]["lat"]);
    //   });
    // }
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
    let filepath = "road-inspection/" + this.roadID + `/${file.name}`;

    if (this.uploadmedia == "vid3d") {
      filepath = "road-inspection/" + this.roadID + `/3D_${file.name}`;
    }

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
                if (this.uploadmedia == "vid3d") {
                  media_name = "3D_" + media_name;
                }
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

  get filteredItems(): string[] {
    return this._segments.filter(
      (item) =>
        typeof item.road_id === "string" &&
        item.road_id.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  async itemClicked(item) {
    this.show_info = false;
    this.show_list = false;
    this.current_roadid = this.uploadmedia = "";
    this.viewType = "";
    this.segrec_id = item.id;
    this.streetName = item.street_name;
    this.roadID = item.road_id;
    this.VCI = item.VCI;
    this.road_len = item.road_len;
    this.route_seq = item.route_seq;
    this.start_len = item.st_length;
    this.end_km = item.end_km;
    this.munic = item.municipality;
    this.start_km = item.start_km;

    let _gps = item.geometry[0].split(",");

    this.latitude = _gps[1];
    this.longitude = _gps[0];

    this.showMap = false;
    await this.loadSegmentMedia(this.roadID);
    await this.getMediaForOffline(this.roadID);
  }

  public gotoMap(res) {
    if (res) {
      this.loadDetails();
    }
    this.showMap = res;
    setTimeout(() => {
      if (this.isInternetAvailable == false) {
        //Offline
        //console.log("--No Internet--");
        this.Offline.get("MasterData").then((_data) => {
          this._segments = _data;
          //this.show_list = true;
          this.offlinemode = true;
        });
      } else {
        //Online
        this.Offline.set("MasterData", this._segments);
        this.offlinemode = false;
        //console.log(this._segments[0]);
      }
    }, 5000);
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

  checkInternetAvailability() {
    console.log("Checking internet...");

    // Try to fetch a resource from the internet
    fetch("https://www.google.com", {
      mode: "no-cors", // 'no-cors' mode to avoid CORS issues
      // The server may not respond, so set a timeout
    })
      .then(() => {
        console.log("--[DASH] Online--");
        this.isInternetAvailable = true;
      })
      .catch(() => {
        console.log("--[DASH] No Internet--");
        this.isInternetAvailable = false;
      });
    // try {
    //   console.log('Checking internet...');
    //   if (navigator.onLine) {
    //     console.log('--[DASH] Online--');
    //     this.isInternetAvailable = true;
    //   } else {
    //     console.log('--[DASH] No Internet--');
    //     this.downloading = false;
    //     this.isInternetAvailable = false;
    //   }
    // } catch (error) {
    //   console.error('An error occurred:', error);
    // }
  }
}
