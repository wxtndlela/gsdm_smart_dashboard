(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vci-processing-vci-processing-module"], {
    /***/
    "LY/D":
    /*!********************************************************************!*\
      !*** ./src/app/pages/vci-processing/vci-processing.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function LYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmNpLXByb2Nlc3NpbmcvdmNpLXByb2Nlc3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZjaS1wcm9jZXNzaW5nL3ZjaS1wcm9jZXNzaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "WMOp":
    /*!******************************************************************!*\
      !*** ./src/app/pages/vci-processing/vci-processing.component.ts ***!
      \******************************************************************/

    /*! exports provided: VciProcessingComponent */

    /***/
    function WMOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VciProcessingComponent", function () {
        return VciProcessingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vci_processing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vci-processing.component.html */
      "sLhL");
      /* harmony import */


      var _vci_processing_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vci-processing.component.scss */
      "LY/D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/db */
      "6BIP");

      var VciProcessingComponent = /*#__PURE__*/function () {
        function VciProcessingComponent(storage, db) {
          _classCallCheck(this, VciProcessingComponent);

          this.storage = storage;
          this.db = db;
          this.isbusy = false;
          this.showpercent = "";
          this.vci_state = "";
          this.processed = false;
        }

        _createClass(VciProcessingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDetails();
          } // async uploadFile(event) {
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

        }, {
          key: "downloadFile",
          value: function downloadFile(url) {
            window.open(url, "_blank");
          }
        }, {
          key: "foundVCIState",
          value: function foundVCIState(state) {
            if (state == "") {
              this.vci_state = false;
            } else {
              this.vci_state = true;
            }
          }
        }, {
          key: "getdate",
          value: function getdate(dt) {
            var _dt = dt.substring(0, 4) + "-" + dt.substring(4, 6) + "-" + dt.substring(6, 8) + " " + dt.substring(8, 10) + ":" + dt.substring(10, 12) + ":" + dt.substring(12, 14);

            return _dt;
          }
        }, {
          key: "loadDetails",
          value: function loadDetails() {
            var _this = this;

            this.db.Vci.subscribe(function (val) {
              console.log(val[0]);
              _this._vci = val; //this.processed = this._vci["processed"];
            });
            this.db.getAll();
          }
        }, {
          key: "update_vci",
          value: function update_vci(event) {
            var _this2 = this;

            var file = event.target.files[0];
            var filepath = "road-inspection/vci" + "/".concat(file.name);
            this.isbusy = true; //this.progessStage = "Uploading...";

            this.showpercent = "Wait...";

            try {
              var task = this.storage.upload(filepath, file); // observe percentage changes

              this.uploadPercent = task.percentageChanges(); // get notified when the download URL is available

              task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var _this3 = this;

                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.showpercent = "Processing...";
                          _context2.next = 3;
                          return this.storage.ref(filepath).getDownloadURL().forEach(function (res) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      console.log(res);
                                      _context.next = 3;
                                      return this.updateVCI(res);

                                    case 3:
                                      this.isbusy = false;

                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          });

                        case 3:
                          this.downloadURL = _context2.sent;

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              })).subscribe();
            } catch (error) {
              // handle the exception
              console.error(error);
              this.isbusy = false;
            } finally {}
          }
        }, {
          key: "updateVCI",
          value: function updateVCI(file_url) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var now, year, month, day, hours, minutes, seconds, dt, vciData;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      now = new Date();
                      year = now.getFullYear();
                      month = String(now.getMonth() + 1).padStart(2, "0");
                      day = String(now.getDate()).padStart(2, "0");
                      hours = String(now.getHours()).padStart(2, "0");
                      minutes = String(now.getMinutes()).padStart(2, "0");
                      seconds = String(now.getSeconds()).padStart(2, "0");
                      dt = "".concat(year).concat(month).concat(day).concat(hours).concat(minutes).concat(seconds);
                      vciData = {
                        file_url: file_url,
                        processed: false,
                        processed_date: dt,
                        state: ""
                      };
                      _context3.next = 11;
                      return this.db.update("jJpNhkK1klhQm6ZUgP9M", vciData);

                    case 11:
                      this.showpercent = "";

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getValue",
          value: function getValue(val) {
            var roundedNum = Math.round(val);
            this.showpercent = "Uploading..." + roundedNum + "%";
            return roundedNum; //console.log("Progress: " + roundedNum);
          }
        }]);

        return VciProcessingComponent;
      }();

      VciProcessingComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_6__["Vci"]
        }];
      };

      VciProcessingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-vci-processing",
        template: _raw_loader_vci_processing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vci_processing_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VciProcessingComponent);
      /***/
    },

    /***/
    "cjqK":
    /*!***************************************************************!*\
      !*** ./src/app/pages/vci-processing/vci-processing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VciProcessingModule */

    /***/
    function cjqK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VciProcessingModule", function () {
        return VciProcessingModule;
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


      var _vci_processing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vci-processing.component */
      "WMOp");

      var routes = [{
        path: "",
        component: _vci_processing_component__WEBPACK_IMPORTED_MODULE_4__["VciProcessingComponent"]
      }];

      var VciProcessingModule = /*#__PURE__*/_createClass(function VciProcessingModule() {
        _classCallCheck(this, VciProcessingModule);
      });

      VciProcessingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vci_processing_component__WEBPACK_IMPORTED_MODULE_4__["VciProcessingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], VciProcessingModule);
      /***/
    },

    /***/
    "sLhL":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vci-processing/vci-processing.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sLhL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #cont>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"row\">\n        <div\n          *ngIf=\"!isbusy && !vci_state\"\n          class=\"col-md-12 grid-margin stretch-card\"\n        >\n          <input type=\"file\" id=\"fileInput\" (change)=\"update_vci($event)\" />\n        </div>\n        <div class=\"hide\" *ngIf=\"uploadPercent | async as percent\">\n          Uploading: {{ getValue(percent) }}%\n          <ion-progress-bar [value]=\"percent\"></ion-progress-bar>\n        </div>\n        <div *ngIf=\"isbusy\" class=\"col-md-12 grid-margin stretch-card\">\n          <ion-button>{{ showpercent }}</ion-button>\n        </div>\n\n        <div class=\"col-md-12 grid-margin stretch-card\">\n          <div class=\"table-responsive\" style=\"max-height: max-content\">\n            <table class=\"table\">\n              <thead>\n                <tr></tr>\n              </thead>\n\n              <tbody>\n                <tr>\n                  <td>VCI File</td>\n                  <td *ngFor=\"let item of _vci\">\n                    <div class=\"hide\">{{ foundVCIState(item.state) }}</div>\n                    <ion-button\n                      *ngIf=\"!item.processed && !vci_state\"\n                      color=\"danger\"\n                      >Awaiting Processing...</ion-button\n                    >\n                    <ion-button\n                      *ngIf=\"item.processed && !vci_state\"\n                      color=\"success\"\n                      >Processed&nbsp;{{\n                        getdate(item.processed_date)\n                      }}</ion-button\n                    >\n                    <ion-button\n                      color=\"warning\"\n                      *ngIf=\"item.processed && !vci_state\"\n                      (click)=\"downloadFile(item.file_url)\"\n                      >Download VCI File</ion-button\n                    >\n\n                    <ion-button color=\"warning\" *ngIf=\"vci_state\">{{\n                      item.state\n                    }}</ion-button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div></ion-content\n>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-vci-processing-vci-processing-module-es5.js.map