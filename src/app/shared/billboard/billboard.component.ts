import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { GeolocationService } from "../../../services/geolocation.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BillboardModal, BillboardModalEdit } from "../../../providers";
import { Billboards } from "../../../services/db";
import * as moment from "moment";
import { FirebaseStorage } from "../../../services/firebase.storage.service";
import { LoadingController, ModalController } from "@ionic/angular";
import { Content } from "../../../services/db/db.addcontent";
import { Schedule } from "../../../services/db/db.addschedule";
import { Calltoaction } from "../../../services/db/db.calltoaction";

@Component({
  selector: "app-billboard",
  templateUrl: "./billboard.component.html",
  styleUrls: ["./billboard.component.scss"],
})
export class BillboardComponent implements OnInit, AfterViewInit {
  isLoading = true;
  @Input("title") title;
  @Input("data") data: BillboardModal;
  @Input("data_id") data_id;

  latitude: number;
  longitude: number;
  //map: google.maps.Map;
  marker: google.maps.Marker;
  billboardForm: FormGroup;
  surburb: any;
  postalCode: any;
  city: any;
  province: any;
  width: any;
  mdplocation: any;
  mdptype: any = "Intrusion";
  photo_url: any;
  content_url: any;
  schedule_id: any;
  calltoaction: any;
  file: string | ArrayBuffer;
  Cont: any;
  Scheds: any;
  CActions: any;

  constructor(
    private modalController: ModalController,
    private location_services: GeolocationService,
    private fb: FormBuilder,
    private db_cont: Content,
    private db_scheds: Schedule,
    private db_caction: Calltoaction,
    private db: Billboards,
    private storage: FirebaseStorage,
    private loadingCtrl: LoadingController
  ) {
    this.billboardForm = this.fb.group({
      width: ["18.99", Validators.required],
      height: ["4.55", Validators.required],
      name: ["", Validators.nullValidator],
      content_url: ["", Validators.nullValidator],
      schedule_id: ["", Validators.nullValidator],
      calltoaction: ["", Validators.nullValidator],
      mdptype: ["", Validators.nullValidator],
      mdplocation: ["", Validators.nullValidator],
      peak_rate: ["0.0", Validators.required],
      offpeak_rate: ["0.0", Validators.required],
      special_rate: ["0.0", Validators.required],
    });
  }

  ngOnInit(): void {
    //Get Content URLs
    this.db_cont.Content.subscribe((val) => {
      this.Cont = val;
    });
    let user_id = localStorage.getItem("user_id");
    this.db_cont.getContent(user_id);

    //Get Schedules
    this.db_scheds.Schedule.subscribe((val) => {
      this.Scheds = val;
    });
    this.db_scheds.getSchedules(user_id);

    //Get Call To Actions
    this.db_caction.Calltoaction.subscribe((val) => {
      this.CActions = val;
    });
    this.db_caction.getCalltoactions(user_id);

    if (this.data) {
      //console.log(this.data)
      if (!this.data.content_url) {
        this.data.content_url = "";
      }
      if (!this.data.schedule_id) {
        this.data.schedule_id = "";
      }
      if (!this.data.calltoaction) {
        this.data.calltoaction = "";
      }
      if (!this.data.special_rate) {
        this.data.special_rate = 0.0;
      }
      this.latitude = 0; //Number(this.data.latitude);
      this.longitude = 0; //Number(this.data.longitude);
      this.surburb = this.data.surburb;
      this.postalCode = this.data.postalCode;
      this.city = this.data.city;
      this.province = "Mpumalanga"; //this.data.province;
      this.content_url = this.data.content_url;
      this.schedule_id = ""; //this.data.schedule_id;
      this.calltoaction = ""; //this.data.calltoaction;
      this.mdplocation = "On-Site"; //this.data.mdplocation;
      this.mdptype = this.data.mdptype;
      this.width = 0;
      this.billboardForm.setValue({
        width: "0", //this.data.screen_width,
        height: "0", //this.data.screen_height,
        name: this.data.name,
        content_url: this.data.content_url,
        calltoaction: "", //this.data.calltoaction,
        schedule_id: "", //this.data.schedule_id,
        peak_rate: "", //this.data.peak_rate,
        offpeak_rate: "", //this.data.offpeak_rate,
        special_rate: "", //this.data.special_rate,
        mdplocation: "On-Site", //this.data.mdplocation,
        mdptype: "Intrusion", //this.data.mdptype,
      });
      this.load_map();
    } else {
      this.latitude = 0; //Number(this.location_services.lat.value);
      this.longitude = 0; //Number(this.location_services.lng.value);
      this.load_map();
    }
  }

