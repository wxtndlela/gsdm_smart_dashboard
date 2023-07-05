(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-man-content-man-module"],{

/***/ "AtBN":
/*!**************************************************************!*\
  !*** ./src/app/pages/content-man/content-man.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label, ion-item, ion-list {\n  --ion-item-background: #292f37 !important;\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.green {\n  color: green;\n  font-weight: bold;\n}\n\n.red {\n  color: red;\n  font-weight: bold;\n}\n\n.title {\n  cursor: pointer;\n}\n\n.title:active {\n  color: greenyellow;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1tYW4vY29udGVudC1tYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtbWFuL2NvbnRlbnQtbWFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbGFiZWwsIGlvbi1pdGVtLCBpb24tbGlzdHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMyOTJmMzcgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ncmVlbntcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmVke1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGl0bGU6YWN0aXZle1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "V5q9":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-man/content-man.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\n<!-- <div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Content [{{Billboard.length}}]\n    </h3>\n</div> -->\n\n<!-- cards -->\n<div class=\"row\">\n    <!-- <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-file-document\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add landlord\n                </h6>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_content()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-camera-iris\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add Content\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <ion-list>\n                            <ion-item *ngFor=\"let item of Cont\">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col (click)=\"view_content(item.content_type, item.content_url)\" class=\"title\" size=\"3\">\n                                            {{item.name}}\n                                        </ion-col>\n                                        <ion-col size=\"3\">\n                                            <span *ngIf=\"item.content_type=='img'\">Image is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"item.content_type=='vid'\">Video is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                        </ion-col>\n           \n                                        <ion-col size=\"2\">\n                                            <span class=\"green\" *ngIf=\"item.approved\">Approved</span>\n                                            <span class=\"red\" *ngIf=\"!item.approved\">Not Approved</span>\n                                        </ion-col>\n                                        <ion-col size=\"4\">\n                                            <ion-button (click)=\"presentConfirm(item)\" color=\"danger\" fill=\"solid\">Remove</ion-button>\n                                        </ion-col>\n                         \n                                    </ion-row>\n                                </ion-grid>\n     \n                            </ion-item>\n                        </ion-list>\n      \n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n\n\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div>\n                    <vg-player (onPlayerReady)=\"onPlayerReady($event)\" *ngIf=\"ctype=='vid'\">\n                        <video #media id=\"singleVideo\" preload=\"auto\" autoplay controls width=\"100%\">\n                            <source [src]=content_url type=\"video/mp4\">\n                        </video>\n                    </vg-player>\n                    <img *ngIf=\"ctype=='img'\" class=\"image\" [src]=\"content_url\" width=\"100%\"/>\n                </div>\n         \n                </div>\n            </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "eEsy":
/*!************************************************************!*\
  !*** ./src/app/pages/content-man/content-man.component.ts ***!
  \************************************************************/
/*! exports provided: ContentManComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManComponent", function() { return ContentManComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_content_man_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./content-man.component.html */ "V5q9");
/* harmony import */ var _content_man_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-man.component.scss */ "AtBN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_add_content_add_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/add-content/add-content.component */ "Q0he");
/* harmony import */ var _services_db_db_addcontent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/db/db.addcontent */ "7j0M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ContentManComponent = class ContentManComponent {
    constructor(modalController, db, alertCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.ctype = '';
    }
    ngOnInit() {
        this.db.Content.subscribe(val => {
            this.Cont = val;
            //console.log('Content', this.Cont);
        });
        let user_id = localStorage.getItem('user_id');
        this.db.getContent(user_id);
    }
    view_content(type, url) {
        this.ctype = '';
        this.content_url = '';
        const timer = setTimeout(() => {
            this.ctype = type;
            this.content_url = url;
        }, 500);
    }
    presentConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alertCtrl.create({
                header: 'Confirm Action',
                subHeader: 'Delete Content',
                message: 'Are you sure you want to delete this item?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: () => {
                            this.db.delete(item.id);
                        }
                    }
                ]
            }).then(res => {
                res.present();
            });
        });
    }
    add_content() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_add_content_add_content_component__WEBPACK_IMPORTED_MODULE_4__["AddContentComponent"],
                cssClass: 'modal-full',
                componentProps: {
                    title: 'Add Content'
                }
            });
            yield modal.present();
        });
    }
};
ContentManComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_db_db_addcontent__WEBPACK_IMPORTED_MODULE_5__["Content"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ContentManComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-content-man',
        template: _raw_loader_content_man_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_content_man_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContentManComponent);



/***/ }),

/***/ "k72P":
/*!*********************************************************!*\
  !*** ./src/app/pages/content-man/content-man.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentManModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManModule", function() { return ContentManModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _content_man_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-man.component */ "eEsy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _content_man_component__WEBPACK_IMPORTED_MODULE_3__["ContentManComponent"] }
];
let ContentManModule = class ContentManModule {
};
ContentManModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_content_man_component__WEBPACK_IMPORTED_MODULE_3__["ContentManComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]
    })
], ContentManModule);



/***/ })

}]);
//# sourceMappingURL=pages-content-man-content-man-module-es2015.js.map