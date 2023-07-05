(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ri-upload-media-ri-upload-media-module"],{

/***/ "6XrB":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ri-upload-media/ri-upload-media.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <h3 class=\"page-title\"></h3>\n  <nav aria-label=\"breadcrumb\">\n    <ul class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">\n        <span></span>Upload Images and 3D Videos\n        <i\n          class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"\n        ></i>\n      </li>\n    </ul>\n  </nav>\n</div>\n\n<div\n  class=\"container-fluid page-body-wrapper\"\n  style=\"min-height: 100%; padding-top: 0%\"\n>\n  <div class=\"main-panel-only w-100\">\n    <div class=\"content-wrapper h-100\">\n      <div contentAnimate class=\"h-100\">\n        <div class=\"row\">\n          <div class=\"col-md-12 grid-margin stretch-card\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Title</h4>\n\n                <form class=\"forms-sample\" [formGroup]=\"contentForm\">\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputUsername1\">Content Name</label>\n                    <input\n                      formControlName=\"name\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"exampleInputUsername1\"\n                      placeholder=\"Name\"\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"ctype\">Content Type ( Image or Video )</label>\n\n                    <ion-select\n                      class=\"form-control\"\n                      [(ngModel)]=\"ctype\"\n                      formControlName=\"ctype\"\n                      value=\"select\"\n                      okText=\"Okay\"\n                      cancelText=\"Dismiss\"\n                      id=\"ctype\"\n                    >\n                      <ion-select-option value=\"img\">Image</ion-select-option>\n                      <ion-select-option value=\"vid\">Video</ion-select-option>\n                    </ion-select>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputPassword1\"\n                      >Actual Content to Upload</label\n                    >\n                    <input\n                      (change)=\"select_file($event)\"\n                      accept=\"image/png, image/gif, image/jpeg, video/mp4\"\n                      type=\"file\"\n                      class=\"form-control\"\n                      id=\"exampleInputPassword1\"\n                      placeholder=\"photo\"\n                    />\n                  </div>\n\n                  <button\n                    *ngIf=\"!data\"\n                    type=\"submit\"\n                    class=\"btn btn-gradient-info mr-2\"\n                    (click)=\"submit()\"\n                  >\n                    Submit\n                  </button>\n                  <button\n                    *ngIf=\"data\"\n                    type=\"submit\"\n                    class=\"btn btn-gradient-info mr-2\"\n                    (click)=\"update()\"\n                  >\n                    Update\n                  </button>\n\n                  <button class=\"btn btn-light\" (click)=\"dismiss()\">\n                    Cancel\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- partial -->\n  </div>\n  <!-- main-panel ends -->\n</div>\n<!-- page-body-wrapper ends -->\n\n<!-- filters -->\n<div class=\"row grid-margin\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form class=\"form-sample\">\n          <p class=\"card-description\">Narrow down your search by filters</p>\n\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <select class=\"form-control\">\n                    <option>Province</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <select class=\"form-control\">\n                    <option>City</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <select class=\"form-control\">\n                    <option>Orientation</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-3\">\n              <div class=\"form-group row\">\n                <div class=\"col-sm-12\">\n                  <select class=\"form-control\">\n                    <option>Impressions</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QOY6":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ri-upload-media/ri-upload-media.module.ts ***!
  \*****************************************************************/
/*! exports provided: RiUploadMediaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUploadMediaModule", function() { return RiUploadMediaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ri_upload_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ri-upload-media.component */ "n01j");





const routes = [{ path: "", component: _ri_upload_media_component__WEBPACK_IMPORTED_MODULE_4__["RiUploadMediaComponent"] }];
let RiUploadMediaModule = class RiUploadMediaModule {
};
RiUploadMediaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ri_upload_media_component__WEBPACK_IMPORTED_MODULE_4__["RiUploadMediaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], RiUploadMediaModule);



/***/ }),

/***/ "WUjx":
/*!**********************************************************************!*\
  !*** ./src/app/pages/ri-upload-media/ri-upload-media.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JpLXVwbG9hZC1tZWRpYS9yaS11cGxvYWQtbWVkaWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "n01j":
/*!********************************************************************!*\
  !*** ./src/app/pages/ri-upload-media/ri-upload-media.component.ts ***!
  \********************************************************************/
/*! exports provided: RiUploadMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiUploadMediaComponent", function() { return RiUploadMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ri_upload_media_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ri-upload-media.component.html */ "6XrB");
/* harmony import */ var _ri_upload_media_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ri-upload-media.component.scss */ "WUjx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RiUploadMediaComponent = class RiUploadMediaComponent {
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
    constructor() { }
    ngOnInit() {
        //this.load_map();
        // this.db.Billboards.subscribe((val) => {
        //   this.Billboard = val;
        //   console.log("Billboards", this.Billboard);
        //   this.plot_markers();
        // });
    }
};
RiUploadMediaComponent.ctorParameters = () => [];
RiUploadMediaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-ri-upload-media",
        template: _raw_loader_ri_upload_media_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ri_upload_media_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RiUploadMediaComponent);



/***/ })

}]);
//# sourceMappingURL=pages-ri-upload-media-ri-upload-media-module-es2015.js.map