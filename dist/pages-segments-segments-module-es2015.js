(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segments-segments-module"],{

/***/ "3nsm":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segments/segments.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #cont>\n  <div class=\"download\" *ngIf=\"downloading == true\">\n    Please wait while downloading ... {{ percDownload }}&nbsp;%\n  </div>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n    *ngIf=\"downloading == false\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"page-header\">\n        <div class=\"col-md-6\">\n          <h3 class=\"page-title\">Segments Found [{{ _segments.length }}]</h3>\n        </div>\n\n        <!-- <div *ngIf=\"show_info\" class=\"col-md-6 info\">\n          Segment ID:&nbsp;&nbsp;{{ current_roadid }}\n          <div>Address:&nbsp;&nbsp;{{ displayname }}</div>\n        </div> -->\n      </div>\n      <div class=\"col-md-12\" *ngIf=\"show_list\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend bg-transparent\">\n            <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\n          </div>\n          <input\n            type=\"text\"\n            class=\"form-control border-0\"\n            placeholder=\"Find Link/Segment\"\n            [(ngModel)]=\"searchQuery\"\n          />\n        </div>\n\n        <div class=\"list-group list-group-light space\">\n          <a\n            *ngFor=\"let item of filteredItems\"\n            class=\"list-group-item list-group-item-action px-3 border-0\"\n            aria-current=\"true\"\n            (click)=\"itemClicked(item)\"\n          >\n            {{ item.municipality }}&nbsp;&nbsp;|&nbsp;&nbsp;{{\n              item.road_id\n            }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.surfacetype }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <!--MAP-->\n        <!-- <div\n          *ngIf=\"showMap && offlinemode == false\"\n          class=\"col-md-12 grid-margin\"\n        >\n          <div class=\"card\" id=\"map_canvas_segments\" style=\"height: 85vh\"></div>\n        </div> -->\n        <div *ngIf=\"showMap\" class=\"iframe-container\">\n          <div class=\"main-iframe\">\n            <iframe\n              [src]=\"mapSrc\"\n              allow=\"microphone; camera; autoplay\"\n              allowfullscreen\n            ></iframe>\n          </div>\n        </div>\n\n        <!--SEGEMENT DETAILS-->\n        <div *ngIf=\"!showMap\" class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Physical Location:</h4>\n              <p class=\"card-description\" *ngIf=\"roadID\">\n                Coordinates :{{ latitude }}, {{ longitude }}\n                <br />\n                Address: <br /><span\n                  style=\"font-size: 12px; font-style: italic\"\n                  >{{ displayname }}</span\n                >\n              </p>\n\n              <p class=\"card-description\" *ngIf=\"!roadID\">\n                Coordinates :--No Link Selected--\n                <br />\n                Address : --No Link Selected--\n              </p>\n\n              <h4 class=\"card-title\">Road / Link ID:</h4>\n              <p class=\"card-description road-id\">\n                <span *ngIf=\"roadID\">{{ roadID }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Street Name:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"streetName\">{{ streetName }}</span>\n                <span *ngIf=\"!streetName\">Name Not Found</span><br />\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Municipality:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ munic }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">VCI:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ VCI }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Start Length:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ start_len }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Start KMs:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ start_km }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">End KMs:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ end_km }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Road Length:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ road_len }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Route Seq:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ route_seq }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <p *ngIf=\"roadID\" class=\"card-title\">\n                <label for=\"choose\" class=\"text-color\"\n                  >Choose what you want to do</label\n                >\n                <ion-select\n                  class=\"form-control\"\n                  value=\"select\"\n                  (ionChange)=\"getViewType($event)\"\n                  okText=\"Okay\"\n                  cancelText=\"Dismiss\"\n                  id=\"choose\"\n                >\n                  <ion-select-option value=\"viewmedia\"\n                    >Go to Assessment</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"uploadmedia\"\n                    >Upload Inspection</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"recondevice\"\n                    >Record (Device Cam)</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"rec3d\"\n                    >Record (3D Cam)</ion-select-option\n                  >\n                </ion-select>\n              </p>\n\n              <div *ngIf=\"viewType == 'uploadmedia'\" class=\"form-group\">\n                <label for=\"uploadmedia\" class=\"text-color\"\n                  >Upload Link Videos/Images</label\n                >\n\n                <ion-select\n                  class=\"form-control\"\n                  value=\"select\"\n                  (ionChange)=\"getMediaType($event)\"\n                  okText=\"Okay\"\n                  cancelText=\"Dismiss\"\n                  id=\"uploadmedia\"\n                >\n                  <ion-select-option value=\"vid3d\">Video(3D)</ion-select-option>\n                  <ion-select-option value=\"vid\"\n                    >Video(Normal)</ion-select-option\n                  >\n                  <ion-select-option value=\"img\">Image</ion-select-option>\n                </ion-select>\n\n                <input\n                  *ngIf=\"uploadmedia !== '' && !isbusy\"\n                  (change)=\"select_file($event)\"\n                  [accept]=\"opentype\"\n                  type=\"file\"\n                  class=\"form-control\"\n                  id=\"uploadvideo\"\n                  placeholder=\"photo\"\n                />\n                <div class=\"hide\" *ngIf=\"uploadPercent | async as percent\">\n                  Uploading: {{ getValue(percent) }}%\n                  <ion-progress-bar [value]=\"percent\"></ion-progress-bar>\n                </div>\n\n                <ion-button *ngIf=\"isbusy\" color=\"light\" expand=\"block\">{{\n                  showpercent\n                }}</ion-button>\n              </div>\n\n              <div *ngIf=\"viewType == 'viewmedia'\">\n                <ion-slides pager=\"true\" [options]=\"slideOpts\">\n                  <ion-slide *ngFor=\"let item of SegmentMediaArray\">\n                    <ion-title class=\"slide-title\">{{\n                      item.media_name\n                    }}</ion-title>\n                    <!-- Add a title for the slide -->\n                    <div\n                      class=\"slide-content\"\n                      (click)=\"\n                        open_inspection(\n                          item.road_id,\n                          item.id,\n                          item.media_type,\n                          item.media_url\n                        )\n                      \"\n                    >\n                      <img\n                        *ngIf=\"item.media_type == 'vid'\"\n                        src=\"assets/images/vid.jpg\"\n                        width=\"100%\"\n                      />\n                      <img\n                        *ngIf=\"item.media_type == 'vid3d'\"\n                        src=\"assets/images/vid3d.jpg\"\n                        width=\"100%\"\n                      />\n                      <img\n                        *ngIf=\"item.media_type == 'img'\"\n                        src=\"assets/images/img.jpg\"\n                        width=\"100%\"\n                      />\n                    </div>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n              <div class=\"col-md-12\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-button\n                        *ngIf=\"!isbusy\"\n                        expand=\"block\"\n                        (click)=\"gotoMap(true)\"\n                        >Go Back</ion-button\n                      >\n                    </ion-col>\n                    <ion-col *ngIf=\"offlinemode == false\">\n                      <ion-button\n                        color=\"warning\"\n                        *ngIf=\"!isbusy\"\n                        expand=\"block\"\n                        (click)=\"gotoDownload()\"\n                        >Download Offline Media</ion-button\n                      >\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- main-panel ends -->\n  </div>\n\n  <!-- page-body-wrapper ends -->\n</ion-content>\n");

/***/ }),

