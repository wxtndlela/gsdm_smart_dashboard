import { Component, OnInit } from "@angular/core";
import * as map_style from "../../../providers/map.styles";
import { Billboards } from "../../../services/db";
import { BillboardModal } from "../../../providers";
import {
  PopoverController,
  ModalController,
  ToastController,
  LoadingController,
  AlertController,
  NavController,
} from "@ionic/angular";
import { BookingComponent } from "../../shared/booking/booking.component";
import { FileService } from "../../../services/file.service";

@Component({
  selector: "app-ri-upload-media",
  templateUrl: "./ri-upload-media.component.html",
  styleUrls: ["./ri-upload-media.component.scss"],
})
export class RiUploadMediaComponent implements OnInit {
  // areaChartData = [
  //   {
  //     label: "# of Votes",
  //     data: [10, 19, 3, 5, 2, 3],
  //     borderWidth: 1,
  //     fill: true,
  //   },
  // ];

  // areaChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];

  // areaChartOptions = {};

  // areaChartColors = [
  //   {
  //     borderColor: "rgba(255,99,132,1)",
  //     backgroundColor: "rgba(255,99,132,.2)",
  //   },
  // ];

  // map: google.maps.Map;
  // Billboard: any;
  // Markers: any[] = [];

  constructor() // private db: Billboards, //
  // private modalController: ModalController,
  // private alertCtrl: AlertController,
  // private file: FileService
  {}

  ngOnInit(): void {
    //this.load_map();
    // this.db.Billboards.subscribe((val) => {
    //   this.Billboard = val;
    //   console.log("Billboards", this.Billboard);
    //   this.plot_markers();
    // });
  }

  // add_marker(location) {
  //   var icon;
  //   icon = {
  //     url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  //     strokeColor: "white",
  //   };

  //   let marker = new google.maps.Marker({
  //     position: location,
  //     map: this.map,
  //     icon: icon,
  //   });

  //   this.Markers.push(marker);
  // }

  // plot_markers() {
  //   this.clear_map();

  //   for (let index = 0; index < this.Billboard.length; index++) {
  //     const b: BillboardModal = this.Billboard[index];
  //     let location = {
  //       lat: Number(b.latitude),
  //       lng: Number(b.longitude),
  //     };

  //     this.add_marker(location);
  //   }
  // }

  // /**
  //  * load_map
  //  */
  // public async load_map() {
  //   this.map = new google.maps.Map(
  //     document.getElementById("map_canvas_billboards"),
  //     {
  //       center: { lat: -25.8783085, lng: 28.0247615 },
  //       zoom: 9,
  //       zoomControl: true,
  //       mapTypeControl: false,
  //       fullscreenControl: true,
  //       streetViewControl: true,

  //       streetViewControlOptions: {
  //         position: google.maps.ControlPosition.RIGHT_BOTTOM,
  //       },

  //       zoomControlOptions: {
  //         position: google.maps.ControlPosition.LEFT_BOTTOM,
  //       },

  //       fullscreenControlOptions: {
  //         position: google.maps.ControlPosition.BOTTOM_RIGHT,
  //       },
  //     }
  //   );

  //   this.set_map_styles();
  //   //DarkMap by default
  //   this.map.setMapTypeId("DarkMap");
  // }

  // /**
  //  * set_styles
  //  */
  // public set_map_styles() {
  //   //Associate the styled map with the MapTypeId and set it to display.
  //   this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
  //   this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
  //   this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
  // }

  // /**
  //  * change_style
  //  */
  // public change_style(mapStyle) {
  //   this.map.setMapTypeId(mapStyle);
  // }

  // clear_map() {
  //   if (this.Markers && this.Markers.length > 0) {
  //     for (let index = 0; index < this.Markers.length; index++) {
  //       let marker: google.maps.Marker = this.Markers[index];
  //       marker.setMap(null);
  //     }
  //   }
  // }

  // async book_billboard(data) {
  //   const modal = await this.modalController.create({
  //     component: BookingComponent,
  //     cssClass: "modal-full",
  //     componentProps: {
  //       title: "Booking",
  //       data: data,
  //     },
  //   });

  //   await modal.present();
  // }

  // /**
  //  * export_as
  //  */
  // public async export_as() {
  //   const alert = await this.alertCtrl.create({
  //     header: "Export",
  //     message: "Export file as ?",
  //     buttons: [
  //       {
  //         text: "CSV",
  //         role: "danger",
  //         handler: () => {
  //           let data = this.Billboard;
  //           this.file.exportAsCsvFile(data, "Sites ");
  //         },
  //       },
  //       {
  //         text: "EXCEL",
  //         role: "danger",
  //         handler: () => {
  //           let data = this.Billboard;
  //           this.file.exportAsExcelFile(data, "Sites - ");
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }
}
