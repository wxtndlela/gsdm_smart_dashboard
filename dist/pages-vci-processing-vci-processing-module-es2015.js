(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vci-processing-vci-processing-module"],{

/***/ "LY/D":
/*!********************************************************************!*\
  !*** ./src/app/pages/vci-processing/vci-processing.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmNpLXByb2Nlc3NpbmcvdmNpLXByb2Nlc3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZjaS1wcm9jZXNzaW5nL3ZjaS1wcm9jZXNzaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "WMOp":
/*!******************************************************************!*\
  !*** ./src/app/pages/vci-processing/vci-processing.component.ts ***!
  \******************************************************************/
/*! exports provided: VciProcessingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VciProcessingComponent", function() { return VciProcessingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vci_processing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vci-processing.component.html */ "sLhL");
/* harmony import */ var _vci_processing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vci-processing.component.scss */ "LY/D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/db */ "6BIP");







let VciProcessingComponent = class VciProcessingComponent {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
        this.isbusy = false;
        this.showpercent = "";
        this.vci_state = "";
        this.processed = false;
    }
    ngOnInit() {
        this.loadDetails();
    }
    // async uploadFile(event) {
    //   // Get the file input element
    //   const fileInput = document.getElementById("fileInput");
    //   // Get the selected file
    //   const file = event.target.files[0];
    //   // Create a new FormData object
    //   const formData = new FormData();
    //   // Append the file to the FormData object
    //   formData.append("file", file);
    //   // Send the file to the server using an AJAX request
    //   const xhr = new XMLHttpRequest();
    //   xhr.open("POST", "http://localhost:9000/vci");
    //   xhr.onreadystatechange = () => {
    //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //       // Create a new blob object from the response data
    //       const blob = new Blob([xhr.response], {
    //         type: "application/vnd.ms-excel",
    //       });
    //       // Create a URL for the blob
    //       const url = window.URL.createObjectURL(blob);
    //       // Create a link element and click it to download the file
    //       const link = document.createElement("a");
    //       link.href = url;
    //       link.download = "updated_file.xlsx";
    //       document.body.appendChild(link);
    //       link.click();
    //       document.body.removeChild(link);
    //     }
    //   };
    //   xhr.responseType = "arraybuffer";
    //   xhr.send(formData);
    // }
    downloadFile(url) {
        window.open(url, "_blank");
    }
    foundVCIState(state) {
        if (state == "") {
            this.vci_state = false;
        }
        else {
            this.vci_state = true;
        }
    }
    getdate(dt) {
        let _dt = dt.substring(0, 4) +
            "-" +
            dt.substring(4, 6) +
            "-" +
            dt.substring(6, 8) +
            " " +
            dt.substring(8, 10) +
            ":" +
            dt.substring(10, 12) +
            ":" +
            dt.substring(12, 14);
        return _dt;
    }
    loadDetails() {
        this.db.Vci.subscribe((val) => {
            console.log(val[0]);
            this._vci = val;
            //this.processed = this._vci["processed"];
        });
        this.db.getAll();
    }
    update_vci(event) {
        const file = event.target.files[0];
        const filepath = "road-inspection/vci" + `/${file.name}`;
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.showpercent = "Processing...";
                this.downloadURL = yield this.storage
                    .ref(filepath)
                    .getDownloadURL()
                    .forEach((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log(res);
                    yield this.updateVCI(res);
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
    updateVCI(file_url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const dt = `${year}${month}${day}${hours}${minutes}${seconds}`;
            let vciData = {
                file_url: file_url,
                processed: false,
                processed_date: dt,
                state: "",
            };
            yield this.db.update("jJpNhkK1klhQm6ZUgP9M", vciData);
            this.showpercent = "";
        });
    }
    getValue(val) {
        const roundedNum = Math.round(val);
        this.showpercent = "Uploading..." + roundedNum + "%";
        return roundedNum;
        //console.log("Progress: " + roundedNum);
    }
};
VciProcessingComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _services_db__WEBPACK_IMPORTED_MODULE_6__["Vci"] }
];
VciProcessingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-vci-processing",
        template: _raw_loader_vci_processing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vci_processing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VciProcessingComponent);



/***/ }),

/***/ "cjqK":
/*!***************************************************************!*\
  !*** ./src/app/pages/vci-processing/vci-processing.module.ts ***!
  \***************************************************************/
/*! exports provided: VciProcessingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VciProcessingModule", function() { return VciProcessingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vci_processing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vci-processing.component */ "WMOp");





const routes = [{ path: "", component: _vci_processing_component__WEBPACK_IMPORTED_MODULE_4__["VciProcessingComponent"] }];
let VciProcessingModule = class VciProcessingModule {
};
VciProcessingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vci_processing_component__WEBPACK_IMPORTED_MODULE_4__["VciProcessingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
    })
], VciProcessingModule);



/***/ }),

/***/ "sLhL":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vci-processing/vci-processing.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #cont>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"row\">\n        <div\n          *ngIf=\"!isbusy && !vci_state\"\n          class=\"col-md-12 grid-margin stretch-card\"\n        >\n          <input type=\"file\" id=\"fileInput\" (change)=\"update_vci($event)\" />\n        </div>\n        <div class=\"hide\" *ngIf=\"uploadPercent | async as percent\">\n          Uploading: {{ getValue(percent) }}%\n          <ion-progress-bar [value]=\"percent\"></ion-progress-bar>\n        </div>\n        <div *ngIf=\"isbusy\" class=\"col-md-12 grid-margin stretch-card\">\n          <ion-button>{{ showpercent }}</ion-button>\n        </div>\n\n        <div class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"table-responsive\" style=\"max-height: max-content\">\n            <table class=\"table\">\n              <thead>\n                <tr></tr>\n              </thead>\n\n              <tbody>\n                <tr>\n                  <td>VCI File</td>\n                  <td *ngFor=\"let item of _vci\">\n                    <div class=\"hide\">{{ foundVCIState(item.state) }}</div>\n                    <ion-button\n                      *ngIf=\"!item.processed && !vci_state\"\n                      color=\"danger\"\n                      >Awaiting Processing...</ion-button\n                    >\n                    <ion-button\n                      *ngIf=\"item.processed && !vci_state\"\n                      color=\"success\"\n                      >Processed&nbsp;{{\n                        getdate(item.processed_date)\n                      }}</ion-button\n                    >\n                    <ion-button\n                      color=\"warning\"\n                      *ngIf=\"item.processed && !vci_state\"\n                      (click)=\"downloadFile(item.file_url)\"\n                      >Download VCI File</ion-button\n                    >\n\n                    <ion-button color=\"warning\" *ngIf=\"vci_state\">{{\n                      item.state\n                    }}</ion-button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div></ion-content\n>\n");

/***/ })

}]);
//# sourceMappingURL=pages-vci-processing-vci-processing-module-es2015.js.map