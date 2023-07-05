import { Component, OnInit } from "@angular/core";
import * as map_style from "../../../providers/map.styles";
import { BillboardComponent } from "../../shared/billboard/billboard.component";
import { Billboards } from "../../../services/db";
import { BillboardModal } from "../../../providers";
import {
  PopoverController,
  ModalController,
  AlertController,
  NavController,
} from "@ionic/angular";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.scss"],
})
export class LocationsComponent implements OnInit {
  //map: google.maps.Map;
  Billboard: any;
  Markers: any[] = [];

  constructor(
    private modalController: ModalController,
    private db: Billboards,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.load_map();
    this.db.Billboards.subscribe((val) => {
      this.Billboard = val;
      //console.log('Billboards', this.Billboard);
      this.plot_markers();
    });
  }

  /**
   * load_map
   */
  public async load_map() {
    // this.map = new google.maps.Map(document.getElementById('map_canvas_locations'), {
    //   center: { lat: -25.8783085, lng: 28.0247615 },
    //   zoom: 9,
    //   zoomControl: true,
    //   mapTypeControl: false,
    //   fullscreenControl: true,
    //   streetViewControl: true,
    //   streetViewControlOptions: {
    //     position: google.maps.ControlPosition.RIGHT_BOTTOM
    //   },
    //   zoomControlOptions: {
    //     position: google.maps.ControlPosition.LEFT_BOTTOM
    //   },
    //   fullscreenControlOptions: {
    //     position: google.maps.ControlPosition.BOTTOM_RIGHT
    //   }
    // });
    // this.set_map_styles();
    // //DarkMap by default
    // this.map.setMapTypeId('DarkMap')
  }

  /**
   * set_styles
   */
  public set_map_styles() {
    //Associate the styled map with the MapTypeId and set it to display.
    // this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
    // this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
    // this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
  }

  /**
   * change_style
   */
  public change_style(mapStyle) {
    // this.map.setMapTypeId(mapStyle)
  }

  async presentConfirm(item) {
    this.alertCtrl
      .create({
        header: "Confirm Action",
        subHeader: "Delete MDP",
        message: "Are you sure you want to delete this item?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
          {
            text: "Delete",
            handler: () => {
              this.db.delete(item.id);
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  async add_billboard() {
    const modal = await this.modalController.create({
      component: BillboardComponent,
      cssClass: "modal-full",
      componentProps: {
        title: "Add MDP",
      },
    });

    await modal.present();
  }

  async edit_billboard(data) {
    //console.log(data)
    const modal = await this.modalController.create({
      component: BillboardComponent,
      cssClass: "modal-full",
      componentProps: {
        title: "Edit Location",
        data: data,
        data_id: data.id,
      },
    });

    await modal.present();
  }

  plot_markers() {
    this.clear_map();

    for (let index = 0; index < this.Billboard.length; index++) {
      const b: BillboardModal = this.Billboard[index];
      let location = {
        lat: Number(b.latitude),
        lng: Number(b.longitude),
      };

      this.add_marker(location, b.photo_url);
    }
  }

  clear_map() {
    // if (this.Markers && this.Markers.length > 0) {
    //   for (let index = 0; index < this.Markers.length; index++) {
    //     let marker: google.maps.Marker = this.Markers[index];
    //     marker.setMap(null);
    //   }
    // }
  }

  add_marker(location, photo_url) {
    // var icon;
    // icon = {
    //   url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    //   strokeColor: "white"
    // }
    // let marker = new google.maps.Marker({
    //   position: location,
    //   map: this.map,
    //   icon: icon
    // });
    // marker.addListener("click", () => {
    //   this.open_info_windows(photo_url, marker);
    // });
    // this.Markers.push(marker);
  }

  /**
   * open_info_windows
   */
  public open_info_windows(image, marker) {
    // if (infowindow) {
    //   infowindow.close();
    // }

    const contentString = `
      <div>
  <div >
    <div>
      <img
        src="https://www.billboardfinder.co.za/wp-content/uploads/2020/11/William-Nicol-Road-Fourways-Johannesburg4-350x233.jpg"
        class="mb-2 mw-100 w-100 rounded" alt="image">
    </div>
    <div class="table-responsive">
      <table class="table">

        <tbody>
          <tr>
            <td>Location</td>
            <td>Sunninghil</td>
          </tr>
          <tr>
            <td>Dimensions</td>
            <td>3 x 6</td>
          </tr>
          <tr>
            <td>Impressions</td>
            <td>53275533 </td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>R55 094 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
     `;

    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });

    // infowindow.open(this.map, marker);
  }
}
