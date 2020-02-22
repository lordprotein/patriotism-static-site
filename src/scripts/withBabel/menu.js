"use strict";

var toggleDisplayMenu = function toggleDisplayMenu(menu_btn) {
  var menu = menu_btn.parentElement.nextElementSibling;
  if (!menu.matches('.sidebar')) return;

  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
};

var handleMenu = function handleMenu() {
  var menu_btn = document.querySelector('.sidebar_btn');
  var width = document.documentElement.scrollWidth;
  if (width > 800) return;
  menu_btn.addEventListener('click', function () {
    return toggleDisplayMenu(menu_btn);
  });
};

handleMenu();