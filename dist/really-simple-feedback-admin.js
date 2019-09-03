"use strict";

document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('rsf-js-mark-as-read')) {
    return null;
  }

  var row = e.target.closest('.rsf-post');
  var postID = e.target.getAttribute('data-postid');
  fetch("".concat(rsf_localized.site_url, "/wp-json/really-simple-feedback/v1/mark_as_read/").concat(postID), {
    method: 'POST',
    headers: {
      'X-WP-Nonce': rsf_localized.nonce,
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    row.classList.remove('rsf-post-unread');
    e.target.classList.remove('rsf-js-mark-as-read');
    e.target.classList.add('rsf-js-mark-as-unread');
    e.target.textContent = rsf_localized.mark_as_unread_text;
  })["catch"](function (err) {
    return console.log(err);
  });
});
document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('rsf-js-mark-as-unread')) {
    return null;
  }

  var row = e.target.closest('.rsf-post');
  var postID = e.target.getAttribute('data-postid');
  fetch("".concat(rsf_localized.site_url, "/wp-json/really-simple-feedback/v1/mark_as_unread/").concat(postID), {
    method: 'POST',
    headers: {
      'X-WP-Nonce': rsf_localized.nonce,
      'Content-Type': 'applications/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    row.classList.add('rsf-post-unread');
    e.target.classList.remove('rsf-js-mark-as-unread');
    e.target.classList.add('rsf-js-mark-as-read');
    e.target.textContent = rsf_localized.mark_as_read_text;
  })["catch"](function (err) {
    return console.log(err);
  });
});
document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('column-user_agent')) {
    return null;
  }

  if (e.target.classList.contains('rsf-expanded-column')) {
    e.target.classList.remove('rsf-expanded-column');
  } else {
    e.target.classList.add('rsf-expanded-column');
  }
});
document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('column-url')) {
    return null;
  }

  if (e.target.classList.contains('rsf-expanded-column')) {
    e.target.classList.remove('rsf-expanded-column');
  } else {
    e.target.classList.add('rsf-expanded-column');
  }
});