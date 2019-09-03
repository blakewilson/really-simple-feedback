var feedback =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/feedback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/feedback.js":
/*!****************************!*\
  !*** ./src/js/feedback.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var createElement = function createElement() {
  var el = document.createElement('div');
  el.id = 'feedback-widget';
  el.setAttribute('data-isclosed', true);
  el.innerHTML = "\n        <header id=\"feedback-header\">\n            <div>Feedback</div>\n            <svg class=\"feedback-close\" style=\"display: none;\" width=\"16\" height=\"16\" viewBox=\"0 0 14 14\"><path style=\"fill: #fff;\" d=\"M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z\"></path></svg>\n        </header>\n        <form id=\"feedback\">\n            <div class=\"feedback-field-group feedback-field-group-comment\">\n                <label for=\"feedback-comment\" class=\"feedback-label\">Feedback about this page?</label>\n                <textarea id=\"feedback-comment\" class=\"feedback-input\"></textarea>\n            </div>\n\n            <p class=\"feedback-form-presubmit-message\">The current URL will be sent as well.</p>\n\n            <button class=\"feedback-submit-button\">Submit</button>\n        </form>\n        <footer id=\"feedback-footer\">\n            <div>Powered by <a href=\"#\">Really Simple Feedback</a></div>\n        </footer>\n    ";
  document.body.appendChild(el);
  var elHeight = el.offsetHeight;
  var elHeaderHeight = el.querySelector('header').offsetHeight;
  el.style.bottom = "-".concat(elHeight, "px");
  el.style.visibility = 'visible';
  el.style.transition = 'bottom .5s ease-in-out';
  setTimeout(function () {
    el.style.bottom = "-".concat(elHeight - elHeaderHeight, "px");
  }, 1000);
};

createElement();
document.addEventListener('submit', function (e) {
  if (e.target.id != 'feedback') {
    return null;
  }

  e.preventDefault();
  var comment = document.getElementById('feedback-comment');

  if (!comment.value) {
    document.querySelector('.feedback-field-group-comment').classList.add('feedback-field-group-error');
    return;
  }

  var data = {
    comment: comment.value,
    userAgent: navigator.userAgent
  };
  fetch('http://feedback.testing:9999/wp-json/really-simple-feedback/v1/feedback', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    var form = document.querySelector('#feedback-widget form');
    form.innerHTML = '<h2>Thank You</h2><p>Thanks for submitting your feedback!</p>';
  })["catch"](function (err) {
    return console.log(err);
  });
});
document.addEventListener('click', function (e) {
  if (e.target.id !== 'feedback-header') {
    return null;
  }

  var el = document.getElementById('feedback-widget');

  if (el.getAttribute('data-isclosed')) {
    el.removeAttribute('data-isclosed');
  } else {
    el.setAttribute('data-isclosed', true);
  }

  if (!el.getAttribute('data-isclosed')) {
    el.style.transition = 'bottom 0.2s ease-in-out';
    el.style.bottom = '1rem';
    el.querySelector('.feedback-close').style.display = 'block';
  } else {
    el.querySelector('.feedback-close').style.display = 'none';
    var elHeight = el.offsetHeight;
    var elHeaderHeight = el.querySelector('header').offsetHeight;
    el.style.bottom = "-".concat(elHeight - elHeaderHeight, "px");
  }
});

/***/ })

/******/ })["default"];