(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ri-reports-ri-reports-module"],{

/***/ "8qf/":
/*!*******************************************************!*\
  !*** ./src/app/pages/ri-reports/ri-reports.module.ts ***!
  \*******************************************************/
/*! exports provided: RiReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiReportsModule", function() { return RiReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ri_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ri-reports.component */ "CFWV");





const routes = [{ path: "", component: _ri_reports_component__WEBPACK_IMPORTED_MODULE_4__["RiReportsComponent"] }];
let RiReportsModule = class RiReportsModule {
};
RiReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ri_reports_component__WEBPACK_IMPORTED_MODULE_4__["RiReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], RiReportsModule);



/***/ }),

/***/ "CFWV":
/*!**********************************************************!*\
  !*** ./src/app/pages/ri-reports/ri-reports.component.ts ***!
  \**********************************************************/
/*! exports provided: RiReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiReportsComponent", function() { return RiReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ri_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ri-reports.component.html */ "MUKn");
/* harmony import */ var _ri_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ri-reports.component.scss */ "duqi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/db */ "6BIP");
/* harmony import */ var _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/inspection/inspection.component */ "gQoZ");
/* harmony import */ var _pages_segment_recorder_segment_recorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/segment-recorder/segment-recorder.component */ "/Ywr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/geolocation.service */ "J4PG");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/global.service */ "WMgp");









//import { AngularFireStorage } from "@angular/fire/storage";



let RiReportsComponent = class RiReportsComponent {
    constructor(modalController, db, db_m, alertCtrl, global, 
    //private storage: FirebaseStorage,
    storage, location_services, loadingCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.db_m = db_m;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.storage = storage;
        this.location_services = location_services;
        this.loadingCtrl = loadingCtrl;
        this.search_array = [];
        this.Markers = [];
        this.SegmantData = [];
        this.uploadmedia = "";
        this.viewType = "";
        this.showMap = true;
        //media_url: any;
        this.opentype = "";
        this.show_info = false;
        this.current_roadid = "";
        this.opencnt = 0;
        // Create a reference to the class instance
        this.self = this;
        this.progessStage = "";
        this.show_cond = false;
        this.show_cond_done = false;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4,
        };
        this.media_url = "";
        this.isbusy = false;
    }
    ngOnInit() {
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
        }
        else {
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
        }
        else {
            this.search_array[2] = false;
        }
        if (input.includes("poor")) {
            this.search_array[3] = true;
        }
        else {
            this.search_array[3] = false;
        }
        if (input.includes("fair")) {
            this.search_array[4] = true;
        }
        else {
            this.search_array[4] = false;
        }
        if (input.includes("good")) {
            this.search_array[5] = true;
        }
        else {
            this.search_array[5] = false;
        }
        if (input.includes("vgood")) {
            this.search_array[6] = true;
        }
        else {
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
            }
            else {
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
    loadSegmentData(road_id, mid, mtype, murl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            (yield this.db.getSegment(road_id)).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.opencnt < 1) {
                    const modal = yield this.modalController.create({
                        component: _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__["InspectionComponent"],
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
                    yield modal.present();
                    this.opencnt += 1;
                }
            }));
        });
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
    load_map(clear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.latitude = Number("-26.651596892582404");
            this.longitude = Number("28.618020684007547");
            this.map = new google.maps.Map(document.getElementById("map_canvas_segments"), {
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
            });
            const loading = yield this.loadingCtrl.create({
                message: "Loading Segments ...",
            });
            loading.present();
            yield this.addSegments(this.map, clear);
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
            polygon.setMap(this.map);
        });
    }
    myFunction(name) { }
    resetSegment(coords) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    addSegments(map, clear) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let i = 0; i < this.Segments.length; i++) {
                if (
                //Display only selected surface type(s)
                this.search_array[0].indexOf(this.Segments[i]["surfacetype"]) !== -1) {
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
                            if (vci_array.includes(this.Segments[i]["VCI"]) ||
                                vci_array.length == 0) {
                                let coords = this.Segments[i]["geometry"];
                                let vci = Number(this.Segments[i]["VCI"]);
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
                                polygon.addListener("mouseover", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    polygon.setOptions({ strokeColor: "pink" });
                                    this.current_roadid = this.Segments[i]["road_id"];
                                    this.show_info = true;
                                    this.latitude = outputArray[0]["lat"];
                                    this.longitude = outputArray[0]["lng"];
                                    this.getAddress();
                                }));
                                // Add a mouseout listener to reset the stroke color to the original color
                                polygon.addListener("mouseout", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    polygon.setOptions({ strokeColor: originalStrokeColor });
                                    this.show_info = false;
                                }));
                                polygon.addListener("click", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                                    yield this.loadSegmentMedia(this.roadID);
                                    //this.setSegment(outputArray);
                                    ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
                                    //clearTimeout(timerId);
                                    //console.log(outputArray[0]["lat"]);
                                }));
                            }
                        }
                    }
                    else if (this.search_array[1] == "notassessed") {
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
                            if (vci_array.includes(this.Segments[i]["VCI"]) ||
                                vci_array.length == 0) {
                                let coords = this.Segments[i]["geometry"];
                                let vci = Number(this.Segments[i]["VCI"]);
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
                                polygon.addListener("mouseover", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    polygon.setOptions({ strokeColor: "pink" });
                                    this.current_roadid = this.Segments[i]["road_id"];
                                    this.show_info = true;
                                    this.latitude = outputArray[0]["lat"];
                                    this.longitude = outputArray[0]["lng"];
                                    this.getAddress();
                                }));
                                // Add a mouseout listener to reset the stroke color to the original color
                                polygon.addListener("mouseout", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    polygon.setOptions({ strokeColor: originalStrokeColor });
                                    this.show_info = false;
                                }));
                                polygon.addListener("click", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                                    yield this.loadSegmentMedia(this.roadID);
                                    //this.setSegment(outputArray);
                                    ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
                                    //clearTimeout(timerId);
                                    //console.log(outputArray[0]["lat"]);
                                }));
                            }
                        }
                    }
                    else {
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
                        if (vci_array.includes(this.Segments[i]["VCI"]) ||
                            vci_array.length == 0) {
                            let coords = this.Segments[i]["geometry"];
                            let vci = Number(this.Segments[i]["VCI"]);
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
                            polygon.addListener("mouseover", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                polygon.setOptions({ strokeColor: "pink" });
                                this.current_roadid = this.Segments[i]["road_id"];
                                this.show_info = true;
                                this.latitude = outputArray[0]["lat"];
                                this.longitude = outputArray[0]["lng"];
                                this.getAddress();
                            }));
                            // Add a mouseout listener to reset the stroke color to the original color
                            polygon.addListener("mouseout", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                polygon.setOptions({ strokeColor: originalStrokeColor });
                                this.show_info = false;
                            }));
                            polygon.addListener("click", () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                                yield this.loadSegmentMedia(this.roadID);
                                //this.setSegment(outputArray);
                                ///this.timerId = setTimeout(() => this.resetSegment(outputArray), 3000);
                                //clearTimeout(timerId);
                                //console.log(outputArray[0]["lat"]);
                            }));
                        }
                    }
                }
            }
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
    gotoMap(res) {
        if (res) {
            //this.loadDetails();
        }
        this.showMap = res;
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
};
RiReportsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_4__["Segments"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_4__["SegmentMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalSettings"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] },
    { type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
RiReportsComponent.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["fileInput",] }]
};
RiReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-ri-reports",
        template: _raw_loader_ri_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ri_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RiReportsComponent);



