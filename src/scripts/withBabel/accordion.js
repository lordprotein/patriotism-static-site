"use strict";

var slideUp = function slideUp(elem, content) {
  var btn = elem.querySelector('.accordion__slideUp');
  btn.addEventListener('click', function () {
    content.classList.remove('show');
  });
};

var toggle = function toggle(event) {
  var is_click_panel = event.target.matches('.accordion__panel');
  var elem = event.target.closest('.accordion');
  if (!elem || !is_click_panel) return;
  var content = elem.querySelector('.accordion__content');

  if (content.classList.contains('show')) {
    content.classList.remove('show');
  } else {
    content.classList.add('show');
  }

  slideUp(elem, content);
};

var handleAcc = function handleAcc() {
  var accList = document.querySelectorAll('.accordion__list');
  var length = accList.length;

  for (var i = 0; i < length; i++) {
    accList[i].addEventListener('click', function (event) {
      toggle(event);
    });
  }
};

handleAcc();