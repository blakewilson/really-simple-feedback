var reallySimpleFeedback =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/really-simple-feedback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/really-simple-feedback.js":
/*!******************************************!*\
  !*** ./src/js/really-simple-feedback.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var feedbackButton = document.createElement('div');
feedbackButton.id = 'rsf-open-pane';
feedbackButton.innerHTML = "\n    <svg width=\"121px\" height=\"121px\" viewBox=\"0 0 121 121\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Satisfied\">\n                <circle id=\"Face\" fill=\"#FFC239\" cx=\"60.5\" cy=\"60.5\" r=\"60.5\"></circle>\n                <g id=\"Eyes\" transform=\"translate(37.000000, 39.000000)\" fill=\"#000000\">\n                    <circle id=\"Right-Eye\" cx=\"41\" cy=\"7\" r=\"7\"></circle>\n                    <circle id=\"Left-Eye\" cx=\"7\" cy=\"7\" r=\"7\"></circle>\n                </g>\n                <path d=\"M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88\" id=\"Mouth\" stroke=\"#000000\" stroke-width=\"3\" stroke-linecap=\"square\" transform=\"translate(60.500000, 85.000000) rotate(-180.000000) translate(-60.500000, -85.000000) \"></path>\n            </g>\n        </g>\n    </svg>\n    <span>".concat(rsf_localized.feedback_button_text, "</span>\n");
document.body.appendChild(feedbackButton);
var widget = document.createElement('div');
widget.id = 'rsf-widget';
document.body.appendChild(widget);
var thankYou = document.createElement('div');
thankYou.classList.add('rsf-thank-you');
thankYou.innerHTML = "\n    <svg width=\"165px\" height=\"165px\" viewBox=\"0 0 165 165\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"Thank-You-icon\">\n            <circle id=\"Oval\" fill=\"#AFECAF\" cx=\"82.5\" cy=\"82.5\" r=\"82.5\"></circle>\n            <polyline id=\"Line\" stroke=\"#296329\" stroke-width=\"13\" stroke-linecap=\"square\" points=\"43 90.6543138 73.0424861 108 122.536284 58\"></polyline>\n        </g>\n    </g>\n    </svg>\n    <span>".concat(rsf_localized.thank_you_message, "</span>\n");
document.body.appendChild(thankYou);
thankYou.style.bottom = "-".concat(thankYou.offsetHeight, "px");
var header = document.createElement('header');
header.classList.add('rsf-header');
widget.appendChild(header);
var headerTitle = document.createElement('span');
headerTitle.classList.add('rsf-widget-title');
headerTitle.textContent = rsf_localized.widget_header_text;
header.appendChild(headerTitle);
var headerClose = document.createElement('span');
headerClose.innerHTML = "\n    <svg id=\"rsf-close\" width=\"16\" height=\"16\" viewBox=\"0 0 14 14\"><path style=\"fill: #fff;\" d=\"M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z\"></path></svg>\n";
header.appendChild(headerClose);
headerClose.addEventListener('click', function (e) {
  hideWidget();
  setTimeout(function () {
    showFeedbackButton();
  }, 250);
});
var generalError = document.createElement('div');
generalError.classList.add('rsf-error');
widget.appendChild(generalError);
var form = document.createElement('form');
form.id = 'rsf-form';
form.name = 'rsf-form';
widget.appendChild(form);
var satisfactionMessage = document.createElement('p');
satisfactionMessage.classList.add('rsf-satisfaction-message');
satisfactionMessage.textContent = rsf_localized.satisfaction_message;
form.appendChild(satisfactionMessage);
var satisfactionSection = document.createElement('div');
satisfactionSection.classList.add('rsf-satisfaction');
form.appendChild(satisfactionSection);
var unsatisfiedOption = document.createElement('label');
unsatisfiedOption.classList.add('rsf-unsatisfied-option');
unsatisfiedOption.style.marginRight = '1rem';
satisfactionSection.appendChild(unsatisfiedOption);
var unsatisfiedInput = document.createElement('input');
unsatisfiedInput.type = 'radio';
unsatisfiedInput.id = 'rsf-unsatisfied-option';
unsatisfiedInput.name = 'satisfactionRating';
unsatisfiedInput.value = 'unsatisfied';
unsatisfiedOption.appendChild(unsatisfiedInput);
var unsatisfiedImage = document.createElement('span');
unsatisfiedImage.classList.add('rsf-svg-holder');
unsatisfiedImage.innerHTML = "\n    <svg width=\"121px\" height=\"121px\" viewBox=\"0 0 121 121\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Unsatisfied\">\n                <circle id=\"Face\" fill=\"#FDABA5\" cx=\"60.5\" cy=\"60.5\" r=\"60.5\"></circle>\n                <g id=\"Eyes\" transform=\"translate(37.000000, 39.000000)\" fill=\"#9B332B\">\n                    <circle id=\"Right-Eye\" cx=\"41\" cy=\"7\" r=\"7\"></circle>\n                    <circle id=\"Left-Eye\" cx=\"7\" cy=\"7\" r=\"7\"></circle>\n                </g>\n                <path d=\"M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88\" id=\"Mouth\" stroke=\"#9B332B\" stroke-width=\"3\" stroke-linecap=\"square\"></path>\n            </g>\n        </g>\n    </svg>\n";
unsatisfiedOption.append(unsatisfiedImage);
var satisfiedOption = document.createElement('label');
satisfiedOption.classList.add('rsf-satisfied-option');
satisfactionSection.appendChild(satisfiedOption);
var satisfiedInput = document.createElement('input');
satisfiedInput.type = 'radio';
satisfiedInput.id = 'rsf-satisfied-option';
satisfiedInput.name = 'satisfactionRating';
satisfiedInput.value = 'satisfied';
satisfiedOption.appendChild(satisfiedInput);
var satisfiedImage = document.createElement('span');
satisfiedImage.classList.add('rsf-svg-holder');
satisfiedImage.innerHTML = "\n    <svg width=\"121px\" height=\"121px\" viewBox=\"0 0 121 121\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Satisfied\">\n                <circle id=\"Face\" fill=\"#AFECAF\" cx=\"60.5\" cy=\"60.5\" r=\"60.5\"></circle>\n                <g id=\"Eyes\" transform=\"translate(37.000000, 39.000000)\" fill=\"#296329\">\n                    <circle id=\"Right-Eye\" cx=\"41\" cy=\"7\" r=\"7\"></circle>\n                    <circle id=\"Left-Eye\" cx=\"7\" cy=\"7\" r=\"7\"></circle>\n                </g>\n                <path d=\"M35,88 C41.017505,84 49.145553,82 59.384144,82 C69.6227351,82 78.4946871,84 86,88\" id=\"Mouth\" stroke=\"#296329\" stroke-width=\"3\" stroke-linecap=\"square\" transform=\"translate(60.500000, 85.000000) rotate(-180.000000) translate(-60.500000, -85.000000) \"></path>\n            </g>\n        </g>\n    </svg>\n";
satisfiedOption.appendChild(satisfiedImage);
var commentSection = document.createElement('div');
commentSection.classList.add('rsf-comments');
form.appendChild(commentSection);
var textarea = document.createElement('textarea');
textarea.id = 'rsf-comment-input';
textarea.name = 'rsf-comments';
commentSection.appendChild(textarea);
var commentSectionError = document.createElement('div');
commentSectionError.classList.add('rsf-error');
commentSection.appendChild(commentSectionError);
var submitSection = document.createElement('div');
submitSection.classList.add('rsf-send');
form.appendChild(submitSection);
var submit = document.createElement('button');
submit.classList.add('rsf-submit-button');
submit.innerHTML = "\n<span>".concat(rsf_localized.submit_text, "</span>\n<svg width=\"1rem\" height=\"1rem\" style=\"margin-left: 0.5rem\" viewBox=\"0 0 35 36\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <polygon id=\"Path\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" points=\"0 35.25 35 17.75 0 0.25 0 13.8611111 25 17.75 0 21.6388889\"></polygon>\n    </g>\n</svg>\n");
submitSection.appendChild(submit);
feedbackButton.addEventListener('click', function (e) {
  hideFeedbackButton();
  setTimeout(function () {
    showWidget();
  }, 250);
});
document.addEventListener('click', function (e) {
  if (e.target.name !== 'satisfactionRating') {
    return null;
  }

  function testing() {}

  if (e.target.value === 'unsatisfied') {
    textarea.placeholder = rsf_localized.unsatisfied_placeholder_text;
  }

  if (e.target.value === 'satisfied') {
    textarea.placeholder = rsf_localized.satisfied_placeholder_text;
  }

  showCommentSection();
  showSubmitSection();
});
document.addEventListener('input', function (e) {
  if (e.target.id !== 'rsf-comment-input') {
    return null;
  }

  e.target.style.borderColor = '#000';
  commentSectionError.textContent = '';
});
document.addEventListener('submit', function (e) {
  if (e.target.id !== 'rsf-form') {
    return null;
  }

  e.preventDefault(); // Clear prior errors 

  generalError.textContent = '';
  commentSectionError.textContent = '';
  var comment = document.getElementById('rsf-comment-input');
  var rating;

  if (unsatisfiedInput.checked) {
    rating = 'unsatisfied';
  }

  if (satisfiedInput.checked) {
    rating = 'satisfied';
  }

  var data = {
    rating: rating,
    comment: comment.value,
    userAgent: navigator.userAgent
  };
  fetch("".concat(rsf_localized.site_url, "/wp-json/really-simple-feedback/v1/feedback"), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    if (res.code) {
      switch (res.code) {
        case 'no_comment':
          textarea.style.borderColor = '#F44336';
          commentSectionError.textContent = rsf_localized.comment_section_error_message;
          break;

        default:
          generalError.textContent = rsf_localized.general_error_message;
      }

      return;
    }

    hideWidget();
    setTimeout(function () {
      showThankYou();
      resetWidget();
      setTimeout(function () {
        hideThankYou();
        setTimeout(function () {
          showFeedbackButton();
        }, 250);
      }, 2500);
    }, 250);
  })["catch"](function (err) {
    console.log(err);
    generalError.textContent = rsf_localized.general_error_message;
  });
});

function showWidget() {
  widget.style.visibility = 'visible';
  widget.style.transition = 'bottom 0.25s ease-in-out';
  widget.style.bottom = '1rem';
}

function hideWidget() {
  widget.style.transition = 'bottom 0.25s ease-in-out';
  widget.style.bottom = "-".concat(widget.offsetHeight, "px");
  setTimeout(function () {
    widget.style.visibility = 'hidden';
  }, 250);
}

function showThankYou() {
  thankYou.style.visibility = 'visible';
  thankYou.style.transition = 'bottom 0.25s ease-in-out';
  thankYou.style.bottom = '1rem';
}

function hideThankYou() {
  thankYou.style.transition = 'bottom 0.25s ease-in-out';
  thankYou.style.bottom = "-".concat(thankYou.offsetHeight, "px");
  setTimeout(function () {
    thankYou.style.visibility = 'hidden';
  }, 250);
}

function showFeedbackButton() {
  feedbackButton.style.visibility = 'visible';
  feedbackButton.style.transition = 'bottom 0.25s ease-in-out';
  feedbackButton.style.bottom = '1rem';
}

function hideFeedbackButton() {
  feedbackButton.style.transition = 'bottom 0.25s ease-in-out';
  feedbackButton.style.bottom = "-".concat(feedbackButton.offsetHeight, "px");
  setTimeout(function () {
    feedbackButton.style.visibility = 'hidden';
  }, 250);
}

function showCommentSection() {
  widget.style.maxHeight = "".concat(widget.scrollHeight, "px");
  commentSection.style.opacity = 0;
  commentSection.style.display = 'block';
  commentSection.style.transition = 'opacity 0.25s ease-in-out';
  widget.style.transition = 'max-height 0.25s ease-in-out';
  widget.style.maxHeight = "".concat(widget.scrollHeight, "px");
  commentSection.style.opacity = 1;
  setTimeout(function () {
    widget.style.maxHeight = 'none';
  }, 250);
}

function showSubmitSection() {
  widget.style.maxHeight = "".concat(widget.scrollHeight, "px");
  submitSection.style.opacity = 0;
  submitSection.style.display = 'block';
  submitSection.style.transition = 'opacity 0.25s ease-in-out';
  widget.style.transition = 'max-height 0.25s ease-in-out';
  widget.style.maxHeight = "".concat(widget.scrollHeight, "px");
  submitSection.style.opacity = 1;
  setTimeout(function () {
    widget.style.maxHeight = 'none';
  }, 250);
}

function resetWidget() {
  commentSection.style.display = 'none';
  submitSection.style.display = 'none';
  commentSection.style.opacity = 0;
  submitSection.style.opacity = 0;
  unsatisfiedInput.checked = false;
  satisfiedInput.checked = false;
  widget.style.maxHeight = 'none';
  textarea.value = '';
}

widget.style.bottom = "-".concat(widget.offsetHeight, "px");

/***/ })

/******/ })["default"];