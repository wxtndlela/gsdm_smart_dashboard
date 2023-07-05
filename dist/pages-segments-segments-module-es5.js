(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segments-segments-module"], {
    /***/
    "3nsm":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segments/segments.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function nsm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #cont>\n  <div class=\"download\" *ngIf=\"downloading == true\">\n    Please wait while downloading ... {{ percDownload }}&nbsp;%\n  </div>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n    *ngIf=\"downloading == false\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"page-header\">\n        <div class=\"col-md-6\">\n          <h3 class=\"page-title\">Segments Found [{{ _segments.length }}]</h3>\n        </div>\n\n        <!-- <div *ngIf=\"show_info\" class=\"col-md-6 info\">\n          Segment ID:&nbsp;&nbsp;{{ current_roadid }}\n          <div>Address:&nbsp;&nbsp;{{ displayname }}</div>\n        </div> -->\n      </div>\n      <div class=\"col-md-12\" *ngIf=\"show_list\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend bg-transparent\">\n            <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\n          </div>\n          <input\n            type=\"text\"\n            class=\"form-control border-0\"\n            placeholder=\"Find Link/Segment\"\n            [(ngModel)]=\"searchQuery\"\n          />\n        </div>\n\n        <div class=\"list-group list-group-light space\">\n          <a\n            *ngFor=\"let item of filteredItems\"\n            class=\"list-group-item list-group-item-action px-3 border-0\"\n            aria-current=\"true\"\n            (click)=\"itemClicked(item)\"\n          >\n            {{ item.municipality }}&nbsp;&nbsp;|&nbsp;&nbsp;{{\n              item.road_id\n            }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.surfacetype }}</a\n          >\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <!--MAP-->\n        <!-- <div\n          *ngIf=\"showMap && offlinemode == false\"\n          class=\"col-md-12 grid-margin\"\n        >\n          <div class=\"card\" id=\"map_canvas_segments\" style=\"height: 85vh\"></div>\n        </div> -->\n        <div *ngIf=\"showMap\" class=\"iframe-container\">\n          <div class=\"main-iframe\">\n            <iframe\n              [src]=\"mapSrc\"\n              allow=\"microphone; camera; autoplay\"\n              allowfullscreen\n            ></iframe>\n          </div>\n        </div>\n\n        <!--SEGEMENT DETAILS-->\n        <div *ngIf=\"!showMap\" class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">Physical Location:</h4>\n              <p class=\"card-description\" *ngIf=\"roadID\">\n                Coordinates :{{ latitude }}, {{ longitude }}\n                <br />\n                Address: <br /><span\n                  style=\"font-size: 12px; font-style: italic\"\n                  >{{ displayname }}</span\n                >\n              </p>\n\n              <p class=\"card-description\" *ngIf=\"!roadID\">\n                Coordinates :--No Link Selected--\n                <br />\n                Address : --No Link Selected--\n              </p>\n\n              <h4 class=\"card-title\">Road / Link ID:</h4>\n              <p class=\"card-description road-id\">\n                <span *ngIf=\"roadID\">{{ roadID }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Street Name:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"streetName\">{{ streetName }}</span>\n                <span *ngIf=\"!streetName\">Name Not Found</span><br />\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Municipality:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ munic }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">VCI:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ VCI }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Start Length:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ start_len }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Start KMs:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ start_km }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">End KMs:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ end_km }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Road Length:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ road_len }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <h4 class=\"card-title\">Route Seq:</h4>\n              <p class=\"card-description\">\n                <span *ngIf=\"roadID\">{{ route_seq }}</span>\n                <span *ngIf=\"!roadID\">--No Link Selected--</span>\n              </p>\n\n              <p *ngIf=\"roadID\" class=\"card-title\">\n                <label for=\"choose\" class=\"text-color\"\n                  >Choose what you want to do</label\n                >\n                <ion-select\n                  class=\"form-control\"\n                  value=\"select\"\n                  (ionChange)=\"getViewType($event)\"\n                  okText=\"Okay\"\n                  cancelText=\"Dismiss\"\n                  id=\"choose\"\n                >\n                  <ion-select-option value=\"viewmedia\"\n                    >Go to Assessment</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"uploadmedia\"\n                    >Upload Inspection</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"recondevice\"\n                    >Record (Device Cam)</ion-select-option\n                  >\n                  <ion-select-option\n                    *ngIf=\"\n                      (global.userRole == 'Administrator' ||\n                        global.userRole == 'Road Inspection') &&\n                      offlinemode == false\n                    \"\n                    value=\"rec3d\"\n                    >Record (3D Cam)</ion-select-option\n                  >\n                </ion-select>\n              </p>\n\n              <div *ngIf=\"viewType == 'uploadmedia'\" class=\"form-group\">\n                <label for=\"uploadmedia\" class=\"text-color\"\n                  >Upload Link Videos/Images</label\n                >\n\n                <ion-select\n                  class=\"form-control\"\n                  value=\"select\"\n                  (ionChange)=\"getMediaType($event)\"\n                  okText=\"Okay\"\n                  cancelText=\"Dismiss\"\n                  id=\"uploadmedia\"\n                >\n                  <ion-select-option value=\"vid3d\">Video(3D)</ion-select-option>\n                  <ion-select-option value=\"vid\"\n                    >Video(Normal)</ion-select-option\n                  >\n                  <ion-select-option value=\"img\">Image</ion-select-option>\n                </ion-select>\n\n                <input\n                  *ngIf=\"uploadmedia !== '' && !isbusy\"\n                  (change)=\"select_file($event)\"\n                  [accept]=\"opentype\"\n                  type=\"file\"\n                  class=\"form-control\"\n                  id=\"uploadvideo\"\n                  placeholder=\"photo\"\n                />\n                <div class=\"hide\" *ngIf=\"uploadPercent | async as percent\">\n                  Uploading: {{ getValue(percent) }}%\n                  <ion-progress-bar [value]=\"percent\"></ion-progress-bar>\n                </div>\n\n                <ion-button *ngIf=\"isbusy\" color=\"light\" expand=\"block\">{{\n                  showpercent\n                }}</ion-button>\n              </div>\n\n              <div *ngIf=\"viewType == 'viewmedia'\">\n                <ion-slides pager=\"true\" [options]=\"slideOpts\">\n                  <ion-slide *ngFor=\"let item of SegmentMediaArray\">\n                    <ion-title class=\"slide-title\">{{\n                      item.media_name\n                    }}</ion-title>\n                    <!-- Add a title for the slide -->\n                    <div\n                      class=\"slide-content\"\n                      (click)=\"\n                        open_inspection(\n                          item.road_id,\n                          item.id,\n                          item.media_type,\n                          item.media_url\n                        )\n                      \"\n                    >\n                      <img\n                        *ngIf=\"item.media_type == 'vid'\"\n                        src=\"assets/images/vid.jpg\"\n                        width=\"100%\"\n                      />\n                      <img\n                        *ngIf=\"item.media_type == 'vid3d'\"\n                        src=\"assets/images/vid3d.jpg\"\n                        width=\"100%\"\n                      />\n                      <img\n                        *ngIf=\"item.media_type == 'img'\"\n                        src=\"assets/images/img.jpg\"\n                        width=\"100%\"\n                      />\n                    </div>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n              <div class=\"col-md-12\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-button\n                        *ngIf=\"!isbusy\"\n                        expand=\"block\"\n                        (click)=\"gotoMap(true)\"\n                        >Go Back</ion-button\n                      >\n                    </ion-col>\n                    <ion-col *ngIf=\"offlinemode == false\">\n                      <ion-button\n                        color=\"warning\"\n                        *ngIf=\"!isbusy\"\n                        expand=\"block\"\n                        (click)=\"gotoDownload()\"\n                        >Download Offline Media</ion-button\n                      >\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- main-panel ends -->\n  </div>\n\n  <!-- page-body-wrapper ends -->\n</ion-content>\n";
      /***/
    },

    /***/
    "PpJ6":
    /*!***************************************************!*\
      !*** ./src/app/pages/segments/segments.module.ts ***!
      \***************************************************/

    /*! exports provided: SegmentsModule */

    /***/
    function PpJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegmentsModule", function () {
        return SegmentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _segments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./segments.component */
      "Qef9");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var routes = [{
        path: "",
        component: _segments_component__WEBPACK_IMPORTED_MODULE_4__["SegmentsComponent"]
      }];

      var SegmentsModule = /*#__PURE__*/_createClass(function SegmentsModule() {
        _classCallCheck(this, SegmentsModule);
      });

      SegmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_segments_component__WEBPACK_IMPORTED_MODULE_4__["SegmentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], SegmentsModule);
      /***/
    },

    /***/
    "Qef9":
    /*!******************************************************!*\
      !*** ./src/app/pages/segments/segments.component.ts ***!
      \******************************************************/

    /*! exports provided: SegmentsComponent */

    /***/
    function Qef9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegmentsComponent", function () {
        return SegmentsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_segments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./segments.component.html */
      "3nsm");
      /* harmony import */


      var _segments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./segments.component.scss */
      "lGBJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/db */
      "6BIP");
      /* harmony import */


      var _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pages/inspection/inspection.component */
      "gQoZ");
      /* harmony import */


      var _pages_segment_recorder_segment_recorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pages/segment-recorder/segment-recorder.component */
      "/Ywr");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/geolocation.service */
      "J4PG");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_global_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/global.service */
      "WMgp");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var firebase_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! firebase/storage */
      "WI49");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1"); //import { AngularFireStorage } from "@angular/fire/storage";


      var SegmentsComponent = /*#__PURE__*/function () {
        function SegmentsComponent(modalController, db, db_m, route, http, sanitizer, alertCtrl, global, //private storage: FirebaseStorage,
        Offline, storage, location_services, loadingCtrl) {
          var _this = this;

          _classCallCheck(this, SegmentsComponent);

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
          this.host = "localhost"; //media_url: any;

          this.opentype = "";
          this.show_info = false;
          this.show_list = false;
          this.SegmentMediaOnline = false;
          this.current_roadid = "";
          this.opencnt = 0; // Create a reference to the class instance

          this.self = this;
          this.progessStage = "";
          this.searchQuery = "";
          this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4
          };
          this.media_url = "";
          this.isbusy = false;
          this.checkInternetAvailability();
          setInterval(function () {
            _this.checkInternetAvailability();
          }, 2000);
        }

        _createClass(SegmentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.attachMessageListener();
            console.log("Loading Segment Details"); //this.load_map();

            this.loadDetails();
            setTimeout(function () {
              if (_this2.isInternetAvailable == false) {
                //Offline
                //console.log("--No Internet--");
                _this2.global.showSync = false;

                _this2.Offline.get("DATA").then(function (_data) {
                  _this2._segments = _data;
                  _this2.show_list = false;
                  _this2.offlinemode = true;
                });
              } else {
                //Online
                _this2.global.showSync = true;

                _this2.Offline.set("DATA", _this2._segments);

                _this2.offlinemode = false; //console.log(this._segments[0]);
              }
            }, 5000);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Remove the message event listener when the component is destroyed
            this.detachMessageListener();
          }
        }, {
          key: "attachMessageListener",
          value: function attachMessageListener() {
            // Add event listener to listen for messages from the iframe
            window.addEventListener("message", this.handleMessageEvent);
          }
        }, {
          key: "detachMessageListener",
          value: function detachMessageListener() {
            // Remove event listener when the component is destroyed
            window.removeEventListener("message", this.handleMessageEvent);
          }
        }, {
          key: "handleMessageEvent",
          value: function handleMessageEvent(event) {
            var _this3 = this;

            // Ensure the message is coming from a trusted source
            // You can check event.origin and validate it against your expected iframe origin
            // Handle the received message
            var message = event.data;

            if (message.type === "clickEvent") {
              setTimeout(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var roadID, foundObject, coords, fin_coords, i, _res, res, outputArray;

                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          roadID = message.data.roadid; // Perform actions based on the received click data

                          console.log("Click event received from Map:", roadID); //this.mapClickedSegment(roadID);

                          _context.next = 4;
                          return this._segments.find(function (obj) {
                            return obj.road_id === roadID;
                          });

                        case 4:
                          foundObject = _context.sent;
                          //console.log("SEG:", foundObject.geometry[0]);
                          coords = foundObject.geometry;
                          fin_coords = [];

                          for (i = 0; i < coords.length; i++) {
                            _res = [];
                            res = "lng:" + coords[i];
                            res = res.replace(",", ",lat:");
                            fin_coords.push(res);
                          }

                          outputArray = fin_coords.map(function (item) {
                            var _item$split = item.split(","),
                                _item$split2 = _slicedToArray(_item$split, 2),
                                lng = _item$split2[0],
                                lat = _item$split2[1];

                            return {
                              lng: parseFloat(lng.split(":")[1]),
                              lat: parseFloat(lat.split(":")[1])
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
                          _context.next = 27;
                          return this.loadSegmentMedia(this.roadID);

                        case 27:
                          _context.next = 29;
                          return this.getMediaForOffline(this.roadID);

                        case 29:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, 1000);
            }
          } // async mapClickedSegment(_segmentid) {
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

        }, {
          key: "loadDetails",
          value: function loadDetails() {
            var _this4 = this;

            this.db.Segments.subscribe(function (val) {
              _this4._segments = val; //console.log(val[0]);
              // if (this._segments.length > 0) {

              _this4.mapSrc = _this4.sanitizer.bypassSecurityTrustResourceUrl("http://" + _this4.host + ":3000/map"); //this.load_map();
              //}
            });
            this.db.getAll();
          }
        }, {
          key: "downloadFileFromStorage",
          value: function downloadFileFromStorage(downloadURL, fileName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var response, blob;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return fetch(downloadURL);

                    case 3:
                      response = _context2.sent;
                      _context2.next = 6;
                      return response.blob();

                    case 6:
                      blob = _context2.sent;
                      // Save the blob as a file using the FileSaver library
                      Object(file_saver__WEBPACK_IMPORTED_MODULE_14__["saveAs"])(blob, fileName);
                      console.log("Downloaded: ", fileName);
                      _context2.next = 14;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](0);
                      console.error("Error downloading file:", _context2.t0);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[0, 11]]);
            }));
          }
        }, {
          key: "gotoDownload_script",
          value: function gotoDownload_script(_url, _fileName, total_length) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

              var apiUrl, requestData;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      apiUrl = "http://localhost:3000/run-script"; // Replace with your server's URL

                      requestData = {
                        url: _url,
                        fname: _fileName,
                        road_id: this.roadID
                      }; // Customize the data you want to send to the server

                      this.http.post(apiUrl, requestData).subscribe(function (res) {
                        if (res) {
                          _this5.totalIncr += 1; //Store local file paths to ARRAY

                          _this5.offlinemedia.push("./assets/media/" + _this5.roadID + "/" + _fileName);

                          if (_this5.totalIncr >= total_length) {
                            _this5.downloading = false; //Store file path ARRAY to offline storage

                            _this5.Offline.set(_this5.roadID, _this5.offlinemedia); //console.log("Media:", this.offlinemedia);

                          } else {
                            _this5.downloading = true;
                          }
                        }

                        _this5.percDownload = Number((_this5.totalIncr / total_length * 100).toFixed(1)); // Handle any further actions or responses from the server
                      }, function (error) {
                        console.error("Error executing Download script:", error); // Handle the error condition if necessary
                      });
                      return _context3.abrupt("return", 0);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "gotoDownload",
          value: function gotoDownload() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var len, cnt, type_;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.downloading = true;
                      this.totalIncr = 0;
                      len = this.SegmentMediaArray.length;
                      cnt = 0;
                      this.offlinemedia = [];

                    case 5:
                      if (!(cnt < len)) {
                        _context4.next = 13;
                        break;
                      }

                      type_ = "";

                      if (this.SegmentMediaArray[cnt].media_url.includes(".png")) {
                        type_ = ".png";
                      } else if (this.SegmentMediaArray[cnt].media_url.includes(".jpeg")) {
                        type_ = ".jpeg";
                      } else if (this.SegmentMediaArray[cnt].media_url.includes(".jpg")) {
                        type_ = ".jpg";
                      } else if (this.SegmentMediaArray[cnt].media_url.includes(".mp4")) {
                        type_ = ".mp4";
                      }

                      _context4.next = 10;
                      return this.gotoDownload_script(this.SegmentMediaArray[cnt].media_url, this.SegmentMediaArray[cnt].media_name + type_, len);

                    case 10:
                      cnt += 1;
                      _context4.next = 5;
                      break;

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getMediaForOffline",
          value: function getMediaForOffline(roadID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this6 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      setTimeout(function () {
                        //console.log("OFF:", this.SegmentMediaOnline);
                        if (_this6.isInternetAvailable == false) {
                          //Offline
                          //console.log("--No Internet--");
                          _this6.Offline.get("M-" + roadID).then(function (_data) {
                            _this6.SegmentMediaArray = _data;
                            _this6.offlinemode = true;
                            var _tmpMediaDownloaded = []; //Retrieve a list of media links that were downloaded

                            _this6.Offline.get(roadID).then(function (ret) {
                              _tmpMediaDownloaded = ret;
                              console.log(_tmpMediaDownloaded);
                              var cnt = 0;
                              var len = _tmpMediaDownloaded.length;

                              var _loop = function _loop() {
                                var _replace = "./assets/media/" + roadID + "/";

                                var _fname = String(_tmpMediaDownloaded[cnt].replace(_replace, ""));

                                _fname = _fname.substring(0, _fname.length - 4); //Find matching record by media_name

                                var foundObject = _this6.SegmentMediaArray.find(function (obj) {
                                  return obj.media_name === _fname;
                                });

                                if (foundObject) {
                                  //If found, then replace cloud url with local
                                  foundObject.media_url = _tmpMediaDownloaded[cnt];
                                }

                                cnt += 1;
                              };

                              while (cnt < len) {
                                _loop();
                              }
                            });
                          });
                        } else {
                          //Online
                          _this6.Offline.set("M-" + roadID, _this6.SegmentMediaArray);

                          _this6.offlinemode = false; //console.log("MEDIA:", this.SegmentMediaArray);
                          //Assume Offline
                        }
                      }, 5000);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "loadSegmentData",
          value: function loadSegmentData(road_id, mid, mtype, murl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.db.getSegment(road_id);

                    case 2:
                      _context7.sent.subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                          var modal, foundObject, _modal;

                          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  if (!(this.opencnt < 1)) {
                                    _context6.next = 17;
                                    break;
                                  }

                                  if (!(data.length > 0)) {
                                    _context6.next = 9;
                                    break;
                                  }

                                  _context6.next = 4;
                                  return this.modalController.create({
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
                                      segment: data[0]
                                    }
                                  });

                                case 4:
                                  modal = _context6.sent;
                                  _context6.next = 7;
                                  return modal.present();

                                case 7:
                                  _context6.next = 16;
                                  break;

                                case 9:
                                  //Offline /
                                  //Find matching record by road_id
                                  foundObject = this._segments.find(function (obj) {
                                    return obj.road_id === road_id;
                                  });

                                  if (!foundObject) {
                                    _context6.next = 16;
                                    break;
                                  }

                                  _context6.next = 13;
                                  return this.modalController.create({
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
                                      segment: foundObject
                                    }
                                  });

                                case 13:
                                  _modal = _context6.sent;
                                  _context6.next = 16;
                                  return _modal.present();

                                case 16:
                                  this.opencnt += 1;

                                case 17:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "loadSegmentMedia",
          value: function loadSegmentMedia(road_id) {
            var _this8 = this;

            //This gets the segment related media
            this.db_m.SegmentMedia.subscribe(function (val) {
              _this8.SegmentMediaOnline = true;
              _this8.SegmentMediaArray = val;
            });
            this.db_m.getSegmentMedia(road_id);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadDetails();
          }
        }, {
          key: "getViewType",
          value: function getViewType(event) {
            this.viewType = event.detail.value;

            if (this.viewType == "recondevice") {
              this.open_segmentrecorder(this.roadID, "recondevice");
            }

            if (this.viewType == "rec3d") {
              this.open_segmentrecorder(this.roadID, "rec3d");
            }
          }
        }, {
          key: "getMediaType",
          value: function getMediaType(event) {
            this.uploadmedia = event.detail.value;

            if (this.uploadmedia == "vid3d" || this.uploadmedia == "vid") {
              this.opentype = "video/*";
            } else {
              this.opentype = "image/*";
            }

            console.log(this.opentype);
          }
        }, {
          key: "open_segmentrecorder",
          value: function open_segmentrecorder(roadid, rectype) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.modalController.create({
                        component: _pages_segment_recorder_segment_recorder_component__WEBPACK_IMPORTED_MODULE_6__["SegmentRecorderComponent"],
                        cssClass: "modal-full",
                        componentProps: {
                          title: "Open Recorder",
                          roadid: roadid,
                          rectype: rectype
                        }
                      });

                    case 2:
                      modal = _context8.sent;
                      _context8.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "open_inspection",
          value: function open_inspection(roadid, mid, mtype, murl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.opencnt = 0;
                      _context9.next = 3;
                      return this.loadSegmentData(roadid, mid, mtype, murl);

                    case 3:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
          /**
           * load_map
           */

        }, {
          key: "load_map",
          value: function load_map() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "setSegment",
          value: function setSegment(coords) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var polygon, me;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      // Create a new polygon with the specified coordinates
                      polygon = new google.maps.Polyline({
                        path: coords,
                        strokeColor: "rgb(0, 195, 255)",
                        strokeOpacity: 0.8,
                        strokeWeight: 5
                      });
                      me = 0; // Add the polygon to the map
                      //polygon.setMap(this.map);

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "myFunction",
          value: function myFunction(name) {}
        }, {
          key: "resetSegment",
          value: function resetSegment(coords) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "addSegments",
          value: function addSegments(map) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _this9 = this;

              var location;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      location = {
                        lat: this.latitude,
                        lng: this.longitude
                      };
                      this.location_services.osm_geocode_latlng(location).subscribe(function (res) {
                        console.log(res);
                        _this9.displayname = res.display_name; // this.surburb = res.address.suburb;
                        // this.postalCode = res.address.postcode;
                        // this.city = res.address.city ? res.address.city : res.address.county;
                        // this.province = res.address.state;
                        // let name = `${res.address.road}, ${res.address.house_number}`;
                        //this.billboardForm.get('name').setValue(name)
                      });

                    case 2:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "getValue",
          value: function getValue(val) {
            var roundedNum = Math.round(val);
            this.showpercent = "Uploading..." + roundedNum + "%";
            return roundedNum; //console.log("Progress: " + roundedNum);
          }
        }, {
          key: "select_file",
          value: function select_file(event) {
            var _this10 = this;

            var file = event.target.files[0];
            var filepath = "road-inspection/" + this.roadID + "/".concat(file.name);
            this.isbusy = true; //this.progessStage = "Uploading...";

            this.showpercent = "Wait...";

            try {
              var task = this.storage.upload(filepath, file); // observe percentage changes

              this.uploadPercent = task.percentageChanges(); // get notified when the download URL is available

              task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                  var _this11 = this;

                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          this.showpercent = "Processing...";
                          _context16.next = 3;
                          return this.storage.ref(filepath).getDownloadURL().forEach(function (res) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                              var media_name;
                              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                                while (1) {
                                  switch (_context15.prev = _context15.next) {
                                    case 0:
                                      console.log(res);
                                      media_name = String(file.name);
                                      media_name = media_name.slice(0, media_name.indexOf("."));
                                      _context15.next = 5;
                                      return this.addSegmentMediaNow(this.roadID, media_name, this.uploadmedia, res);

                                    case 5:
                                      this.isbusy = false;

                                    case 6:
                                    case "end":
                                      return _context15.stop();
                                  }
                                }
                              }, _callee15, this);
                            }));
                          });

                        case 3:
                          this.downloadURL = _context16.sent;

                        case 4:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16, this);
                }));
              })).subscribe();
            } catch (error) {
              // handle the exception
              console.error(error);
              this.isbusy = false;
            } finally {}
          }
        }, {
          key: "filteredItems",
          get: function get() {
            var _this12 = this;

            return this._segments.filter(function (item) {
              return typeof item.road_id === "string" && item.road_id.toLowerCase().includes(_this12.searchQuery.toLowerCase());
            });
          }
        }, {
          key: "itemClicked",
          value: function itemClicked(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _gps;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
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
                      _gps = item.geometry[0].split(",");
                      this.latitude = _gps[1];
                      this.longitude = _gps[0];
                      this.showMap = false;
                      _context17.next = 20;
                      return this.loadSegmentMedia(this.roadID);

                    case 20:
                      _context17.next = 22;
                      return this.getMediaForOffline(this.roadID);

                    case 22:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "gotoMap",
          value: function gotoMap(res) {
            var _this13 = this;

            if (res) {
              this.loadDetails();
            }

            this.showMap = res;
            setTimeout(function () {
              if (_this13.isInternetAvailable == false) {
                //Offline
                //console.log("--No Internet--");
                _this13.Offline.get("DATA").then(function (_data) {
                  _this13._segments = _data; //this.show_list = true;

                  _this13.offlinemode = true;
                });
              } else {
                //Online
                _this13.Offline.set("DATA", _this13._segments);

                _this13.offlinemode = false; //console.log(this._segments[0]);
              }
            }, 5000);
          }
        }, {
          key: "addSegmentMediaNow",
          value: function addSegmentMediaNow(roadid, medianame, mediatype, mediaurl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var now, year, month, day, hours, minutes, seconds, dt, segmentMedia;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      now = new Date();
                      year = now.getFullYear();
                      month = String(now.getMonth() + 1).padStart(2, "0");
                      day = String(now.getDate()).padStart(2, "0");
                      hours = String(now.getHours()).padStart(2, "0");
                      minutes = String(now.getMinutes()).padStart(2, "0");
                      seconds = String(now.getSeconds()).padStart(2, "0");
                      dt = "".concat(year).concat(month).concat(day).concat(hours).concat(minutes).concat(seconds);
                      segmentMedia = {
                        user_id: localStorage.getItem("uuid"),
                        road_id: roadid,
                        media_name: medianame,
                        media_type: mediatype,
                        media_url: mediaurl,
                        addedondatetime: dt,
                        enabled: true,
                        approved: true
                      };
                      _context18.next = 11;
                      return this.db_m.create(segmentMedia);

                    case 11:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "checkInternetAvailability",
          value: function checkInternetAvailability() {
            var _this14 = this;

            this.http.get("https://chappie-demo.novosense.africa:5000").subscribe(function () {
              _this14.isInternetAvailable = true;
              console.log("--Online--");
            }, function () {
              _this14.isInternetAvailable = false;
              console.log("--No Internet--");
            });
          }
        }]);

        return SegmentsComponent;
      }();

      SegmentsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_4__["Segments"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_4__["SegmentMedia"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalSettings"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__["Storage"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
        }, {
          type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      SegmentsComponent.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["fileInput"]
        }],
        handleMessageEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ["window:message", ["$event"]]
        }]
      };
      SegmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-segments",
        template: _raw_loader_segments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_segments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SegmentsComponent);
      /***/
    },

    /***/
    "lGBJ":
    /*!********************************************************!*\
      !*** ./src/app/pages/segments/segments.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function lGBJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.road-id {\n  font-weight: bold;\n  color: yellow;\n}\n\n.hide {\n  display: none;\n}\n\n.slide-title {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 12px;\n  z-index: 1;\n  text-transform: uppercase;\n}\n\nimg {\n  border-left: 1px solid #ccc;\n}\n\n.info {\n  color: #fff !important;\n  font-size: 12px;\n}\n\n.space {\n  margin-top: 10px;\n}\n\n.download {\n  color: #ebb609;\n  width: 100%;\n  font-weight: lighter;\n  font-size: 28px;\n  text-align: center;\n  margin-top: 20%;\n}\n\n.iframe-container iframe {\n  width: 100% !important;\n  height: 100%;\n  border: none;\n}\n\n.iframe-container {\n  height: 95vh;\n  width: 100% !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-iframe {\n  flex-grow: 1;\n  height: 100%;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VnbWVudHMvc2VnbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLDJCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlZ21lbnRzL3NlZ21lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ucm9hZC1pZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogeWVsbG93O1xufVxuLy8gLnByb2dyZXNzIHtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vIH1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zbGlkZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuaW1nIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xufVxuLmluZm8ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc3BhY2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRvd25sb2FkIHtcbiAgY29sb3I6IHJnYigyMzUsIDE4MiwgOSk7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cbi5pZnJhbWUtY29udGFpbmVyIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuLmlmcmFtZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDk1dmg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNmMDA7XG59XG5cbi5tYWluLWlmcmFtZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNmMDA7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-segments-segments-module-es5.js.map