/***/ "PpJ6":
/*!***************************************************!*\
  !*** ./src/app/pages/segments/segments.module.ts ***!
  \***************************************************/
/*! exports provided: SegmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsModule", function() { return SegmentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _segments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segments.component */ "Qef9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const routes = [{ path: "", component: _segments_component__WEBPACK_IMPORTED_MODULE_4__["SegmentsComponent"] }];
let SegmentsModule = class SegmentsModule {
};
SegmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_segments_component__WEBPACK_IMPORTED_MODULE_4__["SegmentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], SegmentsModule);



/***/ }),

/***/ "Qef9":
/*!******************************************************!*\
  !*** ./src/app/pages/segments/segments.component.ts ***!
  \******************************************************/
/*! exports provided: SegmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsComponent", function() { return SegmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_segments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./segments.component.html */ "3nsm");
/* harmony import */ var _segments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segments.component.scss */ "lGBJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/db */ "6BIP");
/* harmony import */ var _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/inspection/inspection.component */ "gQoZ");
/* harmony import */ var _pages_segment_recorder_segment_recorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/segment-recorder/segment-recorder.component */ "/Ywr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/geolocation.service */ "J4PG");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/global.service */ "WMgp");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/storage */ "WI49");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");









//import { AngularFireStorage } from "@angular/fire/storage";









