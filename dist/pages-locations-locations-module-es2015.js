(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-locations-locations-module"],{

/***/ "8fBi":
/*!**********************************************************!*\
  !*** ./src/app/pages/locations/locations.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  font-size: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xuICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "K/qq":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/locations/locations.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\n<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Media Distribution Points (MDPs) [{{Billboard.length}}]\n    </h3>\n</div>\n\n<!-- cards -->\n<div class=\"row\">\n    <!-- <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-file-document\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add landlord\n                </h6>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_billboard()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-account-plus\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add MDP\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <!-- <div class=\"col-sm-4\">\n                            <h4 class=\"card-title\">Locations ({{Billboard.length}})</h4>\n                        </div> -->\n                        <div class=\"col-sm-4\">\n\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <a style=\"width: 100%;\" class=\" btn btn-info ml-auto\">Export</a>\n                        </div>\n                    </div>\n                    <br>\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <div *ngFor=\"let item of Billboard\">\n                            <div class=\"d-flex\">\n                                <div class=\"d-flex align-items-center mr-4 text-muted font-weight-light\">\n                                    <i class=\"mdi mdi mdi-map-marker icon-sm mr-2\"></i>\n                                    <span>{{item.name}}</span>\n                                </div>\n                            </div>\n\n\n\n                            <div class=\"row mt-3\">\n                                <div class=\"col-md-6 pr-1\">\n                                    <img style=\"height: 20vh;object-fit: cover;\" src=\"{{item.photo_url}}\"\n                                        class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                                    <br>\n                                    <div class=\"row\">\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-motorbike icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-car icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-truck icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                </div>\n\n                                <div class=\"col-md-6 pl-1\">\n                                    <div class=\"table-responsive\" style=\"max-height: max-content;\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <td>\n                                                        Dimension\n                                                    </td>\n                                                    <td>\n                                                        {{item.screen_width}} X {{item.screen_height}}\n                                                    </td>\n                                                </tr>\n                                            </thead>\n\n                                            <tbody>\n\n\n                                                <tr>\n                                                    <td>\n                                                        Orientation\n                                                    </td>\n                                                    <td>\n                                                        {{item.orientation}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        LSM\n                                                    </td>\n                                                    <td>\n                                                        6 X 9\n                                                    </td>\n                                                </tr>\n\n\n                                                <tr>\n                                                    <td>\n                                                        Peak Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.peak_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        O/Peak Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.offpeak_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        Special Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.special_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        MDP Type\n                                                    </td>\n                                                    <td>\n                                                        {{item.mdptype}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        MDP Location\n                                                    </td>\n                                                    <td>\n                                                        {{item.mdplocation}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td></td>\n                                                    <td>\n                                                    </td>\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n                                    </div>\n\n                                </div>\n                        \n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size=\"6\" (click)=\"edit_billboard(item)\"><ion-button size=\"default\" expand=\"full\">Edit</ion-button></ion-col>\n                                        <ion-col size=\"6\" (click)=\"presentConfirm(item)\"><ion-button size=\"default\" expand=\"full\" color=\"danger\">Remove</ion-button></ion-col>\n                                        \n                                    </ion-row>\n                                    \n                                </ion-grid>>\n                                <br>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-4\" (click)=\"change_style('DarkMap')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/dark-map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                    <div class=\"col-4 \" (click)=\"change_style('hybrid')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/Satellite-map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                    <div class=\"col-4 \" (click)=\"change_style('2DMap')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/2D-Map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                </div>\n                <div style=\"height: 50vh;\" id=\"map_canvas_locations\">\n                </div>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>");

/***/ }),

/***/ "hNKy":
/*!********************************************************!*\
  !*** ./src/app/pages/locations/locations.component.ts ***!
  \********************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./locations.component.html */ "K/qq");
/* harmony import */ var _locations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations.component.scss */ "8fBi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/billboard/billboard.component */ "wNKH");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/db */ "6BIP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let LocationsComponent = class LocationsComponent {
    constructor(modalController, db, alertCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.Markers = [];
    }
    ngOnInit() {
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
    load_map() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    /**
     * set_styles
     */
    set_map_styles() {
        //Associate the styled map with the MapTypeId and set it to display.
        // this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
        // this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
        // this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
    }
    /**
     * change_style
     */
    change_style(mapStyle) {
        // this.map.setMapTypeId(mapStyle)
    }
    presentConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    add_billboard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__["BillboardComponent"],
                cssClass: "modal-full",
                componentProps: {
                    title: "Add MDP",
                },
            });
            yield modal.present();
        });
    }
    edit_billboard(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log(data)
            const modal = yield this.modalController.create({
                component: _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__["BillboardComponent"],
                cssClass: "modal-full",
                componentProps: {
                    title: "Edit Location",
                    data: data,
                    data_id: data.id,
                },
            });
            yield modal.present();
        });
    }
    plot_markers() {
        this.clear_map();
        for (let index = 0; index < this.Billboard.length; index++) {
            const b = this.Billboard[index];
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
    open_info_windows(image, marker) {
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
};
LocationsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_5__["Billboards"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-locations",
        template: _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LocationsComponent);



/***/ }),

/***/ "tsj7":
/*!*****************************************************!*\
  !*** ./src/app/pages/locations/locations.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsModule", function() { return LocationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations.component */ "hNKy");





const routes = [
    { path: '', component: _locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"] }
];
let LocationsModule = class LocationsModule {
};
LocationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]
    })
], LocationsModule);



/***/ })

}]);
//# sourceMappingURL=pages-locations-locations-module-es2015.js.map