  ionViewDidEnter() {}

  ngAfterViewInit(): void {}

  /**
   * load_map
   */
  public async load_map() {
    // this.map = new google.maps.Map(
    //   document.getElementById("map_canvas_billboard"),
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
    // this.map.setMapTypeId("hybrid");
    // this.add_marker({ lat: this.latitude, lng: this.longitude });
    // this.map.addListener("click", (mapsMouseEvent) => {
    //   let location = {
    //     lat: mapsMouseEvent.latLng.lat(),
    //     lng: mapsMouseEvent.latLng.lng(),
    //   };
    //   this.add_marker(location);
    // });
  }

  add_marker(location) {
    // this.latitude = location.lat;
    // this.longitude = location.lng;
    // this.location_services.osm_geocode_latlng(location).subscribe((res) => {
    //   console.log(res);
    //   this.surburb = res.address.suburb;
    //   this.postalCode = res.address.postcode;
    //   this.city = res.address.city ? res.address.city : res.address.county;
    //   this.province = res.address.state;
    //   let name = `${res.address.road}, ${res.address.house_number}`;
    //   //this.billboardForm.get('name').setValue(name)
    // });
    // this.remove_marker();
    // var icon;
    // icon = {
    //   url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    //   strokeColor: "white",
    // };
    // this.marker = new google.maps.Marker({
    //   position: location,
    //   map: this.map,
    //   icon: icon,
    // });
  }

  remove_marker() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async submit() {
    const loading = await this.loadingCtrl.create({
      message: "please wait ...",
    });

    loading.present();

    let province = "Mpumalanga"; //this.province;
    let city = ""; //this.city;
    let surburb = ""; //this.surburb;
    let postalCode = ""; //this.postalCode;

    let name = this.billboardForm.get("name").value;
    let content_url = this.billboardForm.get("content_url").value;
    let schedule_id = ""; //this.billboardForm.get("schedule_id").value;
    let calltoaction = ""; //this.billboardForm.get("calltoaction").value;
    let mdptype = "On-Site"; //this.billboardForm.get("mdptype").value;
    let mdplocation = ""; //this.billboardForm.get("mdplocation").value;
    let screen_height = 0; //Number(this.billboardForm.get("height").value);
    let screen_width = 0; //Number(this.billboardForm.get("width").value);
    let date_created = moment().format("DD/MM/yyyy HH:MM:SS");
    let date_modified = moment().format("DD/MM/yyyy HH:MM:SS");
    this.photo_url = await (
      await this.storage.pushFileToStorage("sitelive/billboards", this.file)
    ).getDownloadURL();
    let orientation =
      screen_height == screen_width
        ? "Square"
        : screen_height > screen_width
        ? "Potrait"
        : screen_height < screen_width
        ? "Landscape"
        : "Other";

    let peak_rate = this.billboardForm.get("peak_rate").value;
    let offpeak_rate = this.billboardForm.get("offpeak_rate").value;
    let special_rate = this.billboardForm.get("special_rate").value;

    console.log(this.photo_url);

    let billboard: BillboardModal = {
      billboard_id: "",
      postalCode: postalCode,
      city: city,
      date_created: date_created,
      date_modified: date_modified,
      latitude: this.latitude,
      longitude: this.longitude,
      name: name,
      photo_url: this.photo_url,
      province: province,
      screen_height: screen_height,
      screen_width: screen_width,
      user_id: localStorage.getItem("uuid"),
      surburb: surburb,
      orientation: orientation,
      peak_rate: peak_rate,
      offpeak_rate: offpeak_rate,
      special_rate: special_rate,
      mdplocation: mdplocation,
      mdptype: mdptype,
      content_url: content_url,
      schedule_id: schedule_id,
      calltoaction: this.calltoaction,
    };

    console.log("billboard", billboard);

    await this.db.create(billboard);
    loading.dismiss();
    this.db.getAll();
    this.dismiss();
  }

