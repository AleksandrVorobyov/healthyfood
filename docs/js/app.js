/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const heartBtn = document.querySelectorAll('[data-heart]');\r\n\r\n\r\nheartBtn.forEach( function(item) {\r\n    item.addEventListener('click', function() {\r\n        this.classList.toggle('btn-heart-active');\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    $(\".header__carousel\").owlCarousel({\r\n        items: 1,\r\n        dots: false,\r\n        dotsData: true,\r\n        nav: false,\r\n        margin: 10,\r\n        mouseDrag: false\r\n    });\r\n    var headerowl = $('.header__carousel');\r\n    headerowl.owlCarousel();\r\n    // Go to the next item\r\n      $('.customNextBtn').click(function() {\r\n          headerowl.trigger('next.owl.carousel');\r\n      })\r\n      // Go to the previous item\r\n      $('.customPrevBtn').click(function() {\r\n          // With optional speed parameter\r\n          // Parameters has to be in square bracket '[]'\r\n          headerowl.trigger('prev.owl.carousel', [300]);\r\n      })\r\n});\r\n\r\nconst btnHeaderNext = document.querySelector('.customNextBtn');\r\nconst btnHeaderPrev = document.querySelector('.customPrevBtn');\r\nlet dotsHeaderActive = document.querySelector('#header-carousel-active-dots');\r\nlet dotsHeader = document.querySelector('#header-carousel-dots');\r\n\r\n\r\nfunction HeaderCarousel () {\r\n    let slideHeader = document.querySelectorAll('.header__carousel-item').length;\r\n    dotsHeader.textContent = `/${slideHeader}`;\r\n    dotsHeaderActive.value = 1;\r\n    let result;\r\n    \r\n    btnHeaderNext.addEventListener('click', function() {\r\n        if (slideHeader > dotsHeaderActive.value) {\r\n            result = parseInt(dotsHeaderActive.value + 1);\r\n            return;\r\n        }\r\n    });\r\n\r\n    btnHeaderPrev.addEventListener('click', function() {\r\n        if (dotsHeaderActive.value > 1) {\r\n            result = parseInt(dotsHeaderActive.value - 1);\r\n            return;\r\n        }\r\n    });\r\n\r\n    dotsHeaderActive.textContent = dotsHeaderActive.value;\r\n}\r\n\r\nHeaderCarousel();\r\n\r\n$(document).ready(function(){\r\n    $(\".shop__carousel\").owlCarousel({\r\n        items: 6,\r\n        dots: true,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: false\r\n    });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".shop-big__carousel\").owlCarousel({\r\n        items: 4,\r\n        dots: true,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: false\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnFooterCopy = document.querySelector('[data-btn-copy]');\r\nconst footerCopyLast = document.querySelector('[data-footer-last]');\r\n\r\nbtnFooterCopy.addEventListener('click', function(item) {\r\n    this.classList.toggle('footer__btn-copy--active');\r\n    footerCopyLast.classList.toggle('footer__copy-last--active');\r\n})\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/stock-time.js":
/*!******************************!*\
  !*** ./src/js/stock-time.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getTimeRemaining(endtime) {\r\n    var t = Date.parse(endtime) - Date.parse(new Date());\r\n    var seconds = Math.floor((t / 1000) % 60);\r\n    var minutes = Math.floor((t / 1000 / 60) % 60);\r\n    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);\r\n    var days = Math.floor(t / (1000 * 60 * 60 * 24));\r\n    return {\r\n      'total': t,\r\n      'days': days,\r\n      'hours': hours,\r\n      'minutes': minutes,\r\n      'seconds': seconds\r\n    };\r\n}\r\n  \r\nfunction initializeClock(id, endtime) {\r\nvar timeDay = document.querySelector('#time-day');\r\nvar timeHour = document.querySelector('#time-hour');\r\nvar timeMin = document.querySelector('#time-min');\r\nvar timeSec = document.querySelector('#time-sec');\r\n\r\nfunction updateClock() {\r\n    var t = getTimeRemaining(endtime);\r\n\r\n    timeDay.innerHTML = t.days;\r\n    timeHour.innerHTML = ('0' + t.hours).slice(-2);\r\n    timeMin.innerHTML = ('0' + t.minutes).slice(-2);\r\n    timeSec.innerHTML = ('0' + t.seconds).slice(-2);\r\n\r\n    if (t.total <= 0) {\r\n    clearInterval(timeinterval);\r\n    }\r\n}\r\n\r\nupdateClock();\r\nvar timeinterval = setInterval(updateClock, 1000);\r\n}\r\n  \r\nvar deadline=\"January 21 2021 00:00:00 GMT+0300\";\r\nvar deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); \r\ninitializeClock('countdown', deadline);\n\n//# sourceURL=webpack:///./src/js/stock-time.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./src/js/app.js ./src/js/carousel.js ./src/js/footer.js ./src/js/stock-time.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\app.js */\"./src/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\carousel.js */\"./src/js/carousel.js\");\n__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\footer.js */\"./src/js/footer.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\stock-time.js */\"./src/js/stock-time.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/js/carousel.js_./src/js/footer.js_./src/js/stock-time.js?");

/***/ })

/******/ });