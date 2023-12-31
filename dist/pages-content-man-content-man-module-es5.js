(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-man-content-man-module"], {
    /***/
    "AtBN":
    /*!**************************************************************!*\
      !*** ./src/app/pages/content-man/content-man.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function AtBN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label, ion-item, ion-list {\n  --ion-item-background: #292f37 !important;\n  color: aliceblue;\n  font-size: 12px;\n}\n\n.green {\n  color: green;\n  font-weight: bold;\n}\n\n.red {\n  color: red;\n  font-weight: bold;\n}\n\n.title {\n  cursor: pointer;\n}\n\n.title:active {\n  color: greenyellow;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1tYW4vY29udGVudC1tYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtbWFuL2NvbnRlbnQtbWFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tbGFiZWwsIGlvbi1pdGVtLCBpb24tbGlzdHtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMyOTJmMzcgIWltcG9ydGFudDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5ncmVlbntcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmVke1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aXRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGl0bGU6YWN0aXZle1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "V5q9":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/content-man/content-man.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V5q9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- header -->\n<!-- <div class=\"page-header\">\n    <h3 class=\"page-title\">\n        Content [{{Billboard.length}}]\n    </h3>\n</div> -->\n\n<!-- cards -->\n<div class=\"row\">\n    <!-- <div class=\"col-md-3 stretch-card grid-margin\">\n        <div class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-file-document\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add landlord\n                </h6>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"col-md-3 stretch-card grid-margin\">\n        <div (click)=\"add_content()\" class=\"card bg-gradient-dark card-img-holder text-white\">\n            <div class=\"card-body \">\n                <i class=\"mdi mdi-camera-iris\n                mdi-24px float-left\"></i>\n            </div>\n            <div class=\"card-body \">\n                <h6 class=\"card-text\">Add Content\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- table -->\n<div class=\"row grid-margin\">\n\n    <!-- table -->\n    <div class=\"col-md-6 stretch-card grid-margin\">\n\n        <div class=\"card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n\n                    <div style=\"height: 50vh;overflow-y:scroll;overflow-x: hidden;\">\n                        <ion-list>\n                            <ion-item *ngFor=\"let item of Cont\">\n                                <ion-grid>\n                                    <ion-row>\n                                        <ion-col (click)=\"view_content(item.content_type, item.content_url)\" class=\"title\" size=\"3\">\n                                            {{item.name}}\n                                        </ion-col>\n                                        <ion-col size=\"3\">\n                                            <span *ngIf=\"item.content_type=='img'\">Image is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                            <span *ngIf=\"item.content_type=='vid'\">Video is \n                                                <span>\n                                                    <span class=\"green\" *ngIf=\"item.enabled\">Enabled</span>\n                                                    <span class=\"red\" *ngIf=\"!item.enabled\">Disabled</span>\n                                                </span>\n                                            </span>\n                                        </ion-col>\n           \n                                        <ion-col size=\"2\">\n                                            <span class=\"green\" *ngIf=\"item.approved\">Approved</span>\n                                            <span class=\"red\" *ngIf=\"!item.approved\">Not Approved</span>\n                                        </ion-col>\n                                        <ion-col size=\"4\">\n                                            <ion-button (click)=\"presentConfirm(item)\" color=\"danger\" fill=\"solid\">Remove</ion-button>\n                                        </ion-col>\n                         \n                                    </ion-row>\n                                </ion-grid>\n     \n                            </ion-item>\n                        </ion-list>\n      \n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n    <!-- map -->\n\n\n    <div class=\"col-md-6 stretch-card grid-margin\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div>\n                    <vg-player (onPlayerReady)=\"onPlayerReady($event)\" *ngIf=\"ctype=='vid'\">\n                        <video #media id=\"singleVideo\" preload=\"auto\" autoplay controls width=\"100%\">\n                            <source [src]=content_url type=\"video/mp4\">\n                        </video>\n                    </vg-player>\n                    <img *ngIf=\"ctype=='img'\" class=\"image\" [src]=\"content_url\" width=\"100%\"/>\n                </div>\n         \n                </div>\n            </div>\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "eEsy":
    /*!************************************************************!*\
      !*** ./src/app/pages/content-man/content-man.component.ts ***!
      \************************************************************/

    /*! exports provided: ContentManComponent */

    /***/
    function eEsy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentManComponent", function () {
        return ContentManComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_content_man_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./content-man.component.html */
      "V5q9");
      /* harmony import */


      var _content_man_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./content-man.component.scss */
      "AtBN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_add_content_add_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pages/add-content/add-content.component */
      "Q0he");
      /* harmony import */


      var _services_db_db_addcontent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/db/db.addcontent */
      "7j0M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ContentManComponent = /*#__PURE__*/function () {
        function ContentManComponent(modalController, db, alertCtrl) {
          _classCallCheck(this, ContentManComponent);

          this.modalController = modalController;
          this.db = db;
          this.alertCtrl = alertCtrl;
          this.ctype = '';
        }

        _createClass(ContentManComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.db.Content.subscribe(function (val) {
              _this.Cont = val; //console.log('Content', this.Cont);
            });
            var user_id = localStorage.getItem('user_id');
            this.db.getContent(user_id);
          }
        }, {
          key: "view_content",
          value: function view_content(type, url) {
            var _this2 = this;

            this.ctype = '';
            this.content_url = '';
            var timer = setTimeout(function () {
              _this2.ctype = type;
              _this2.content_url = url;
            }, 500);
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.alertCtrl.create({
                        header: 'Confirm Action',
                        subHeader: 'Delete Content',
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
                            _this3.db["delete"](item.id);
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
          key: "add_content",
          value: function add_content() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _pages_add_content_add_content_component__WEBPACK_IMPORTED_MODULE_4__["AddContentComponent"],
                        cssClass: 'modal-full',
                        componentProps: {
                          title: 'Add Content'
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

        return ContentManComponent;
      }();

      ContentManComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_db_db_addcontent__WEBPACK_IMPORTED_MODULE_5__["Content"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      ContentManComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-content-man',
        template: _raw_loader_content_man_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_content_man_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContentManComponent);
      /***/
    },

    /***/
    "k72P":
    /*!*********************************************************!*\
      !*** ./src/app/pages/content-man/content-man.module.ts ***!
      \*********************************************************/

    /*! exports provided: ContentManModule */

    /***/
    function k72P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentManModule", function () {
        return ContentManModule;
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


      var _content_man_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./content-man.component */
      "eEsy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        component: _content_man_component__WEBPACK_IMPORTED_MODULE_3__["ContentManComponent"]
      }];

      var ContentManModule = /*#__PURE__*/_createClass(function ContentManModule() {
        _classCallCheck(this, ContentManModule);
      });

      ContentManModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_content_man_component__WEBPACK_IMPORTED_MODULE_3__["ContentManComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], ContentManModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-content-man-content-man-module-es5.js.map