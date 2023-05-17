/* eslint-disable linebreak-style */

function navItemsToggle() {
  const humBurger = document.getElementsByClassName('menu-button');
  const navItems = document.getElementsByClassName('nav-items');
  navItems[0].classList.toggle('nav-toggle-show');
  navItems[0].classList.remove('text-center');
  navItems[0].classList.remove('align-items-center');
  Object.entries(navItems[0].children).forEach((item) => {
    item[1].classList.toggle('nav-item-show');
    item[1].addEventListener('click', () => {
      navItems[0].classList.remove('nav-toggle-show');
      Object.entries(navItems[0].children).forEach((item, index) => {
        item[1].classList.remove('nav-item-show');
        if (index < 3) {
          humBurger[0].children[index].classList.remove(`checked-${index + 1}`);
        }
      });
    });
  });
}

function humburgerToggle() {
  const humBurger = document.getElementsByClassName('menu-button');
  Object.entries(humBurger[0].children).forEach((item, index) => {
    item[1].classList.toggle(`checked-${index + 1}`);
  });
}

document.querySelector('.nav-container .checkbox').addEventListener('click', navItemsToggle);
document.querySelector('.nav-container .checkbox').addEventListener('click', humburgerToggle);
