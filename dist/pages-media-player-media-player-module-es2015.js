(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-media-player-media-player-module"],{

/***/ "4dM+":
/*!****************************************************************!*\
  !*** ./src/app/pages/media-player/media-player.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "79WE":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/media-player/media-player.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n    <h3 class=\"page-title\">\n\n    </h3>\n    <nav aria-label=\"breadcrumb\">\n        <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">\n                <span></span>Billboard Media Player\n                <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n<!-- filters -->\n<div class=\"row grid-margin\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form class=\"form-sample\">\n                    <p class=\"card-description\">\n                        Select Physical Billboard\n                    </p>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group row\">\n                                <div class=\"col-sm-12\">\n                           \n                                    <ion-select (ionChange)=\"startPlayer($event.target.value)\" class=\"form-control\" value=\"select\" okText=\"Okay\" cancelText=\"Dismiss\">\n                                        <ion-select-option *ngFor=\"let item of Billboard\" value=\"{{item.content_url}}\">{{item.name}}</ion-select-option>\n                                      </ion-select>\n                                </div>\n                            </div>\n                        </div>\n\n            \n                    </div>\n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- map -->\n    <div class=\"col-md-12 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div *ngIf=\"content_url\">\n   \n                    <vg-player>\n                        <video [vgMedia]=\"$any(media)\" #media id=\"singleVideo\" preload=\"auto\" autoplay controls width=\"100%\">\n                            <source [src]=content_url type=\"video/mp4\">\n                        </video>\n                    </vg-player>\n                    \n                </div>\n               \n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "dws7":
/*!***********************************************************!*\
  !*** ./src/app/pages/media-player/media-player.module.ts ***!
  \***********************************************************/
/*! exports provided: MediaPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerModule", function() { return MediaPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _media_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-player.component */ "ltiv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _media_player_component__WEBPACK_IMPORTED_MODULE_3__["MediaPlayerComponent"] }
];
let MediaPlayerModule = class MediaPlayerModule {
};
MediaPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_media_player_component__WEBPACK_IMPORTED_MODULE_3__["MediaPlayerComponent"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]
    })
], MediaPlayerModule);



/***/ }),

/***/ "ltiv":
/*!**************************************************************!*\
  !*** ./src/app/pages/media-player/media-player.component.ts ***!
  \**************************************************************/
/*! exports provided: MediaPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerComponent", function() { return MediaPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_media_player_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./media-player.component.html */ "79WE");
/* harmony import */ var _media_player_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-player.component.scss */ "4dM+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/db */ "6BIP");





let MediaPlayerComponent = class MediaPlayerComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        this.db.Billboards.subscribe(val => {
            this.Billboard = val;
            //console.log('Billboards', this.Billboard);
        });
    }
    startPlayer(url) {
        //console.log(url);
        this.content_url = url;
    }
};
MediaPlayerComponent.ctorParameters = () => [
    { type: _services_db__WEBPACK_IMPORTED_MODULE_4__["Billboards"] }
];
MediaPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-media-player',
        template: _raw_loader_media_player_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_media_player_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MediaPlayerComponent);



/***/ })

}]);
//# sourceMappingURL=pages-media-player-media-player-module-es2015.js.map