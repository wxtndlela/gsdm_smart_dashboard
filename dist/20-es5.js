(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
    /***/
    "TvZU":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ion-modal.entry.js ***!
      \**************************************************************/

    /*! exports provided: ion_modal */

    /***/
    function TvZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ion_modal", function () {
        return Modal;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-63a97a32.js */
      "E/Mt");
      /* harmony import */


      var _framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./framework-delegate-94e770cc.js */
      "spDm");
      /* harmony import */


      var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./overlays-a62f858b.js */
      "f9PN");
      /* harmony import */


      var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./theme-ff3fc52f.js */
      "74mu");
      /* harmony import */


      var _index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./index-a7711c1e.js */
      "qb1Q");
      /* harmony import */


      var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./animation-822d986b.js */
      "Kfhc");
      /* harmony import */


      var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./cubic-bezier-eea9a7a9.js */
      "bC4P");
      /* harmony import */


      var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./index-34cb2743.js */
      "KF81");
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "W6o/");
      /* harmony import */


      var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./hardware-back-button-4a6b37fb.js */
      "B4Jq");
      /* harmony import */


      var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./gesture-controller-31cb6bb9.js */
      "y08P"); // Defaults for the card swipe animation


      var SwipeToCloseDefaults = {
        MIN_PRESENTING_SCALE: 0.93
      };

      var createSwipeToCloseGesture = function createSwipeToCloseGesture(el, animation, onDismiss) {
        var height = el.offsetHeight;
        var isOpen = false;

        var canStart = function canStart(detail) {
          var target = detail.event.target;

          if (target === null || !target.closest) {
            return true;
          }

          var contentOrFooter = target.closest('ion-content, ion-footer');

          if (contentOrFooter === null) {
            return true;
          } // Target is in the content or the footer so do not start the gesture.
          // We could be more nuanced here and allow it for content that
          // does not need to scroll.


          return false;
        };

        var onStart = function onStart() {
          animation.progressStart(true, isOpen ? 1 : 0);
        };

        var onMove = function onMove(detail) {
          var step = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(0.0001, detail.deltaY / height, 0.9999);
          animation.progressStep(step);
        };

        var onEnd = function onEnd(detail) {
          var velocity = detail.velocityY;
          var step = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(0.0001, detail.deltaY / height, 0.9999);
          var threshold = (detail.deltaY + velocity * 1000) / height;
          var shouldComplete = threshold >= 0.5;
          var newStepValue = shouldComplete ? -0.001 : 0.001;

          if (!shouldComplete) {
            animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
          } else {
            animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
            newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
          }

          var duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
          isOpen = shouldComplete;
          gesture.enable(false);
          animation.onFinish(function () {
            if (!shouldComplete) {
              gesture.enable(true);
            }
          }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);

          if (shouldComplete) {
            onDismiss();
          }
        };

        var gesture = Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_8__["createGesture"])({
          el: el,
          gestureName: 'modalSwipeToClose',
          gesturePriority: 40,
          direction: 'y',
          threshold: 10,
          canStart: canStart,
          onStart: onStart,
          onMove: onMove,
          onEnd: onEnd
        });
        return gesture;
      };

      var computeDuration = function computeDuration(remaining, velocity) {
        return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(400, remaining / Math.abs(velocity * 1.1), 500);
      };
      /**
       * iOS Modal Enter Animation for the Card presentation style
       */


      var iosEnterAnimation = function iosEnterAnimation(baseEl, presentingEl) {
        var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
          'pointer-events': 'none'
        }).afterClearStyles(['pointer-events']);
        var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
          'opacity': 1
        }).fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
        var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(500).addAnimation(wrapperAnimation);

        if (presentingEl) {
          var isMobile = window.innerWidth < 768;
          var hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
          var presentingAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().beforeStyles({
            'transform': 'translateY(0)',
            'transform-origin': 'top center',
            'overflow': 'hidden'
          });
          var bodyEl = document.body;

          if (isMobile) {
            /**
             * Fallback for browsers that does not support `max()` (ex: Firefox)
             * No need to worry about statusbar padding since engines like Gecko
             * are not used as the engine for standlone Cordova/Capacitor apps
             */
            var transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            var modalTransform = hasCardModal ? '-10px' : transformOffset;
            var toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            var finalTransform = "translateY(".concat(modalTransform, ") scale(").concat(toPresentingScale, ")");
            presentingAnimation.afterStyles({
              'transform': finalTransform
            }).beforeAddWrite(function () {
              return bodyEl.style.setProperty('background-color', 'black');
            }).addElement(presentingEl).keyframes([{
              offset: 0,
              filter: 'contrast(1)',
              transform: 'translateY(0px) scale(1)',
              borderRadius: '0px'
            }, {
              offset: 1,
              filter: 'contrast(0.85)',
              transform: finalTransform,
              borderRadius: '10px 10px 0 0'
            }]);
            baseAnimation.addAnimation(presentingAnimation);
          } else {
            baseAnimation.addAnimation(backdropAnimation);

            if (!hasCardModal) {
              wrapperAnimation.fromTo('opacity', '0', '1');
            } else {
              var _toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;

              var _finalTransform = "translateY(-10px) scale(".concat(_toPresentingScale, ")");

              presentingAnimation.afterStyles({
                'transform': _finalTransform
              }).addElement(presentingEl.querySelector('.modal-wrapper')).keyframes([{
                offset: 0,
                filter: 'contrast(1)',
                transform: 'translateY(0) scale(1)'
              }, {
                offset: 1,
                filter: 'contrast(0.85)',
                transform: _finalTransform
              }]);
              var shadowAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().afterStyles({
                'transform': _finalTransform
              }).addElement(presentingEl.querySelector('.modal-shadow')).keyframes([{
                offset: 0,
                opacity: '1',
                transform: 'translateY(0) scale(1)'
              }, {
                offset: 1,
                opacity: '0',
                transform: _finalTransform
              }]);
              baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
          }
        } else {
          baseAnimation.addAnimation(backdropAnimation);
        }

        return baseAnimation;
      };
      /**
       * iOS Modal Leave Animation
       */


      var iosLeaveAnimation = function iosLeaveAnimation(baseEl, presentingEl) {
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
        var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
        var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
          'opacity': 1
        }).fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
        var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(duration).addAnimation(wrapperAnimation);

        if (presentingEl) {
          var isMobile = window.innerWidth < 768;
          var hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
          var presentingAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().beforeClearStyles(['transform']).afterClearStyles(['transform']).onFinish(function (currentStep) {
            // only reset background color if this is the last card-style modal
            if (currentStep !== 1) {
              return;
            }

            presentingEl.style.setProperty('overflow', '');
            var numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(function (m) {
              return m.presentingElement !== undefined;
            }).length;

            if (numModals <= 1) {
              bodyEl.style.setProperty('background-color', '');
            }
          });
          var bodyEl = document.body;

          if (isMobile) {
            var transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
            var modalTransform = hasCardModal ? '-10px' : transformOffset;
            var toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
            var finalTransform = "translateY(".concat(modalTransform, ") scale(").concat(toPresentingScale, ")");
            presentingAnimation.addElement(presentingEl).keyframes([{
              offset: 0,
              filter: 'contrast(0.85)',
              transform: finalTransform,
              borderRadius: '10px 10px 0 0'
            }, {
              offset: 1,
              filter: 'contrast(1)',
              transform: 'translateY(0px) scale(1)',
              borderRadius: '0px'
            }]);
            baseAnimation.addAnimation(presentingAnimation);
          } else {
            baseAnimation.addAnimation(backdropAnimation);

            if (!hasCardModal) {
              wrapperAnimation.fromTo('opacity', '1', '0');
            } else {
              var _toPresentingScale2 = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;

              var _finalTransform2 = "translateY(-10px) scale(".concat(_toPresentingScale2, ")");

              presentingAnimation.addElement(presentingEl.querySelector('.modal-wrapper')).afterStyles({
                'transform': 'translate3d(0, 0, 0)'
              }).keyframes([{
                offset: 0,
                filter: 'contrast(0.85)',
                transform: _finalTransform2
              }, {
                offset: 1,
                filter: 'contrast(1)',
                transform: 'translateY(0) scale(1)'
              }]);
              var shadowAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(presentingEl.querySelector('.modal-shadow')).afterStyles({
                'transform': 'translateY(0) scale(1)'
              }).keyframes([{
                offset: 0,
                opacity: '0',
                transform: _finalTransform2
              }, {
                offset: 1,
                opacity: '1',
                transform: 'translateY(0) scale(1)'
              }]);
              baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
            }
          }
        } else {
          baseAnimation.addAnimation(backdropAnimation);
        }

        return baseAnimation;
      };
      /**
       * Md Modal Enter Animation
       */


      var mdEnterAnimation = function mdEnterAnimation(baseEl) {
        var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
          'pointer-events': 'none'
        }).afterClearStyles(['pointer-events']);
        wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
          offset: 0,
          opacity: 0.01,
          transform: 'translateY(40px)'
        }, {
          offset: 1,
          opacity: 1,
          transform: 'translateY(0px)'
        }]);
        return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
      };
      /**
       * Md Modal Leave Animation
       */


      var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
        var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
        var wrapperEl = baseEl.querySelector('.modal-wrapper');
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
        wrapperAnimation.addElement(wrapperEl).keyframes([{
          offset: 0,
          opacity: 0.99,
          transform: 'translateY(0px)'
        }, {
          offset: 1,
          opacity: 0,
          transform: 'translateY(40px)'
        }]);
        return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
      };

      var modalIosCss = ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";
      var modalMdCss = ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";

      var Modal = /*#__PURE__*/function () {
        function Modal(hostRef) {
          var _this = this;

          _classCallCheck(this, Modal);

          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidPresent", 7);
          this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillPresent", 7);
          this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillDismiss", 7);
          this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidDismiss", 7); // Whether or not modal is being dismissed via gesture

          this.gestureAnimationDismissing = false;
          this.presented = false;
          /**
           * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
           */

          this.keyboardClose = true;
          /**
           * If `true`, the modal will be dismissed when the backdrop is clicked.
           */

          this.backdropDismiss = true;
          /**
           * If `true`, a backdrop will be displayed behind the modal.
           */

          this.showBackdrop = true;
          /**
           * If `true`, the modal will animate.
           */

          this.animated = true;
          /**
           * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
           */

          this.swipeToClose = false;

          this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
          };

          this.onDismiss = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            _this.dismiss();
          };

          this.onLifecycle = function (modalEvent) {
            var el = _this.usersElement;
            var name = LIFECYCLE_MAP[modalEvent.type];

            if (el && name) {
              var ev = new CustomEvent(name, {
                bubbles: false,
                cancelable: false,
                detail: modalEvent.detail
              });
              el.dispatchEvent(ev);
            }
          };
        }

        _createClass(Modal, [{
          key: "swipeToCloseChanged",
          value: function swipeToCloseChanged(enable) {
            if (this.gesture) {
              this.gesture.enable(enable);
            } else if (enable) {
              this.initSwipeToClose();
            }
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
          }
          /**
           * Present the modal overlay after it has been created.
           */

        }, {
          key: "present",
          value: function () {
            var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this2 = this;

              var container, componentProps;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.presented) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      container = this.el.querySelector(".modal-wrapper");

                      if (container) {
                        _context.next = 5;
                        break;
                      }

                      throw new Error('container is undefined');

                    case 5:
                      componentProps = Object.assign(Object.assign({}, this.componentProps), {
                        modal: this.el
                      });
                      _context.next = 8;
                      return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);

                    case 8:
                      this.usersElement = _context.sent;
                      _context.next = 11;
                      return Object(_index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this.usersElement);

                    case 11:
                      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                        return _this2.el.classList.add('show-modal');
                      });
                      _context.next = 14;
                      return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);

                    case 14:
                      if (this.swipeToClose) {
                        this.initSwipeToClose();
                      }

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function present() {
              return _present.apply(this, arguments);
            }

            return present;
          }()
        }, {
          key: "initSwipeToClose",
          value: function initSwipeToClose() {
            var _this3 = this;

            if (Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) !== 'ios') {
              return;
            } // All of the elements needed for the swipe gesture
            // should be in the DOM and referenced by now, except
            // for the presenting el


            var animationBuilder = this.leaveAnimation || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('modalLeave', iosLeaveAnimation);

            var ani = this.animation = animationBuilder(this.el, this.presentingElement);
            this.gesture = createSwipeToCloseGesture(this.el, ani, function () {
              /**
               * While the gesture animation is finishing
               * it is possible for a user to tap the backdrop.
               * This would result in the dismiss animation
               * being played again. Typically this is avoided
               * by setting `presented = false` on the overlay
               * component; however, we cannot do that here as
               * that would prevent the element from being
               * removed from the DOM.
               */
              _this3.gestureAnimationDismissing = true;

              _this3.animation.onFinish( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _this3.dismiss(undefined, 'gesture');

                      case 2:
                        _this3.gestureAnimationDismissing = false;

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })));
            });
            this.gesture.enable(true);
          }
          /**
           * Dismiss the modal overlay after it has been presented.
           *
           * @param data Any data to emit in the dismiss events.
           * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
           */

        }, {
          key: "dismiss",
          value: function () {
            var _dismiss = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, role) {
              var enteringAnimation, dismissed;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.gestureAnimationDismissing && role !== 'gesture')) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", false);

                    case 2:
                      enteringAnimation = _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["h"].get(this) || [];
                      _context3.next = 5;
                      return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);

                    case 5:
                      dismissed = _context3.sent;

                      if (!dismissed) {
                        _context3.next = 11;
                        break;
                      }

                      _context3.next = 9;
                      return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.delegate, this.usersElement);

                    case 9:
                      if (this.animation) {
                        this.animation.destroy();
                      }

                      enteringAnimation.forEach(function (ani) {
                        return ani.destroy();
                      });

                    case 11:
                      this.animation = undefined;
                      return _context3.abrupt("return", dismissed);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function dismiss(_x, _x2) {
              return _dismiss.apply(this, arguments);
            }

            return dismiss;
          }()
          /**
           * Returns a promise that resolves when the modal did dismiss.
           */

        }, {
          key: "onDidDismiss",
          value: function onDidDismiss() {
            return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalDidDismiss');
          }
          /**
           * Returns a promise that resolves when the modal will dismiss.
           */

        }, {
          key: "onWillDismiss",
          value: function onWillDismiss() {
            return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalWillDismiss');
          }
        }, {
          key: "render",
          value: function render() {
            var _Object$assign;

            var htmlAttributes = this.htmlAttributes;
            var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
              "no-router": true,
              "aria-modal": "true",
              tabindex: "-1"
            }, htmlAttributes, {
              style: {
                zIndex: "".concat(20000 + this.overlayIndex)
              },
              "class": Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, "modal-card", this.presentingElement !== undefined && mode === 'ios'), _Object$assign), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)),
              onIonBackdropTap: this.onBackdropTap,
              onIonDismiss: this.onDismiss,
              onIonModalDidPresent: this.onLifecycle,
              onIonModalWillPresent: this.onLifecycle,
              onIonModalWillDismiss: this.onLifecycle,
              onIonModalDidDismiss: this.onLifecycle
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
              visible: this.showBackdrop,
              tappable: this.backdropDismiss
            }), mode === 'ios' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "modal-shadow"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              tabindex: "0"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              role: "dialog",
              "class": "modal-wrapper ion-overlay-wrapper"
            }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              tabindex: "0"
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
          }
        }], [{
          key: "watchers",
          get: function get() {
            return {
              "swipeToClose": ["swipeToCloseChanged"]
            };
          }
        }]);

        return Modal;
      }();

      var LIFECYCLE_MAP = {
        'ionModalDidPresent': 'ionViewDidEnter',
        'ionModalWillPresent': 'ionViewWillEnter',
        'ionModalWillDismiss': 'ionViewWillLeave',
        'ionModalDidDismiss': 'ionViewDidLeave'
      };
      Modal.style = {
        ios: modalIosCss,
        md: modalMdCss
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=20-es5.js.map