let SegmentsComponent = class SegmentsComponent {
    constructor(modalController, db, db_m, route, http, sanitizer, alertCtrl, global, 
    //private storage: FirebaseStorage,
    Offline, storage, location_services, loadingCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.db_m = db_m;
        this.route = route;
        this.http = http;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.Offline = Offline;
        this.storage = storage;
        this.location_services = location_services;
        this.loadingCtrl = loadingCtrl;
        this.Markers = [];
        this.SegmantData = [];
        this.uploadmedia = "";
        this.viewType = "";
        this.showMap = true;
        this.offlinemode = false;
        this.downloading = false;
        this.offlinemedia = [];
        this.totalIncr = 0;
        this.percDownload = 0;
        this.host = "localhost";
        //media_url: any;
        this.opentype = "";
        this.show_info = false;
        this.show_list = false;
        this.SegmentMediaOnline = false;
        this.current_roadid = "";
        this.opencnt = 0;
        // Create a reference to the class instance
        this.self = this;
        this.progessStage = "";
        this.searchQuery = "";
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4,
        };
        this.media_url = "";
        this.isbusy = false;
        this.checkInternetAvailability();
        setInterval(() => {
            this.checkInternetAvailability();
        }, 2000);
    }
    ngOnInit() {
        this.attachMessageListener();
        console.log("Loading Segment Details");
        //this.load_map();
        this.loadDetails();
        setTimeout(() => {
            if (this.isInternetAvailable == false) {
                //Offline
                //console.log("--No Internet--");
                this.global.showSync = false;
                this.Offline.get("DATA").then((_data) => {
                    this._segments = _data;
                    this.show_list = false;
                    this.offlinemode = true;
                });
            }
            else {
                //Online
                this.global.showSync = true;
                this.Offline.set("DATA", this._segments);
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
    handleMessageEvent(event) {
        // Ensure the message is coming from a trusted source
        // You can check event.origin and validate it against your expected iframe origin
        // Handle the received message
        const message = event.data;
        if (message.type === "clickEvent") {
            setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const roadID = message.data.roadid;
                // Perform actions based on the received click data
                console.log("Click event received from Map:", roadID);
                //this.mapClickedSegment(roadID);
                const foundObject = yield this._segments.find((obj) => obj.road_id === roadID);
                //console.log("SEG:", foundObject.geometry[0]);
                let coords = foundObject.geometry;
                let fin_coords = [];
                for (let i = 0; i < coords.length; i++) {
                    let _res = [];
                    let res = "lng:" + coords[i];
                    res = res.replace(",", ",lat:");
                    fin_coords.push(res);
                }
                const outputArray = fin_coords.map((item) => {
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
                yield this.loadSegmentMedia(this.roadID);
                yield this.getMediaForOffline(this.roadID);
            }), 1000);
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
            this.mapSrc = this.sanitizer.bypassSecurityTrustResourceUrl("http://" + this.host + ":3000/map");
            //this.load_map();
            //}
        });
        this.db.getAll();
    }
    downloadFileFromStorage(downloadURL, fileName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Fetch the file and create a blob
                const response = yield fetch(downloadURL);
                const blob = yield response.blob();
                // Save the blob as a file using the FileSaver library
                Object(file_saver__WEBPACK_IMPORTED_MODULE_14__["saveAs"])(blob, fileName);
                console.log("Downloaded: ", fileName);
            }
            catch (error) {
                console.error("Error downloading file:", error);
            }
        });
    }
    gotoDownload_script(_url, _fileName, total_length) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const apiUrl = "http://localhost:3000/run-script";
            // Replace with your server's URL
            const requestData = { url: _url, fname: _fileName, road_id: this.roadID };
            // Customize the data you want to send to the server
            this.http.post(apiUrl, requestData).subscribe((res) => {
                if (res) {
                    this.totalIncr += 1;
                    //Store local file paths to ARRAY
                    this.offlinemedia.push("./assets/media/" + this.roadID + "/" + _fileName);
                    if (this.totalIncr >= total_length) {
                        this.downloading = false;
                        //Store file path ARRAY to offline storage
                        this.Offline.set(this.roadID, this.offlinemedia);
                        //console.log("Media:", this.offlinemedia);
                    }
                    else {
                        this.downloading = true;
                    }
                }
                this.percDownload = Number(((this.totalIncr / total_length) * 100).toFixed(1));
                // Handle any further actions or responses from the server
            }, (error) => {
                console.error("Error executing Download script:", error);
                // Handle the error condition if necessary
            });
            return 0;
        });
    }
    gotoDownload() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.downloading = true;
            this.totalIncr = 0;
            let len = this.SegmentMediaArray.length;
            let cnt = 0;
            this.offlinemedia = [];
            while (cnt < len) {
                let type_ = "";
                if (this.SegmentMediaArray[cnt].media_url.includes(".png")) {
                    type_ = ".png";
                }
                else if (this.SegmentMediaArray[cnt].media_url.includes(".jpeg")) {
                    type_ = ".jpeg";
                }
                else if (this.SegmentMediaArray[cnt].media_url.includes(".jpg")) {
                    type_ = ".jpg";
                }
                else if (this.SegmentMediaArray[cnt].media_url.includes(".mp4")) {
                    type_ = ".mp4";
                }
                yield this.gotoDownload_script(this.SegmentMediaArray[cnt].media_url, this.SegmentMediaArray[cnt].media_name + type_, len);
                cnt += 1;
            }
        });
    }
    getMediaForOffline(roadID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                                let _fname = String(_tmpMediaDownloaded[cnt].replace(_replace, ""));
                                _fname = _fname.substring(0, _fname.length - 4);
                                //Find matching record by media_name
                                const foundObject = this.SegmentMediaArray.find((obj) => obj.media_name === _fname);
                                if (foundObject) {
                                    //If found, then replace cloud url with local
                                    foundObject.media_url = _tmpMediaDownloaded[cnt];
                                }
                                cnt += 1;
                            }
                        });
                    });
                }
                else {
                    //Online
                    this.Offline.set("M-" + roadID, this.SegmentMediaArray);
                    this.offlinemode = false;
                    //console.log("MEDIA:", this.SegmentMediaArray);
                    //Assume Offline
                }
            }, 5000);
        });
    }
    loadSegmentData(road_id, mid, mtype, murl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.db.getSegment(road_id)).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.opencnt < 1) {
                    if (data.length > 0) {
                        //We are online
                        const modal = yield this.modalController.create({
                            component: _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__["InspectionComponent"],
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
                        yield modal.present();
                    }
                    else {
                        //Offline /
                        //Find matching record by road_id
                        const foundObject = this._segments.find((obj) => obj.road_id === road_id);
                        if (foundObject) {
                            const modal = yield this.modalController.create({
                                component: _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__["InspectionComponent"],
                                cssClass: "modal-full",
                                componentProps: {
                                    title: "Open Inspection",
                                    segrec_id: this.segrec_id,
                                    roadid: foundObject.road_id,
                                    mid: murl,
                                    murl: "",
                                    offline: true,
                                    mtype: mtype,
                                    segment: foundObject,
                                },
                            });
                            yield modal.present();
                        }
                    }
                    this.opencnt += 1;
                }
            }));
        });
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
    getViewType(event) {
        this.viewType = event.detail.value;
        if (this.viewType == "recondevice") {
            this.open_segmentrecorder(this.roadID, "recondevice");
        }
        if (this.viewType == "rec3d") {
            this.open_segmentrecorder(this.roadID, "rec3d");
        }
    }
    getMediaType(event) {
        this.uploadmedia = event.detail.value;
        if (this.uploadmedia == "vid3d" || this.uploadmedia == "vid") {
            this.opentype = "video/*";
        }
        else {
            this.opentype = "image/*";
        }
        console.log(this.opentype);
    }
    open_segmentrecorder(roadid, rectype) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_segment_recorder_segment_recorder_component__WEBPACK_IMPORTED_MODULE_6__["SegmentRecorderComponent"],
                cssClass: "modal-full",
                componentProps: {
                    title: "Open Recorder",
                    roadid: roadid,
                    rectype: rectype,
                },
            });
            yield modal.present();
        });
    }
    open_inspection(roadid, mid, mtype, murl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.opencnt = 0;
            yield this.loadSegmentData(roadid, mid, mtype, murl);
        });
    }
    /**
     * load_map
     */
    load_map() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    setSegment(coords) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    myFunction(name) { }
    resetSegment(coords) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    addSegments(map) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    getAddress() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.showpercent = "Processing...";
                this.downloadURL = yield this.storage
                    .ref(filepath)
                    .getDownloadURL()
                    .forEach((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(res);
                    let media_name = String(file.name);
                    media_name = media_name.slice(0, media_name.indexOf("."));
                    yield this.addSegmentMediaNow(this.roadID, media_name, this.uploadmedia, res);
                    this.isbusy = false;
                }));
            })))
                .subscribe();
        }
        catch (error) {
            // handle the exception
            console.error(error);
            this.isbusy = false;
        }
        finally {
        }
    }
    get filteredItems() {
        return this._segments.filter((item) => typeof item.road_id === "string" &&
            item.road_id.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    itemClicked(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            yield this.loadSegmentMedia(this.roadID);
            yield this.getMediaForOffline(this.roadID);
        });
    }
    gotoMap(res) {
        if (res) {
            this.loadDetails();
        }
        this.showMap = res;
        setTimeout(() => {
            if (this.isInternetAvailable == false) {
                //Offline
                //console.log("--No Internet--");
                this.Offline.get("DATA").then((_data) => {
                    this._segments = _data;
                    //this.show_list = true;
                    this.offlinemode = true;
                });
            }
            else {
                //Online
                this.Offline.set("DATA", this._segments);
                this.offlinemode = false;
                //console.log(this._segments[0]);
            }
        }, 5000);
    }
    addSegmentMediaNow(roadid, medianame, mediatype, mediaurl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const dt = `${year}${month}${day}${hours}${minutes}${seconds}`;
            let segmentMedia = {
                user_id: localStorage.getItem("uuid"),
                road_id: roadid,
                media_name: medianame,
                media_type: mediatype,
                media_url: mediaurl,
                addedondatetime: dt,
                enabled: true,
                approved: true,
            };
            yield this.db_m.create(segmentMedia);
        });
    }
    checkInternetAvailability() {
        this.http.get("https://chappie-demo.novosense.africa:5000").subscribe(() => {
            this.isInternetAvailable = true;
            console.log("--Online--");
        }, () => {
            this.isInternetAvailable = false;
            console.log("--No Internet--");
        });
    }
};
SegmentsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_4__["Segments"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_4__["SegmentMedia"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalSettings"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] },
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
SegmentsComponent.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["fileInput",] }],
    handleMessageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:message", ["$event"],] }]
};
SegmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-segments",
        template: _raw_loader_segments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_segments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SegmentsComponent);



