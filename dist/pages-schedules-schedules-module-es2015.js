(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedules-schedules-module"],{

/***/ "CdFH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedules/schedules.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- cards -->\n<div class=\"row\">\n\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_schedule()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-calendar\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add Schedule\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <ion-list>\n                            <ion-item *ngFor=\"let item of Scheds\">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col (click)=\"view_call(item.call_type, item.call_url)\" class=\"title\" size=\"4\">\n                                            {{item.name}}\n                                        </ion-col>\n                                        <ion-col size=\"4\">\n                                            <span>Schedule is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                           \n                                        </ion-col>\n           \n                                        <ion-col size=\"4\">\n                                            <ion-button (click)=\"presentConfirm(item)\" color=\"danger\" fill=\"solid\">Remove</ion-button>\n                                        </ion-col>\n                         \n                                    </ion-row>\n                                </ion-grid>\n     \n                            </ion-item>\n                        </ion-list>\n      \n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div>\n                    <!-- <iframe width=\"100%\" height=\"300\" [src]=\"call_url\"></iframe> -->\n                </div>\n         \n                </div>\n            </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "OjhM":
/*!********************************************************!*\
  !*** ./src/app/pages/schedules/schedules.component.ts ***!
  \********************************************************/
/*! exports provided: SchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function() { return SchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_schedules_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./schedules.component.html */ "CdFH");
/* harmony import */ var _schedules_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedules.component.scss */ "bvae");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/add-schedule/add-schedule.component */ "X4bS");
/* harmony import */ var _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/db/db.addschedule */ "yxZw");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








let SchedulesComponent = class SchedulesComponent {
    constructor(modalController, db, sanitizer, alertCtrl) {
        this.modalController = modalController;
        this.db = db;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.ctype = '';
    }
    ngOnInit() {
        this.db.Schedule.subscribe(val => {
            this.Scheds = val;
            //console.log('Content', this.Cont);
        });
        let user_id = localStorage.getItem('user_id');
        this.db.getSchedules(user_id);
    }
    view_call(type, url) {
        this.call_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.ctype = type;
    }
    presentConfirm(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alertCtrl.create({
                header: 'Confirm Action',
                subHeader: 'Delete Schedule',
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
    add_schedule() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddScheduleComponent"],
                cssClass: 'modal-full',
                componentProps: {
                    title: 'Add Schedule'
                }
            });
            yield modal.present();
        });
    }
};
SchedulesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
SchedulesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schedules',
        template: _raw_loader_schedules_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedules_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SchedulesComponent);



/***/ }),

/***/ "RmXT":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.form-control {\n  background-color: #292f37;\n  color: aliceblue;\n}\n\nion-select {\n  background-color: #292f37;\n}\n\n.box {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXNjaGVkdWxlL2FkZC1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1zY2hlZHVsZS9hZGQtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJmMzc7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJmMzc7XG59XG5cbi5ib3h7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "TzIm":
/*!*****************************************************!*\
  !*** ./src/app/pages/schedules/schedules.module.ts ***!
  \*****************************************************/
/*! exports provided: SchedulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesModule", function() { return SchedulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _schedules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedules.component */ "OjhM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', component: _schedules_component__WEBPACK_IMPORTED_MODULE_3__["SchedulesComponent"] }
];
let SchedulesModule = class SchedulesModule {
};
SchedulesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_schedules_component__WEBPACK_IMPORTED_MODULE_3__["SchedulesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ]
    })
], SchedulesModule);



/***/ }),

/***/ "X4bS":
/*!**************************************************************!*\
  !*** ./src/app/pages/add-schedule/add-schedule.component.ts ***!
  \**************************************************************/
/*! exports provided: AddScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function() { return AddScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-schedule.component.html */ "tHvK");
/* harmony import */ var _add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-schedule.component.scss */ "RmXT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/db/db.addschedule */ "yxZw");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let AddScheduleComponent = class AddScheduleComponent {
    constructor(modalController, fb, db, loadingCtrl) {
        this.modalController = modalController;
        this.fb = fb;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = true;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.name.nativeElement.value) {
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'please wait ...'
            });
            loading.present();
            this.schedule_name = this.name.nativeElement.value;
            let _user_id = localStorage.getItem("user_id");
            let addschedule = {
                user_id: _user_id,
                name: this.schedule_name,
                enabled: true
            };
            console.log('Addschedule', addschedule);
            yield this.db.create(addschedule);
            loading.dismiss();
            //this.db.getAll();
            this.dismiss();
        });
    }
};
AddScheduleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
AddScheduleComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['title',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['name',] }]
};
AddScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-schedule',
        template: _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddScheduleComponent);



/***/ }),

/***/ "bvae":
/*!**********************************************************!*\
  !*** ./src/app/pages/schedules/schedules.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label, ion-item, ion-list {\n  --ion-item-background: #292f37 !important;\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.green {\n  color: green;\n  font-weight: bold;\n}\n\n.red {\n  color: red;\n  font-weight: bold;\n}\n\n.title {\n  cursor: pointer;\n}\n\n.title:active {\n  color: greenyellow;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWxhYmVsLCBpb24taXRlbSwgaW9uLWxpc3R7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMjkyZjM3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZ3JlZW57XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRpdGxlOmFjdGl2ZXtcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "tHvK":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-schedule/add-schedule.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 100%;padding-top: 0%;\">\n      <div class=\"main-panel-only w-100\">\n        <div class=\"content-wrapper h-100\">\n          <div contentAnimate class=\"h-100\">\n\n            <div class=\"row\">\n\n              <div class=\"col-md-12 grid-margin stretch-card\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{title}}</h4>\n    \n                      <div class=\"form-group\">\n                        <label for=\"name\">Schedule Name</label>\n                        <input type=\"text\" class=\"form-control\" #name\n                          placeholder=\"Schedule Name\">\n                      </div>\n\n                      <button type=\"submit\" class=\"btn btn-gradient-info mr-2\" (click)=\"submit()\">Submit</button>\n                      <button class=\"btn btn-light\" (click)=\"dismiss()\">Cancel</button>\n        \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- partial -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-schedules-schedules-module-es2015.js.map