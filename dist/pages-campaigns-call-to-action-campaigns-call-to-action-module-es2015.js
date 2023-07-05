(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-campaigns-call-to-action-campaigns-call-to-action-module"],{

/***/ "/LFb":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/campaigns-call-to-action/campaigns-call-to-action.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label, ion-item, ion-list {\n  --ion-item-background: #292f37 !important;\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.green {\n  color: green;\n  font-weight: bold;\n}\n\n.red {\n  color: red;\n  font-weight: bold;\n}\n\n.title {\n  cursor: pointer;\n}\n\n.title:active {\n  color: greenyellow;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FtcGFpZ25zLWNhbGwtdG8tYWN0aW9uL2NhbXBhaWducy1jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FtcGFpZ25zLWNhbGwtdG8tYWN0aW9uL2NhbXBhaWducy1jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWxhYmVsLCBpb24taXRlbSwgaW9uLWxpc3R7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMjkyZjM3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZ3JlZW57XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRpdGxlOmFjdGl2ZXtcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "24vq":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/campaigns-call-to-action/campaigns-call-to-action.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CampaignsCallToActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsCallToActionComponent", function() { return CampaignsCallToActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_campaigns_call_to_action_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./campaigns-call-to-action.component.html */ "BrtG");
/* harmony import */ var _campaigns_call_to_action_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaigns-call-to-action.component.scss */ "/LFb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_add_call_to_action_add_call_to_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/add-call-to-action/add-call-to-action.component */ "8hdO");
/* harmony import */ var _services_db_db_calltoaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/db/db.calltoaction */ "6ZKQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let CampaignsCallToActionComponent = class CampaignsCallToActionComponent {
    constructor(modalController, db, sanitizer, alertCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.ctype = '';
    }
    ngOnInit() {
        this.db.Calltoaction.subscribe(val => {
            this.Cont = val;
            //console.log('Content', this.Cont);
        });
        let user_id = localStorage.getItem('user_id');
        this.db.getCalltoactions(user_id);
    }
    view_call(type, url) {
        this.call_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.ctype = type;
    }
    presentConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alertCtrl.create({
                header: 'Confirm Action',
                subHeader: 'Delete Call to action',
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
    add_calltoaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_add_call_to_action_add_call_to_action_component__WEBPACK_IMPORTED_MODULE_4__["AddCallToActionComponent"],
                cssClass: 'modal-full',
                componentProps: {
                    title: 'Add Call To Action'
                }
            });
            yield modal.present();
        });
    }
};
CampaignsCallToActionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_db_db_calltoaction__WEBPACK_IMPORTED_MODULE_5__["Calltoaction"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
CampaignsCallToActionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-campaigns-call-to-action',
        template: _raw_loader_campaigns_call_to_action_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_campaigns_call_to_action_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CampaignsCallToActionComponent);



/***/ }),

/***/ "BrtG":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/campaigns-call-to-action/campaigns-call-to-action.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- cards -->\n<div class=\"row\">\n\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_calltoaction()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-bell-check-outline\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add Campaign Call to Action\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <ion-list>\n                            <ion-item *ngFor=\"let item of Cont\">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col (click)=\"view_call(item.call_type, item.call_url)\" class=\"title\" size=\"4\">\n                                            {{item.name}}\n                                        </ion-col>\n                                        <ion-col size=\"4\">\n                                            <span *ngIf=\"item.call_type=='Buy'\">Buy call is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"item.call_type=='Play'\">Play call is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                        </ion-col>\n           \n                                        <ion-col size=\"4\">\n                                            <ion-button (click)=\"presentConfirm(item)\" color=\"danger\" fill=\"solid\">Remove</ion-button>\n                                        </ion-col>\n                         \n                                    </ion-row>\n                                </ion-grid>\n     \n                            </ion-item>\n                        </ion-list>\n      \n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div>\n                    <iframe width=\"100%\" height=\"300\" [src]=\"call_url\"></iframe>\n                </div>\n         \n                </div>\n            </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "SGoT":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/campaigns-call-to-action/campaigns-call-to-action.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CampaignsCallToActionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsCallToActionModule", function() { return CampaignsCallToActionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _campaigns_call_to_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns-call-to-action.component */ "24vq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _campaigns_call_to_action_component__WEBPACK_IMPORTED_MODULE_3__["CampaignsCallToActionComponent"] }
];
let CampaignsCallToActionModule = class CampaignsCallToActionModule {
};
CampaignsCallToActionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_campaigns_call_to_action_component__WEBPACK_IMPORTED_MODULE_3__["CampaignsCallToActionComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]
    })
], CampaignsCallToActionModule);



/***/ })

}]);
//# sourceMappingURL=pages-campaigns-call-to-action-campaigns-call-to-action-module-es2015.js.map