/***/ }),

/***/ "lGBJ":
/*!********************************************************!*\
  !*** ./src/app/pages/segments/segments.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.road-id {\n  font-weight: bold;\n  color: yellow;\n}\n\n.hide {\n  display: none;\n}\n\n.slide-title {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 12px;\n  z-index: 1;\n  text-transform: uppercase;\n}\n\nimg {\n  border-left: 1px solid #ccc;\n}\n\n.info {\n  color: #fff !important;\n  font-size: 12px;\n}\n\n.space {\n  margin-top: 10px;\n}\n\n.download {\n  color: #ebb609;\n  width: 100%;\n  font-weight: lighter;\n  font-size: 28px;\n  text-align: center;\n  margin-top: 20%;\n}\n\n.iframe-container iframe {\n  width: 100% !important;\n  height: 100%;\n  border: none;\n}\n\n.iframe-container {\n  height: 95vh;\n  width: 100% !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-iframe {\n  flex-grow: 1;\n  height: 100%;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VnbWVudHMvc2VnbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlZ21lbnRzL3NlZ21lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucm9hZC1pZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogeWVsbG93O1xufVxuLy8gLnByb2dyZXNzIHtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vIH1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zbGlkZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW1nIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xufVxuLmluZm8ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRvd25sb2FkIHtcbiAgY29sb3I6IHJnYigyMzUsIDE4MiwgOSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5pZnJhbWUtY29udGFpbmVyIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmlmcmFtZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNmMDA7XG59XG5cbi5tYWluLWlmcmFtZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNmMDA7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-segments-segments-module-es2015.js.map