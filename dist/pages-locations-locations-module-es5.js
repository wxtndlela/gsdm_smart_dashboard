(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-locations-locations-module"], {
    /***/
    "8fBi":
    /*!**********************************************************!*\
      !*** ./src/app/pages/locations/locations.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function fBi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table {\n  font-size: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2NhdGlvbnMvbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xuICAgIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "K/qq":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/locations/locations.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- header -->\n<div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Media Distribution Points (MDPs) [{{Billboard.length}}]\n    </h3>\n</div>\n\n<!-- cards -->\n<div class=\"row\">\n    <!-- <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-file-document\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add landlord\n                </h6>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_billboard()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-account-plus\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add MDP\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <!-- <div class=\"col-sm-4\">\n                            <h4 class=\"card-title\">Locations ({{Billboard.length}})</h4>\n                        </div> -->\n                        <div class=\"col-sm-4\">\n\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <a style=\"width: 100%;\" class=\" btn btn-info ml-auto\">Export</a>\n                        </div>\n                    </div>\n                    <br>\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <div *ngFor=\"let item of Billboard\">\n                            <div class=\"d-flex\">\n                                <div class=\"d-flex align-items-center mr-4 text-muted font-weight-light\">\n                                    <i class=\"mdi mdi mdi-map-marker icon-sm mr-2\"></i>\n                                    <span>{{item.name}}</span>\n                                </div>\n                            </div>\n\n\n\n                            <div class=\"row mt-3\">\n                                <div class=\"col-md-6 pr-1\">\n                                    <img style=\"height: 20vh;object-fit: cover;\" src=\"{{item.photo_url}}\"\n                                        class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                                    <br>\n                                    <div class=\"row\">\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-motorbike icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-car icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <i class=\"mdi mdi mdi-truck icon-sm mr-2\"></i>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-4\">\n                                            <div style=\"text-align: center;\"\n                                                class=\"align-items-center mr-4 text-muted font-weight-light\">\n                                                <span style=\"font-size: small;\">0</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                </div>\n\n                                <div class=\"col-md-6 pl-1\">\n                                    <div class=\"table-responsive\" style=\"max-height: max-content;\">\n                                        <table class=\"table\">\n                                            <thead>\n                                                <tr>\n                                                    <td>\n                                                        Dimension\n                                                    </td>\n                                                    <td>\n                                                        {{item.screen_width}} X {{item.screen_height}}\n                                                    </td>\n                                                </tr>\n                                            </thead>\n\n                                            <tbody>\n\n\n                                                <tr>\n                                                    <td>\n                                                        Orientation\n                                                    </td>\n                                                    <td>\n                                                        {{item.orientation}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        LSM\n                                                    </td>\n                                                    <td>\n                                                        6 X 9\n                                                    </td>\n                                                </tr>\n\n\n                                                <tr>\n                                                    <td>\n                                                        Peak Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.peak_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        O/Peak Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.offpeak_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        Special Rate\n                                                    </td>\n                                                    <td>\n                                                        ZAR{{item.special_rate}} (P/Hour)\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        MDP Type\n                                                    </td>\n                                                    <td>\n                                                        {{item.mdptype}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td>\n                                                        MDP Location\n                                                    </td>\n                                                    <td>\n                                                        {{item.mdplocation}}\n                                                    </td>\n                                                </tr>\n\n                                                <tr>\n                                                    <td></td>\n                                                    <td>\n                                                    </td>\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n                                    </div>\n\n                                </div>\n                        \n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col size=\"6\" (click)=\"edit_billboard(item)\"><ion-button size=\"default\" expand=\"full\">Edit</ion-button></ion-col>\n                                        <ion-col size=\"6\" (click)=\"presentConfirm(item)\"><ion-button size=\"default\" expand=\"full\" color=\"danger\">Remove</ion-button></ion-col>\n                                        \n                                    </ion-row>\n                                    \n                                </ion-grid>>\n                                <br>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-4\" (click)=\"change_style('DarkMap')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/dark-map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                    <div class=\"col-4 \" (click)=\"change_style('hybrid')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/Satellite-map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                    <div class=\"col-4 \" (click)=\"change_style('2DMap')\">\n                        <img style=\"height: 50px;object-fit: cover;\" src=\"assets/images/maps/2D-Map.png\"\n                            class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n                    </div>\n                </div>\n                <div style=\"height: 50vh;\" id=\"map_canvas_locations\">\n                </div>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "hNKy":
    /*!********************************************************!*\
      !*** ./src/app/pages/locations/locations.component.ts ***!
      \********************************************************/

    /*! exports provided: LocationsComponent */

    /***/
    function hNKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationsComponent", function () {
        return LocationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./locations.component.html */
      "K/qq");
      /* harmony import */


      var _locations_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./locations.component.scss */
      "8fBi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/billboard/billboard.component */
      "wNKH");
      /* harmony import */


      var _services_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/db */
      "6BIP");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LocationsComponent = /*#__PURE__*/function () {
        function LocationsComponent(modalController, db, alertCtrl) {
          _classCallCheck(this, LocationsComponent);

          this.modalController = modalController;
          this.db = db;
          this.alertCtrl = alertCtrl;
          this.Markers = [];
        }

        _createClass(LocationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.load_map();
            this.db.Billboards.subscribe(function (val) {
              _this.Billboard = val; //console.log('Billboards', this.Billboard);

              _this.plot_markers();
            });
          }
          /**
           * load_map
           */

        }, {
          key: "load_map",
          value: function load_map() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
          /**
           * set_styles
           */

        }, {
          key: "set_map_styles",
          value: function set_map_styles() {//Associate the styled map with the MapTypeId and set it to display.
            // this.map.mapTypes.set("RetroMap", map_style.RetroMapStyle);
            // this.map.mapTypes.set("DarkMap", map_style.DarkMapStyle);
            // this.map.mapTypes.set("2DMap", map_style.StandardMapStyle);
          }
          /**
           * change_style
           */

        }, {
          key: "change_style",
          value: function change_style(mapStyle) {// this.map.setMapTypeId(mapStyle)
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.alertCtrl.create({
                        header: "Confirm Action",
                        subHeader: "Delete MDP",
                        message: "Are you sure you want to delete this item?",
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          handler: function handler() {
                            console.log("Cancel clicked");
                          }
                        }, {
                          text: "Delete",
                          handler: function handler() {
                            _this2.db["delete"](item.id);
                          }
                        }]
                      }).then(function (res) {
                        res.present();
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "add_billboard",
          value: function add_billboard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__["BillboardComponent"],
                        cssClass: "modal-full",
                        componentProps: {
                          title: "Add MDP"
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
          key: "edit_billboard",
          value: function edit_billboard(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _shared_billboard_billboard_component__WEBPACK_IMPORTED_MODULE_4__["BillboardComponent"],
                        cssClass: "modal-full",
                        componentProps: {
                          title: "Edit Location",
                          data: data,
                          data_id: data.id
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "plot_markers",
          value: function plot_markers() {
            this.clear_map();

            for (var index = 0; index < this.Billboard.length; index++) {
              var b = this.Billboard[index];
              var location = {
                lat: Number(b.latitude),
                lng: Number(b.longitude)
              };
              this.add_marker(location, b.photo_url);
            }
          }
        }, {
          key: "clear_map",
          value: function clear_map() {// if (this.Markers && this.Markers.length > 0) {
            //   for (let index = 0; index < this.Markers.length; index++) {
            //     let marker: google.maps.Marker = this.Markers[index];
            //     marker.setMap(null);
            //   }
            // }
          }
        }, {
          key: "add_marker",
          value: function add_marker(location, photo_url) {// var icon;
            // icon = {
            //   url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            //   strokeColor: "white"
            // }
            // let marker = new google.maps.Marker({
            //   position: location,
            //   map: this.map,
            //   icon: icon
            // });
            // marker.addListener("click", () => {
            //   this.open_info_windows(photo_url, marker);
            // });
            // this.Markers.push(marker);
          }
          /**
           * open_info_windows
           */

        }, {
          key: "open_info_windows",
          value: function open_info_windows(image, marker) {
            // if (infowindow) {
            //   infowindow.close();
            // }
            var contentString = "\n      <div>\n  <div >\n    <div>\n      <img\n        src=\"https://www.billboardfinder.co.za/wp-content/uploads/2020/11/William-Nicol-Road-Fourways-Johannesburg4-350x233.jpg\"\n        class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\n    </div>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n\n        <tbody>\n          <tr>\n            <td>Location</td>\n            <td>Sunninghil</td>\n          </tr>\n          <tr>\n            <td>Dimensions</td>\n            <td>3 x 6</td>\n          </tr>\n          <tr>\n            <td>Impressions</td>\n            <td>53275533 </td>\n          </tr>\n          <tr>\n            <td>Rate</td>\n            <td>R55 094 pm</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n     "; // var infowindow = new google.maps.InfoWindow({
            //   content: contentString
            // });
            // infowindow.open(this.map, marker);
          }
        }]);

        return LocationsComponent;
      }();

      LocationsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_db__WEBPACK_IMPORTED_MODULE_5__["Billboards"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      LocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-locations",
        template: _raw_loader_locations_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_locations_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocationsComponent);
      /***/
    },

    /***/
    "tsj7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/locations/locations.module.ts ***!
      \*****************************************************/

    /*! exports provided: LocationsModule */

    /***/
    function tsj7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationsModule", function () {
        return LocationsModule;
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


      var _locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./locations.component */
      "hNKy");

      var routes = [{
        path: '',
        component: _locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"]
      }];

      var LocationsModule = /*#__PURE__*/_createClass(function LocationsModule() {
        _classCallCheck(this, LocationsModule);
      });

      LocationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], LocationsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-locations-locations-module-es5.js.map