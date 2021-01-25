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

eval("const heartBtn = document.querySelectorAll('[data-heart]');\r\n\r\nheartBtn.forEach( function(item) {\r\n    item.addEventListener('click', function() {\r\n        this.classList.toggle('btn-heart-active');\r\n    });\r\n});\r\n\r\nfunction getInfoCards() {\r\n    let infoCardInputAll = document.querySelectorAll('[data-input]');\r\n    infoCardInputAll.forEach(function (item) {\r\n        item.addEventListener('click', function() {\r\n            let infoCardTextAll = document.querySelectorAll('[data-text]');\r\n            infoCardTextAll.forEach(function(item) {\r\n                item.classList.remove('info__text--active');\r\n            })\r\n            let a = this.getAttribute('data-input');\r\n            let text = document.querySelector(`[data-text=${CSS.escape(a)}]`);\r\n            text.classList.add('info__text--active');\r\n        });\r\n    });\r\n};\r\n\r\ngetInfoCards();\r\n\r\nfunction getInfoCardsSecond() {\r\n    let infoCardInputAll = document.querySelectorAll('[data-input-second]');\r\n    infoCardInputAll.forEach(function (item) {\r\n        item.addEventListener('click', function() {\r\n            let infoCardTextAll = document.querySelectorAll('[data-text-second]');\r\n            infoCardTextAll.forEach(function(item) {\r\n                item.classList.remove('info__text--active');\r\n            })\r\n            let a = this.getAttribute('data-input-second');\r\n            let text = document.querySelector(`[data-text-second=${CSS.escape(a)}]`);\r\n            text.classList.add('info__text--active');\r\n        });\r\n    });\r\n};\r\n\r\ngetInfoCardsSecond();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    $(\".header__carousel\").owlCarousel({\r\n        items: 1,\r\n        dots: false,\r\n        dotsData: true,\r\n        nav: false,\r\n        margin: 10,\r\n        mouseDrag: false,\r\n    });\r\n    var headerowl = $('.header__carousel');\r\n    headerowl.owlCarousel();\r\n      $('.customNextBtn').click(function() {\r\n          headerowl.trigger('next.owl.carousel');\r\n      })\r\n      $('.customPrevBtn').click(function() {\r\n          headerowl.trigger('prev.owl.carousel', [300]);\r\n      })\r\n});\r\n\r\nfunction HeaderCarousel () {\r\n    const btnHeaderNext = document.querySelector('#customNextBtn');\r\n    const btnHeaderPrev = document.querySelector('#customPrevBtn');\r\n    let dotsHeader = document.querySelector('#header-carousel-dots');\r\n    let dotsHeaderNumber = document.querySelector('#header-carousel-active-dots');\r\n    let dotsHeaderInput = document.querySelector('#header-carousel-active-input');\r\n    let slideHeaderAll = document.querySelectorAll('.header__carousel-item');\r\n    let dotsHeaderNumberFiel = parseFloat(dotsHeaderInput.value, 10);\r\n\r\n    dotsHeader.innerHTML = `/${slideHeaderAll.length}`;\r\n\r\n    btnHeaderPrev.addEventListener('click', function() {\r\n        if (dotsHeaderNumberFiel > 1) {\r\n            dotsHeaderNumberFiel--;\r\n            dotsHeaderInput.value = dotsHeaderNumberFiel;\r\n            dotsHeaderNumber.innerHTML = dotsHeaderInput.value;\r\n        } else {\r\n          return 1;\r\n        }\r\n      });\r\n\r\n      btnHeaderNext.addEventListener('click', function() {\r\n        if (dotsHeaderNumberFiel >= 1 && dotsHeaderNumberFiel < 5) {\r\n            dotsHeaderNumberFiel++;\r\n            dotsHeaderInput.value = dotsHeaderNumberFiel;\r\n            dotsHeaderNumber.innerHTML = dotsHeaderInput.value;\r\n        } else {\r\n          return 1;\r\n        }\r\n      });\r\n}\r\n\r\nHeaderCarousel();\r\n\r\n$(document).ready(function(){\r\n    $(\".shop__carousel\").owlCarousel({\r\n        dots: true,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        responsive: {\r\n            1860: {\r\n                items: 6,\r\n            },\r\n            1525: {\r\n                items: 5,\r\n            },\r\n            1220: {\r\n                items: 4,\r\n            },\r\n            915: {\r\n                items: 3,\r\n            },\r\n            610: {\r\n                items: 2,\r\n                center: false,\r\n                autoWidth: false,\r\n            },\r\n            0: {\r\n                items: 1,\r\n                center: true,\r\n                autoWidth: true,\r\n            },\r\n        }\r\n    });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".shop-big__carousel\").owlCarousel({\r\n        dots: true,\r\n        nav: false,\r\n        mouseDrag: true,\r\n        margin: 30,\r\n        responsive: {\r\n            1220: {\r\n                items: 4,\r\n            },\r\n            610: {\r\n                items: 2,\r\n                center: false,\r\n                autoWidth: false,\r\n            },\r\n            0: {\r\n                items: 1,\r\n                center: true,\r\n                autoWidth: true,\r\n            },\r\n        }\r\n    });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".promo__carousel--arrivals\").owlCarousel({\r\n        items: 1,\r\n        dots: false,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: true,\r\n        autoplay: true,\r\n        autoplayTimeout: 9000,\r\n        smartSpeed: 800,\r\n        autoplayHoverPause: true\r\n    });\r\n    var promoOwlArrivals = $('.promo__carousel--arrivals');\r\n    promoOwlArrivals.owlCarousel();\r\n      $('.customNextBtn--arrivals').click(function() {\r\n        promoOwlArrivals.trigger('next.owl.carousel');\r\n      })\r\n      $('.customPrevBtn--arrivals').click(function() {\r\n          promoOwlArrivals.trigger('prev.owl.carousel', [300]);\r\n      });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".promo__carousel--popular\").owlCarousel({\r\n        items: 1,\r\n        dots: false,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: true,\r\n        autoplay: true,\r\n        autoplayTimeout: 10000,\r\n        smartSpeed: 800,\r\n        autoplayHoverPause: true\r\n    });\r\n\r\n    var promoOwlPopular = $('.promo__carousel--popular');\r\n    promoOwlPopular.owlCarousel();\r\n      $('.customNextBtn--popular').click(function() {\r\n        promoOwlPopular.trigger('next.owl.carousel');\r\n      })\r\n      $('.customPrevBtn--popular').click(function() {\r\n          promoOwlPopular.trigger('prev.owl.carousel', [300]);\r\n      });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".promo__carousel--random\").owlCarousel({\r\n        items: 1,\r\n        dots: false,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: true,\r\n        autoplay: true,\r\n        autoplayTimeout: 11000,\r\n        smartSpeed: 800,\r\n        autoplayHoverPause: true\r\n    });\r\n\r\n    var promoOwlRandom = $('.promo__carousel--random');\r\n    promoOwlRandom.owlCarousel();\r\n      $('.customNextBtn--random').click(function() {\r\n        promoOwlRandom.trigger('next.owl.carousel');\r\n      })\r\n      $('.customPrevBtn--random').click(function() {\r\n          promoOwlRandom.trigger('prev.owl.carousel', [300]);\r\n      });\r\n});\r\n\r\n$(document).ready(function(){\r\n    $(\".news__carousel\").owlCarousel({\r\n        dots: false,\r\n        nav: false,\r\n        margin: 30,\r\n        mouseDrag: true,\r\n        loop: true,\r\n        responsive: {\r\n            1230: {\r\n                items: 2,\r\n            },\r\n            0: {\r\n                items: 1,\r\n            },\r\n        }\r\n    });\r\n\r\n    var newsOwlCom = $('.news__carousel');\r\n    newsOwlCom.owlCarousel();\r\n      $('.customNextBtn--comment').click(function() {\r\n        newsOwlCom.trigger('next.owl.carousel');\r\n      })\r\n      $('.customPrevBtn--comment').click(function() {\r\n          newsOwlCom.trigger('prev.owl.carousel', [300]);\r\n      });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const btnFooterCopy = document.querySelector('[data-btn-copy]');\r\nconst footerCopyLast = document.querySelector('[data-footer-last]');\r\n\r\nbtnFooterCopy.addEventListener('click', function(item) {\r\n    this.classList.toggle('footer__btn-copy--active');\r\n    footerCopyLast.classList.toggle('footer__copy-last--active');\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const subsInput = document.getElementById('subscribe-email-input');\r\nconst subsbtn = document.getElementById('subscribe-email-btn');\r\n\r\nsubsbtn.addEventListener('click', function(e) {\r\n    if (subsInput.value == '') {\r\n        e.preventDefault();\r\n        alert('Enter a valid email adress');\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/js/form.js?");

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
/*!*************************************************************************************************************!*\
  !*** multi ./src/js/app.js ./src/js/carousel.js ./src/js/footer.js ./src/js/form.js ./src/js/stock-time.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\app.js */\"./src/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\carousel.js */\"./src/js/carousel.js\");\n__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\footer.js */\"./src/js/footer.js\");\n__webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\form.js */\"./src/js/form.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Alex\\Desktop\\healthyfood\\src\\js\\stock-time.js */\"./src/js/stock-time.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/js/carousel.js_./src/js/footer.js_./src/js/form.js_./src/js/stock-time.js?");

/***/ })

/******/ });