  async update() {
    const loading = await this.loadingCtrl.create({
      message: "please wait ...",
    });

    loading.present();

    let province = "Mpumalanga"; //this.province;
    let city = ""; //this.city;
    let surburb = ""; //this.surburb;
    let postalCode = ""; //this.postalCode;

    let name = this.billboardForm.get("name").value;
    let content_url = this.billboardForm.get("content_url").value;
    let schedule_id = ""; //this.billboardForm.get("schedule_id").value;
    let calltoaction = ""; //this.billboardForm.get("calltoaction").value;
    let mdptype = "On-Site"; //this.billboardForm.get("mdptype").value;
    let mdplocation = ""; //this.billboardForm.get("mdplocation").value;
    let screen_height = 0; //Number(this.billboardForm.get("height").value);
    let screen_width = 0; //Number(this.billboardForm.get("width").value);

    let date_created = moment().format("DD/MM/yyyy HH:MM:SS");
    let date_modified = moment().format("DD/MM/yyyy HH:MM:SS");

    if (!this.file) {
      this.photo_url = null;
    } else {
      this.photo_url = await (
        await this.storage.pushFileToStorage("sitelive/billboards", this.file)
      ).getDownloadURL();
    }

    let orientation =
      screen_height == screen_width
        ? "Square"
        : screen_height > screen_width
        ? "Potrait"
        : screen_height < screen_width
        ? "Landscape"
        : "Other";

    let peak_rate = this.billboardForm.get("peak_rate").value;
    let offpeak_rate = this.billboardForm.get("offpeak_rate").value;
    let special_rate = this.billboardForm.get("special_rate").value;

    let billboard: BillboardModal = null;
    let billboardEdit: BillboardModalEdit = null;
    billboard = {
      billboard_id: "",
      postalCode: postalCode,
      city: city,
      date_created: date_created,
      date_modified: date_modified,
      latitude: this.latitude,
      longitude: this.longitude,
      name: name,
      photo_url: this.photo_url,
      province: province,
      screen_height: screen_height,
      screen_width: screen_width,
      user_id: localStorage.getItem("uuid"),
      surburb: surburb,
      orientation: orientation,
      peak_rate: peak_rate,
      offpeak_rate: offpeak_rate,
      special_rate: special_rate,
      mdplocation: mdplocation,
      mdptype: mdptype,
      content_url: content_url,
      schedule_id: schedule_id,
      calltoaction: calltoaction,
    };

    billboardEdit = {
      billboard_id: "",
      postalCode: postalCode,
      city: city,
      date_created: date_created,
      date_modified: date_modified,
      latitude: this.latitude,
      longitude: this.longitude,
      name: name,
      province: province,
      screen_height: screen_height,
      screen_width: screen_width,
      surburb: surburb,
      orientation: orientation,
      peak_rate: peak_rate,
      offpeak_rate: offpeak_rate,
      special_rate: special_rate,
      mdplocation: mdplocation,
      mdptype: mdptype,
      content_url: content_url,
      schedule_id: schedule_id,
      calltoaction: calltoaction,
    };

    if (this.photo_url == null) {
      await this.db.update(this.data_id, billboardEdit);
    } else {
      await this.db.update(this.data_id, billboard);
    }

    loading.dismiss();
    this.db.getAll();
    this.dismiss();
  }

  public select_file(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // this.video = reader.result;
      console.log(reader.result);
      this.file = reader.result;
    };
  }
}
