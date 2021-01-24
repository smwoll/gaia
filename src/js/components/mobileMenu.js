const btnHamburger = document.querySelector('.menu-toggle');
const html = document.querySelector('html');
const menu = document.querySelector('.menu');
// const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    // Close Hamburger Menu
    html.classList.remove('noscroll');
    menu.classList.remove('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    // Open Hamburger Menu
    html.classList.add('noscroll');
    menu.classList.add('open');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