/***/ }),

/***/ "MUKn":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ri-reports/ri-reports.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #cont>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"page-header\">\n        <div *ngIf=\"show_cond_done\" class=\"col-md-6\">\n          <h3 class=\"page-title\">Segments Found [{{ Segments.length }}]</h3>\n        </div>\n        <div *ngIf=\"show_info\" class=\"col-md-6 info\">\n          Segment ID:&nbsp;&nbsp;{{ current_roadid }}\n          <div>Address:&nbsp;&nbsp;{{ displayname }}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"SURFACE_TYPE\">SURFACE TYPE </label>\n        <ion-select\n          (ionChange)=\"change_st($event)\"\n          multiple=\"true\"\n          class=\"form-control\"\n          value=\"select\"\n          okText=\"Okay\"\n          cancelText=\"Dismiss\"\n          id=\"SURFACE_TYPE\"\n        >\n          <ion-select-option value=\"block\">BLOCK</ion-select-option>\n          <ion-select-option value=\"flexible\">FLEXIBLE</ion-select-option>\n          <ion-select-option value=\"gravel\">GRAVEL</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div *ngIf=\"show_cond\" class=\"form-group\">\n        <label for=\"SURFACE_STATUS\">SURFACE CONDITION/STATUS </label>\n        <ion-select\n          (ionChange)=\"change_sc($event)\"\n          class=\"form-control\"\n          multiple=\"true\"\n          value=\"select\"\n          okText=\"Okay\"\n          cancelText=\"Dismiss\"\n          id=\"SURFACE_STATUS\"\n        >\n          <ion-select-option value=\"notassessed\"\n            >NOT ASSESSED</ion-select-option\n          >\n          <ion-select-option value=\"assessed\">ASSESSED</ion-select-option>\n          <ion-select-option value=\"vpoor\">VERY POOR</ion-select-option>\n          <ion-select-option value=\"poor\">POOR</ion-select-option>\n          <ion-select-option value=\"fair\">FAIR</ion-select-option>\n          <ion-select-option value=\"good\">GOOD</ion-select-option>\n          <ion-select-option value=\"vgood\">VERY GOOD</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div class=\"row\">\n        <!--MAP-->\n        <div class=\"col-md-12 grid-margin\">\n          <div class=\"card\" id=\"map_canvas_segments\" style=\"height: 85vh\"></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</ion-content>\n");

/***/ }),

/***/ "duqi":
/*!************************************************************!*\
  !*** ./src/app/pages/ri-reports/ri-reports.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.road-id {\n  font-weight: bold;\n  color: yellow;\n}\n\n.hide {\n  display: none;\n}\n\n.slide-title {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 12px;\n  z-index: 1;\n  text-transform: uppercase;\n}\n\nimg {\n  border-left: 1px solid #ccc;\n}\n\n.info {\n  color: #fff !important;\n  font-size: 12px;\n}\n\nlabel {\n  color: beige;\n}\n\n.title {\n  margin-bottom: 10px;\n  color: yellow;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.test {\n  color: #ff00aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmktcmVwb3J0cy9yaS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFHRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JpLXJlcG9ydHMvcmktcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnJvYWQtaWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHllbGxvdztcbn1cbi8vIC5wcm9ncmVzcyB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2xpZGUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgei1pbmRleDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmltZyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbmZvIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxubGFiZWwge1xuICBjb2xvcjogYmVpZ2U7XG59XG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogeWVsbG93O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRlc3Qge1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMTcwKTtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-ri-reports-ri-reports-module-es2015.js.map