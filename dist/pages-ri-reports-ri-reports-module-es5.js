(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ri-reports-ri-reports-module"], {
    /***/
    "8qf/":
    /*!*******************************************************!*\
      !*** ./src/app/pages/ri-reports/ri-reports.module.ts ***!
      \*******************************************************/

    /*! exports provided: RiReportsModule */

    /***/
    function qf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RiReportsModule", function () {
        return RiReportsModule;
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


      var _ri_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ri-reports.component */
      "CFWV");

      var routes = [{
        path: "",
        component: _ri_reports_component__WEBPACK_IMPORTED_MODULE_4__["RiReportsComponent"]
      }];

      var RiReportsModule = /*#__PURE__*/_createClass(function RiReportsModule() {
        _classCallCheck(this, RiReportsModule);
      });

      RiReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ri_reports_component__WEBPACK_IMPORTED_MODULE_4__["RiReportsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], RiReportsModule);
      /***/
    },

    /***/
    "CFWV":
    /*!**********************************************************!*\
      !*** ./src/app/pages/ri-reports/ri-reports.component.ts ***!
      \**********************************************************/

    /*! exports provided: RiReportsComponent */

    /***/
    function CFWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RiReportsComponent", function () {
        return RiReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ri_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ri-reports.component.html */
      "MUKn");
      /* harmony import */


      var _ri_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ri-reports.component.scss */
      "duqi");
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
      "WMgp"); //import { AngularFireStorage } from "@angular/fire/storage";


      var RiReportsComponent = /*#__PURE__*/function () {
        function RiReportsComponent(modalController, db, db_m, alertCtrl, global, //private storage: FirebaseStorage,
        storage, location_services, loadingCtrl) {
          _classCallCheck(this, RiReportsComponent);

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
          this.showMap = true; //media_url: any;

          this.opentype = "";
          this.show_info = false;
          this.current_roadid = "";
          this.opencnt = 0; // Create a reference to the class instance

          this.self = this;
          this.progessStage = "";
          this.show_cond = false;
          this.show_cond_done = false;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 4
          };
          this.media_url = "";
          this.isbusy = false;
        }

        _createClass(RiReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("Loading Reports Details"); //this.load_map();
            //this.loadDetails();
          }
        }, {
          key: "change_st",
          value: function change_st(event) {
            console.log("Surface Type Change");
            this.SURFACE_TYPE = event.detail.value;

            if (this.SURFACE_TYPE.length > 0) {
              this.show_cond = true; //this.loadSpecificDetails(-2, -2);
            } else {
              this.show_cond = false;
            } //console.log(this.SURFACE_TYPE);


            if (this.search_array.length > 0) {
              this.search_array[0] = this.SURFACE_TYPE;
              console.log("Search Array:", this.search_array);
              this.loadSpecificDetails(this.search_array);
            }
          }
        }, {
          key: "change_sc",
          value: function change_sc(event) {
            console.log("Surface Condition Change");
            this.show_cond_done = true;
            var input = event.detail.value;
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
            } else {
              this.search_array[2] = false;
            }

            if (input.includes("poor")) {
              this.search_array[3] = true;
            } else {
              this.search_array[3] = false;
            }

            if (input.includes("fair")) {
              this.search_array[4] = true;
            } else {
              this.search_array[4] = false;
            }

            if (input.includes("good")) {
              this.search_array[5] = true;
            } else {
              this.search_array[5] = false;
            }

            if (input.includes("vgood")) {
              this.search_array[6] = true;
            } else {
              this.search_array[6] = false;
            }

            console.log("Search Array:", this.search_array);
            this.loadSpecificDetails(this.search_array);
          }
        }, {
          key: "loadSpecificDetails",
          value: function loadSpecificDetails(search) {
            var _this = this;

            this.db.Segments.subscribe(function (val) {
              _this.Segments = val;

              if (_this.Segments.length > 0) {
                _this.load_map(false); //console.log("Segments", this.Segments[2]);
                // this.latitude = Number("28.618020684007547");
                // this.longitude = Number("-26.651596892582404");

              } else {
                _this.load_map(true);
              }
            });
            this.db.getAll();
          } // loadDetails() {
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

        }, {
          key: "loadSegmentData",
          value: function loadSegmentData(road_id, mid, mtype, murl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.db.getSegment(road_id);

                    case 2:
                      _context2.sent.subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          var modal;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(this.opencnt < 1)) {
                                    _context.next = 7;
                                    break;
                                  }

                                  _context.next = 3;
                                  return this.modalController.create({
                                    component: _pages_inspection_inspection_component__WEBPACK_IMPORTED_MODULE_5__["InspectionComponent"],
                                    cssClass: "modal-full",
                                    componentProps: {
                                      title: "Open Inspection",
                                      segrec_id: this.segrec_id,
                                      roadid: data[0]["road_id"],
                                      mid: mid,
                                      murl: murl,
                                      mtype: mtype,
                                      segment: data[0]
                                    }
                                  });

                                case 3:
                                  modal = _context.sent;
                                  _context.next = 6;
                                  return modal.present();

                                case 6:
                                  this.opencnt += 1;

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadSegmentMedia",
          value: function loadSegmentMedia(road_id) {
            var _this3 = this;

            //This gets the segment related media
            this.db_m.SegmentMedia.subscribe(function (val) {
              _this3.SegmentMediaArray = val;
            });
            this.db_m.getSegmentMedia(road_id);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {//this.loadDetails();
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "open_inspection",
          value: function open_inspection(roadid, mid, mtype, murl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.opencnt = 0;
                      _context4.next = 3;
                      return this.loadSegmentData(roadid, mid, mtype, murl);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * load_map
           */

        }, {
          key: "load_map",
          value: function load_map(clear) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.latitude = Number("-26.651596892582404");
                      this.longitude = Number("28.618020684007547");
                      this.map = new google.maps.Map(document.getElementById("map_canvas_segments"), {
                        center: {
                          lat: this.latitude,
                          lng: this.longitude
                        },
                        zoom: 12,
                        zoomControl: true,
                        mapTypeControl: false,
                        fullscreenControl: true,
                        streetViewControl: true,
                        streetViewControlOptions: {
                          position: google.maps.ControlPosition.RIGHT_BOTTOM
                        },
                        zoomControlOptions: {
                          position: google.maps.ControlPosition.LEFT_BOTTOM
                        },
                        fullscreenControlOptions: {
                          position: google.maps.ControlPosition.BOTTOM_RIGHT
                        }
                      });
                      _context5.next = 5;
                      return this.loadingCtrl.create({
                        message: "Loading Segments ..."
                      });

                    case 5:
                      loading = _context5.sent;
                      loading.present();
                      _context5.next = 9;
                      return this.addSegments(this.map, clear);

                    case 9:
                      loading.dismiss();
                      this.map.setMapTypeId("roadmap"); //this.getAddress();
                      // this.add_marker({ lat: this.latitude, lng: this.longitude });

                      this.map.addListener("click", function (mapsMouseEvent) {
                        var location = {
                          lat: mapsMouseEvent.latLng.lat(),
                          lng: mapsMouseEvent.latLng.lng()
                        }; // this.add_marker(location);
                      });

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setSegment",
          value: function setSegment(coords) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var polygon, me;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      // Create a new polygon with the specified coordinates
                      polygon = new google.maps.Polyline({
                        path: coords,
                        strokeColor: "rgb(0, 195, 255)",
                        strokeOpacity: 0.8,
                        strokeWeight: 5
                      });
                      me = 0; // Add the polygon to the map

                      polygon.setMap(this.map);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "myFunction",
          value: function myFunction(name) {}
        }, {
          key: "resetSegment",
          value: function resetSegment(coords) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var polygon, me;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      // Create a new polygon with the specified coordinates
                      polygon = new google.maps.Polyline({
                        path: coords,
                        strokeColor: "rgb(122, 17, 163)",
                        strokeOpacity: 0.8,
                        strokeWeight: 5
                      });
                      me = 0; // Add the polygon to the map

                      polygon.setMap(this.map);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "addSegments",
          value: function addSegments(map, clear) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this4 = this;

              var _loop, i;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _loop = function _loop(i) {
                        if ( //Display only selected surface type(s)
                        _this4.search_array[0].indexOf(_this4.Segments[i]["surfacetype"]) !== -1) {
                          //Select Assessed/Not Assessed
                          if (_this4.search_array[1] == "assessed") {
                            if (_this4.Segments[i]["ASSESSED"]) {
                              //Get selected Road Status/Condition
                              var vci_array = [];
                              var cnt = 0;

                              if (_this4.search_array[2]) {
                                //If Very Good Condition was selected
                                while (cnt < 30) {
                                  vci_array.push(String(cnt));
                                  cnt += 1;
                                }
                              }

                              if (_this4.search_array[3]) {
                                //If Good Condition was selected
                                cnt = 30;

                                while (cnt < 50) {
                                  vci_array.push(String(cnt));
                                  cnt += 1;
                                }
                              }

                              if (_this4.search_array[4]) {
                                //If Fair Condition was selected
                                cnt = 50;

                                while (cnt < 70) {
                                  vci_array.push(String(cnt));
                                  cnt += 1;
                                }
                              }

                              if (_this4.search_array[5]) {
                                //If Poor Condition was selected
                                cnt = 70;

                                while (cnt < 85) {
                                  vci_array.push(String(cnt));
                                  cnt += 1;
                                }
                              }

                              if (_this4.search_array[6]) {
                                //If Very Poor Condition was selected
                                cnt = 85;

                                while (cnt <= 100) {
                                  vci_array.push(String(cnt));
                                  cnt += 1;
                                }
                              } //console.log("Selected VCI:", vci_array);


                              if (vci_array.includes(_this4.Segments[i]["VCI"]) || vci_array.length == 0) {
                                var coords = _this4.Segments[i]["geometry"];
                                var vci = Number(_this4.Segments[i]["VCI"]);
                                var fin_coords = [];

                                for (var _i = 0; _i < coords.length; _i++) {
                                  var _res = [];
                                  var res = "lng:" + coords[_i];
                                  res = res.replace(",", ",lat:");
                                  fin_coords.push(res);
                                }

                                var outputArray = fin_coords.map(function (item) {
                                  var _item$split = item.split(","),
                                      _item$split2 = _slicedToArray(_item$split, 2),
                                      lng = _item$split2[0],
                                      lat = _item$split2[1];

                                  return {
                                    lng: parseFloat(lng.split(":")[1]),
                                    lat: parseFloat(lat.split(":")[1])
                                  };
                                }); //console.log(outputArray);

                                var poly_color = "rgb(255,0,170)";

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
                                } // Create a new polygon with the specified coordinates


                                var polygon = new google.maps.Polyline({
                                  path: outputArray,
                                  strokeColor: poly_color,
                                  strokeOpacity: 0.8,
                                  strokeWeight: 5
                                });
                                var me = 0; // Add the polygon to the map

                                polygon.setMap(_this4.map); // Add a click event listener to the polygon

                                if (clear) {
                                  polygon.setMap(null);
                                } //clearTimeout(this.timerId);
                                // Save the original stroke color of the polygon


                                var originalStrokeColor = polygon.get("strokeColor"); // Add a mouseover listener to change the stroke color to pink

                                polygon.addListener("mouseover", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                                      while (1) {
                                        switch (_context8.prev = _context8.next) {
                                          case 0:
                                            polygon.setOptions({
                                              strokeColor: "pink"
                                            });
                                            this.current_roadid = this.Segments[i]["road_id"];
                                            this.show_info = true;
                                            this.latitude = outputArray[0]["lat"];
                                            this.longitude = outputArray[0]["lng"];
                                            this.getAddress();

                                          case 6:
                                          case "end":
                                            return _context8.stop();
                                        }
                                      }
                                    }, _callee8, this);
                                  }));
                                }); // Add a mouseout listener to reset the stroke color to the original color

                                polygon.addListener("mouseout", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                                      while (1) {
                                        switch (_context9.prev = _context9.next) {
                                          case 0:
                                            polygon.setOptions({
                                              strokeColor: originalStrokeColor
                                            });
                                            this.show_info = false;

                                          case 2:
                                          case "end":
                                            return _context9.stop();
                                        }
                                      }
                                    }, _callee9, this);
                                  }));
                                });
                                polygon.addListener("click", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                                    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                                      while (1) {
                                        switch (_context10.prev = _context10.next) {
                                          case 0:
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
                                            _context10.next = 17;
                                            return this.loadSegmentMedia(this.roadID);

                                          case 17:
                                          case "end":
                                            return _context10.stop();
                                        }
                                      }
                                    }, _callee10, this);
                                  }));
                                });
                              }
                            }
                          } else if (_this4.search_array[1] == "notassessed") {
                            if (_this4.Segments[i]["ASSESSED"] == false) {
                              //Get selected Road Status/Condition
                              var _vci_array = [];
                              var _cnt = 0;

                              if (_this4.search_array[2]) {
                                //If Very Good Condition was selected
                                while (_cnt < 30) {
                                  _vci_array.push(String(_cnt));

                                  _cnt += 1;
                                }
                              }

                              if (_this4.search_array[3]) {
                                //If Good Condition was selected
                                _cnt = 30;

                                while (_cnt < 50) {
                                  _vci_array.push(String(_cnt));

                                  _cnt += 1;
                                }
                              }

                              if (_this4.search_array[4]) {
                                //If Fair Condition was selected
                                _cnt = 50;

                                while (_cnt < 70) {
                                  _vci_array.push(String(_cnt));

                                  _cnt += 1;
                                }
                              }

                              if (_this4.search_array[5]) {
                                //If Poor Condition was selected
                                _cnt = 70;

                                while (_cnt < 85) {
                                  _vci_array.push(String(_cnt));

                                  _cnt += 1;
                                }
                              }

                              if (_this4.search_array[6]) {
                                //If Very Poor Condition was selected
                                _cnt = 85;

                                while (_cnt <= 100) {
                                  _vci_array.push(String(_cnt));

                                  _cnt += 1;
                                }
                              } //console.log("Selected VCI:", vci_array);


                              if (_vci_array.includes(_this4.Segments[i]["VCI"]) || _vci_array.length == 0) {
                                var _coords = _this4.Segments[i]["geometry"];

                                var _vci = Number(_this4.Segments[i]["VCI"]);

                                var _fin_coords = [];

                                for (var _i2 = 0; _i2 < _coords.length; _i2++) {
                                  var _res2 = [];

                                  var _res3 = "lng:" + _coords[_i2];

                                  _res3 = _res3.replace(",", ",lat:");

                                  _fin_coords.push(_res3);
                                }

                                var _outputArray = _fin_coords.map(function (item) {
                                  var _item$split3 = item.split(","),
                                      _item$split4 = _slicedToArray(_item$split3, 2),
                                      lng = _item$split4[0],
                                      lat = _item$split4[1];

                                  return {
                                    lng: parseFloat(lng.split(":")[1]),
                                    lat: parseFloat(lat.split(":")[1])
                                  };
                                }); //console.log(outputArray);


                                var _poly_color = "rgb(255,0,170)";

                                if (_vci >= 0 && _vci < 30) {
                                  _poly_color = "rgb(128,0,128)";
                                }

                                if (_vci >= 30 && _vci < 50) {
                                  _poly_color = "rgb(255,0,0)";
                                }

                                if (_vci >= 50 && _vci < 70) {
                                  _poly_color = "rgb(255,165,0)";
                                }

                                if (_vci >= 70 && _vci < 85) {
                                  _poly_color = "rgb(0,128,0)";
                                }

                                if (_vci >= 85 && _vci <= 100) {
                                  _poly_color = "rgb(0,0,255)";
                                } // Create a new polygon with the specified coordinates


                                var _polygon = new google.maps.Polyline({
                                  path: _outputArray,
                                  strokeColor: _poly_color,
                                  strokeOpacity: 0.8,
                                  strokeWeight: 5
                                });

                                var _me = 0; // Add the polygon to the map

                                _polygon.setMap(_this4.map); // Add a click event listener to the polygon


                                if (clear) {
                                  _polygon.setMap(null);
                                } //clearTimeout(this.timerId);
                                // Save the original stroke color of the polygon


                                var _originalStrokeColor = _polygon.get("strokeColor"); // Add a mouseover listener to change the stroke color to pink


                                _polygon.addListener("mouseover", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                                      while (1) {
                                        switch (_context11.prev = _context11.next) {
                                          case 0:
                                            _polygon.setOptions({
                                              strokeColor: "pink"
                                            });

                                            this.current_roadid = this.Segments[i]["road_id"];
                                            this.show_info = true;
                                            this.latitude = _outputArray[0]["lat"];
                                            this.longitude = _outputArray[0]["lng"];
                                            this.getAddress();

                                          case 6:
                                          case "end":
                                            return _context11.stop();
                                        }
                                      }
                                    }, _callee11, this);
                                  }));
                                }); // Add a mouseout listener to reset the stroke color to the original color


                                _polygon.addListener("mouseout", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                                    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                                      while (1) {
                                        switch (_context12.prev = _context12.next) {
                                          case 0:
                                            _polygon.setOptions({
                                              strokeColor: _originalStrokeColor
                                            });

                                            this.show_info = false;

                                          case 2:
                                          case "end":
                                            return _context12.stop();
                                        }
                                      }
                                    }, _callee12, this);
                                  }));
                                });

                                _polygon.addListener("click", function () {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                                    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                                      while (1) {
                                        switch (_context13.prev = _context13.next) {
                                          case 0:
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
                                            this.latitude = _outputArray[0]["lat"];
                                            this.longitude = _outputArray[0]["lng"];
                                            this.showMap = false;
                                            _context13.next = 17;
                                            return this.loadSegmentMedia(this.roadID);

                                          case 17:
                                          case "end":
                                            return _context13.stop();
                                        }
                                      }
                                    }, _callee13, this);
                                  }));
                                });
                              }
                            }
                          } else {
                            //Get selected Road Status/Condition
                            var _vci_array2 = [];
                            var _cnt2 = 0;

                            if (_this4.search_array[2]) {
                              //If Very Good Condition was selected
                              while (_cnt2 < 30) {
                                _vci_array2.push(String(_cnt2));

                                _cnt2 += 1;
                              }
                            }

                            if (_this4.search_array[3]) {
                              //If Good Condition was selected
                              _cnt2 = 30;

                              while (_cnt2 < 50) {
                                _vci_array2.push(String(_cnt2));

                                _cnt2 += 1;
                              }
                            }

                            if (_this4.search_array[4]) {
                              //If Fair Condition was selected
                              _cnt2 = 50;

                              while (_cnt2 < 70) {
                                _vci_array2.push(String(_cnt2));

                                _cnt2 += 1;
                              }
                            }

                            if (_this4.search_array[5]) {
                              //If Poor Condition was selected
                              _cnt2 = 70;

                              while (_cnt2 < 85) {
                                _vci_array2.push(String(_cnt2));

                                _cnt2 += 1;
                              }
                            }

                            if (_this4.search_array[6]) {
                              //If Very Poor Condition was selected
                              _cnt2 = 85;

                              while (_cnt2 <= 100) {
                                _vci_array2.push(String(_cnt2));

                                _cnt2 += 1;
                              }
                            } //console.log("Selected VCI:", vci_array);


                            if (_vci_array2.includes(_this4.Segments[i]["VCI"]) || _vci_array2.length == 0) {
                              var _coords2 = _this4.Segments[i]["geometry"];

                              var _vci2 = Number(_this4.Segments[i]["VCI"]);

                              var _fin_coords2 = [];

                              for (var _i3 = 0; _i3 < _coords2.length; _i3++) {
                                var _res4 = [];

                                var _res5 = "lng:" + _coords2[_i3];

                                _res5 = _res5.replace(",", ",lat:");

                                _fin_coords2.push(_res5);
                              }

                              var _outputArray2 = _fin_coords2.map(function (item) {
                                var _item$split5 = item.split(","),
                                    _item$split6 = _slicedToArray(_item$split5, 2),
                                    lng = _item$split6[0],
                                    lat = _item$split6[1];

                                return {
                                  lng: parseFloat(lng.split(":")[1]),
                                  lat: parseFloat(lat.split(":")[1])
                                };
                              }); //console.log(outputArray);


                              var _poly_color2 = "rgb(255,0,170)";

                              if (_vci2 >= 0 && _vci2 < 30) {
                                _poly_color2 = "rgb(128,0,128)";
                              }

                              if (_vci2 >= 30 && _vci2 < 50) {
                                _poly_color2 = "rgb(255,0,0)";
                              }

                              if (_vci2 >= 50 && _vci2 < 70) {
                                _poly_color2 = "rgb(255,165,0)";
                              }

                              if (_vci2 >= 70 && _vci2 < 85) {
                                _poly_color2 = "rgb(0,128,0)";
                              }

                              if (_vci2 >= 85 && _vci2 <= 100) {
                                _poly_color2 = "rgb(0,0,255)";
                              } // Create a new polygon with the specified coordinates


                              var _polygon2 = new google.maps.Polyline({
                                path: _outputArray2,
                                strokeColor: _poly_color2,
                                strokeOpacity: 0.8,
                                strokeWeight: 5
                              });

                              var _me2 = 0; // Add the polygon to the map

                              _polygon2.setMap(_this4.map); // Add a click event listener to the polygon


                              if (clear) {
                                _polygon2.setMap(null);
                              } //clearTimeout(this.timerId);
                              // Save the original stroke color of the polygon


                              var _originalStrokeColor2 = _polygon2.get("strokeColor"); // Add a mouseover listener to change the stroke color to pink


                              _polygon2.addListener("mouseover", function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
                                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                                    while (1) {
                                      switch (_context14.prev = _context14.next) {
                                        case 0:
                                          _polygon2.setOptions({
                                            strokeColor: "pink"
                                          });

                                          this.current_roadid = this.Segments[i]["road_id"];
                                          this.show_info = true;
                                          this.latitude = _outputArray2[0]["lat"];
                                          this.longitude = _outputArray2[0]["lng"];
                                          this.getAddress();

                                        case 6:
                                        case "end":
                                          return _context14.stop();
                                      }
                                    }
                                  }, _callee14, this);
                                }));
                              }); // Add a mouseout listener to reset the stroke color to the original color


                              _polygon2.addListener("mouseout", function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                                    while (1) {
                                      switch (_context15.prev = _context15.next) {
                                        case 0:
                                          _polygon2.setOptions({
                                            strokeColor: _originalStrokeColor2
                                          });

                                          this.show_info = false;

                                        case 2:
                                        case "end":
                                          return _context15.stop();
                                      }
                                    }
                                  }, _callee15, this);
                                }));
                              });

                              _polygon2.addListener("click", function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                                    while (1) {
                                      switch (_context16.prev = _context16.next) {
                                        case 0:
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
                                          this.latitude = _outputArray2[0]["lat"];
                                          this.longitude = _outputArray2[0]["lng"];
                                          this.showMap = false;
                                          _context16.next = 17;
                                          return this.loadSegmentMedia(this.roadID);

                                        case 17:
                                        case "end":
                                          return _context16.stop();
                                      }
                                    }
                                  }, _callee16, this);
                                }));
                              });
                            }
                          }
                        }
                      };

                      for (i = 0; i < this.Segments.length; i++) {
                        _loop(i);
                      }

                    case 2:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "getAddress",
          value: function getAddress() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var _this5 = this;

              var location;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      location = {
                        lat: this.latitude,
                        lng: this.longitude
                      };
                      this.location_services.osm_geocode_latlng(location).subscribe(function (res) {
                        console.log(res);
                        _this5.displayname = res.display_name; // this.surburb = res.address.suburb;
                        // this.postalCode = res.address.postcode;
                        // this.city = res.address.city ? res.address.city : res.address.county;
                        // this.province = res.address.state;
                        // let name = `${res.address.road}, ${res.address.house_number}`;
                        //this.billboardForm.get('name').setValue(name)
                      });

                    case 2:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
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
            var _this6 = this;

            var file = event.target.files[0];
            var filepath = "road-inspection/" + this.roadID + "/".concat(file.name);
            this.isbusy = true; //this.progessStage = "Uploading...";

            this.showpercent = "Wait...";

            try {
              var task = this.storage.upload(filepath, file); // observe percentage changes

              this.uploadPercent = task.percentageChanges(); // get notified when the download URL is available

              task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
                  var _this7 = this;

                  return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          this.showpercent = "Processing...";
                          _context20.next = 3;
                          return this.storage.ref(filepath).getDownloadURL().forEach(function (res) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
                              var media_name;
                              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                                while (1) {
                                  switch (_context19.prev = _context19.next) {
                                    case 0:
                                      console.log(res);
                                      media_name = String(file.name);
                                      media_name = media_name.slice(0, media_name.indexOf("."));
                                      _context19.next = 5;
                                      return this.addSegmentMediaNow(this.roadID, media_name, this.uploadmedia, res);

                                    case 5:
                                      this.isbusy = false;

                                    case 6:
                                    case "end":
                                      return _context19.stop();
                                  }
                                }
                              }, _callee19, this);
                            }));
                          });

                        case 3:
                          this.downloadURL = _context20.sent;

                        case 4:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20, this);
                }));
              })).subscribe();
            } catch (error) {
              // handle the exception
              console.error(error);
              this.isbusy = false;
            } finally {}
          }
        }, {
          key: "gotoMap",
          value: function gotoMap(res) {
            if (res) {//this.loadDetails();
            }

            this.showMap = res;
          }
        }, {
          key: "addSegmentMediaNow",
          value: function addSegmentMediaNow(roadid, medianame, mediatype, mediaurl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              var now, year, month, day, hours, minutes, seconds, dt, segmentMedia;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
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
                      _context21.next = 11;
                      return this.db_m.create(segmentMedia);

                    case 11:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }]);

        return RiReportsComponent;
      }();

      RiReportsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_4__["Segments"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_4__["SegmentMedia"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _services_global_service__WEBPACK_IMPORTED_MODULE_11__["GlobalSettings"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"]
        }, {
          type: _services_geolocation_service__WEBPACK_IMPORTED_MODULE_8__["GeolocationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }];
      };

      RiReportsComponent.propDecorators = {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["fileInput"]
        }]
      };
      RiReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-ri-reports",
        template: _raw_loader_ri_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ri_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RiReportsComponent);
      /***/
    },

    /***/
    "MUKn":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ri-reports/ri-reports.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MUKn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #cont>\n  <div\n    class=\"container-fluid page-body-wrapper\"\n    style=\"min-height: 100%; padding-top: 0%\"\n  >\n    <div class=\"main-panel-only w-100\">\n      <div class=\"page-header\">\n        <div *ngIf=\"show_cond_done\" class=\"col-md-6\">\n          <h3 class=\"page-title\">Segments Found [{{ Segments.length }}]</h3>\n        </div>\n        <div *ngIf=\"show_info\" class=\"col-md-6 info\">\n          Segment ID:&nbsp;&nbsp;{{ current_roadid }}\n          <div>Address:&nbsp;&nbsp;{{ displayname }}</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"SURFACE_TYPE\">SURFACE TYPE </label>\n        <ion-select\n          (ionChange)=\"change_st($event)\"\n          multiple=\"true\"\n          class=\"form-control\"\n          value=\"select\"\n          okText=\"Okay\"\n          cancelText=\"Dismiss\"\n          id=\"SURFACE_TYPE\"\n        >\n          <ion-select-option value=\"block\">BLOCK</ion-select-option>\n          <ion-select-option value=\"flexible\">FLEXIBLE</ion-select-option>\n          <ion-select-option value=\"gravel\">GRAVEL</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div *ngIf=\"show_cond\" class=\"form-group\">\n        <label for=\"SURFACE_STATUS\">SURFACE CONDITION/STATUS </label>\n        <ion-select\n          (ionChange)=\"change_sc($event)\"\n          class=\"form-control\"\n          multiple=\"true\"\n          value=\"select\"\n          okText=\"Okay\"\n          cancelText=\"Dismiss\"\n          id=\"SURFACE_STATUS\"\n        >\n          <ion-select-option value=\"notassessed\"\n            >NOT ASSESSED</ion-select-option\n          >\n          <ion-select-option value=\"assessed\">ASSESSED</ion-select-option>\n          <ion-select-option value=\"vpoor\">VERY POOR</ion-select-option>\n          <ion-select-option value=\"poor\">POOR</ion-select-option>\n          <ion-select-option value=\"fair\">FAIR</ion-select-option>\n          <ion-select-option value=\"good\">GOOD</ion-select-option>\n          <ion-select-option value=\"vgood\">VERY GOOD</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div class=\"row\">\n        <!--MAP-->\n        <div class=\"col-md-12 grid-margin\">\n          <div class=\"card\" id=\"map_canvas_segments\" style=\"height: 85vh\"></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- main-panel ends -->\n  </div>\n  <!-- page-body-wrapper ends -->\n</ion-content>\n";
      /***/
    },

    /***/
    "duqi":
    /*!************************************************************!*\
      !*** ./src/app/pages/ri-reports/ri-reports.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function duqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: black;\n}\n\n.text-color {\n  color: white !important;\n}\n\n.road-id {\n  font-weight: bold;\n  color: yellow;\n}\n\n.hide {\n  display: none;\n}\n\n.slide-title {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 12px;\n  z-index: 1;\n  text-transform: uppercase;\n}\n\nimg {\n  border-left: 1px solid #ccc;\n}\n\n.info {\n  color: #fff !important;\n  font-size: 12px;\n}\n\nlabel {\n  color: beige;\n}\n\n.title {\n  margin-bottom: 10px;\n  color: yellow;\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.test {\n  color: #ff00aa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmktcmVwb3J0cy9yaS1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFHRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JpLXJlcG9ydHMvcmktcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLnJvYWQtaWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHllbGxvdztcbn1cbi8vIC5wcm9ncmVzcyB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2xpZGUtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgei1pbmRleDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbmltZyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbmZvIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxubGFiZWwge1xuICBjb2xvcjogYmVpZ2U7XG59XG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogeWVsbG93O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRlc3Qge1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMTcwKTtcbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-ri-reports-ri-reports-module-es5.js.map