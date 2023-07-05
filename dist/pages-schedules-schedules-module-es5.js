(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-schedules-schedules-module"], {
    /***/
    "CdFH":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedules/schedules.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CdFH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- cards -->\n<div class=\"row\">\n\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_schedule()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-calendar\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add Schedule\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <ion-list>\n                            <ion-item *ngFor=\"let item of Scheds\">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col (click)=\"view_call(item.call_type, item.call_url)\" class=\"title\" size=\"4\">\n                                            {{item.name}}\n                                        </ion-col>\n                                        <ion-col size=\"4\">\n                                            <span>Schedule is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                           \n                                        </ion-col>\n           \n                                        <ion-col size=\"4\">\n                                            <ion-button (click)=\"presentConfirm(item)\" color=\"danger\" fill=\"solid\">Remove</ion-button>\n                                        </ion-col>\n                         \n                                    </ion-row>\n                                </ion-grid>\n     \n                            </ion-item>\n                        </ion-list>\n      \n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div>\n                    <!-- <iframe width=\"100%\" height=\"300\" [src]=\"call_url\"></iframe> -->\n                </div>\n         \n                </div>\n            </div>\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "OjhM":
    /*!********************************************************!*\
      !*** ./src/app/pages/schedules/schedules.component.ts ***!
      \********************************************************/

    /*! exports provided: SchedulesComponent */

    /***/
    function OjhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulesComponent", function () {
        return SchedulesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_schedules_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./schedules.component.html */
      "CdFH");
      /* harmony import */


      var _schedules_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./schedules.component.scss */
      "bvae");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pages/add-schedule/add-schedule.component */
      "X4bS");
      /* harmony import */


      var _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/db/db.addschedule */
      "yxZw");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SchedulesComponent = /*#__PURE__*/function () {
        function SchedulesComponent(modalController, db, sanitizer, alertCtrl) {
          _classCallCheck(this, SchedulesComponent);

          this.modalController = modalController;
          this.db = db;
          this.sanitizer = sanitizer;
          this.alertCtrl = alertCtrl;
          this.ctype = '';
        }

        _createClass(SchedulesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.Schedule.subscribe(function (val) {
              _this.Scheds = val; //console.log('Content', this.Cont);
            });
            var user_id = localStorage.getItem('user_id');
            this.db.getSchedules(user_id);
          }
        }, {
          key: "view_call",
          value: function view_call(type, url) {
            this.call_url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            this.ctype = type;
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.alertCtrl.create({
                        header: 'Confirm Action',
                        subHeader: 'Delete Schedule',
                        message: 'Are you sure you want to delete this item?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this2.db["delete"](item.id);
                          }
                        }]
                      }).then(function (res) {
                        res.present();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "add_schedule",
          value: function add_schedule() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _pages_add_schedule_add_schedule_component__WEBPACK_IMPORTED_MODULE_4__["AddScheduleComponent"],
                        cssClass: 'modal-full',
                        componentProps: {
                          title: 'Add Schedule'
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return SchedulesComponent;
      }();

      SchedulesComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      SchedulesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-schedules',
        template: _raw_loader_schedules_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_schedules_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SchedulesComponent);
      /***/
    },

    /***/
    "RmXT":
    /*!****************************************************************!*\
      !*** ./src/app/pages/add-schedule/add-schedule.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function RmXT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "label {\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.form-control {\n  background-color: #292f37;\n  color: aliceblue;\n}\n\nion-select {\n  background-color: #292f37;\n}\n\n.box {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXNjaGVkdWxlL2FkZC1zY2hlZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1zY2hlZHVsZS9hZGQtc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJmMzc7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJmMzc7XG59XG5cbi5ib3h7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "TzIm":
    /*!*****************************************************!*\
      !*** ./src/app/pages/schedules/schedules.module.ts ***!
      \*****************************************************/

    /*! exports provided: SchedulesModule */

    /***/
    function TzIm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchedulesModule", function () {
        return SchedulesModule;
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


      var _schedules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./schedules.component */
      "OjhM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _schedules_component__WEBPACK_IMPORTED_MODULE_3__["SchedulesComponent"]
      }];

      var SchedulesModule = /*#__PURE__*/_createClass(function SchedulesModule() {
        _classCallCheck(this, SchedulesModule);
      });

      SchedulesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_schedules_component__WEBPACK_IMPORTED_MODULE_3__["SchedulesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], SchedulesModule);
      /***/
    },

    /***/
    "X4bS":
    /*!**************************************************************!*\
      !*** ./src/app/pages/add-schedule/add-schedule.component.ts ***!
      \**************************************************************/

    /*! exports provided: AddScheduleComponent */

    /***/
    function X4bS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddScheduleComponent", function () {
        return AddScheduleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-schedule.component.html */
      "tHvK");
      /* harmony import */


      var _add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-schedule.component.scss */
      "RmXT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/db/db.addschedule */
      "yxZw");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AddScheduleComponent = /*#__PURE__*/function () {
        function AddScheduleComponent(modalController, fb, db, loadingCtrl) {
          _classCallCheck(this, AddScheduleComponent);

          this.modalController = modalController;
          this.fb = fb;
          this.db = db;
          this.loadingCtrl = loadingCtrl;
          this.isLoading = true;
        }

        _createClass(AddScheduleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var loading, _user_id, addschedule;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.name.nativeElement.value) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      _context3.next = 4;
                      return this.loadingCtrl.create({
                        message: 'please wait ...'
                      });

                    case 4:
                      loading = _context3.sent;
                      loading.present();
                      this.schedule_name = this.name.nativeElement.value;
                      _user_id = localStorage.getItem("user_id");
                      addschedule = {
                        user_id: _user_id,
                        name: this.schedule_name,
                        enabled: true
                      };
                      console.log('Addschedule', addschedule);
                      _context3.next = 12;
                      return this.db.create(addschedule);

                    case 12:
                      loading.dismiss(); //this.db.getAll();

                      this.dismiss();

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AddScheduleComponent;
      }();

      AddScheduleComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_db_db_addschedule__WEBPACK_IMPORTED_MODULE_5__["Schedule"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }];
      };

      AddScheduleComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['title']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['name']
        }]
      };
      AddScheduleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-schedule',
        template: _raw_loader_add_schedule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_schedule_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddScheduleComponent);
      /***/
    },

    /***/
    "bvae":
    /*!**********************************************************!*\
      !*** ./src/app/pages/schedules/schedules.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function bvae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label, ion-item, ion-list {\n  --ion-item-background: #292f37 !important;\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.green {\n  color: green;\n  font-weight: bold;\n}\n\n.red {\n  color: red;\n  font-weight: bold;\n}\n\n.title {\n  cursor: pointer;\n}\n\n.title:active {\n  color: greenyellow;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGVzL3NjaGVkdWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWxhYmVsLCBpb24taXRlbSwgaW9uLWxpc3R7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMjkyZjM3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZ3JlZW57XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJlZHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGl0bGV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRpdGxlOmFjdGl2ZXtcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
      /***/
    },

    /***/
    "tHvK":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-schedule/add-schedule.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tHvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"container-scroller\">\n    <div class=\"container-fluid page-body-wrapper\" style=\"min-height: 100%;padding-top: 0%;\">\n      <div class=\"main-panel-only w-100\">\n        <div class=\"content-wrapper h-100\">\n          <div contentAnimate class=\"h-100\">\n\n            <div class=\"row\">\n\n              <div class=\"col-md-12 grid-margin stretch-card\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{title}}</h4>\n    \n                      <div class=\"form-group\">\n                        <label for=\"name\">Schedule Name</label>\n                        <input type=\"text\" class=\"form-control\" #name\n                          placeholder=\"Schedule Name\">\n                      </div>\n\n                      <button type=\"submit\" class=\"btn btn-gradient-info mr-2\" (click)=\"submit()\">Submit</button>\n                      <button class=\"btn btn-light\" (click)=\"dismiss()\">Cancel</button>\n        \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- partial -->\n      </div>\n      <!-- main-panel ends -->\n    </div>\n    <!-- page-body-wrapper ends -->\n  </ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-schedules-schedules-module-es5.js.map