const toggle = document.querySelector('.menu-toggle');
const html = document.querySelector('html');
const menu = document.querySelector('.menu');
const menuContainer = document.querySelector(
  '.menu-primary-menu-container',
);

toggle.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    // Close Hamburger Menu
    html.classList.remove('noscroll');
    html.classList.remove('menu-open');
    menu.classList.remove('open');
    menuContainer.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  } else {
    // Open Hamburger Menu
    html.classList.add('noscroll');
    html.classList.add('menu-open');
    menu.classList.add('open');
    menuContainer.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
});
