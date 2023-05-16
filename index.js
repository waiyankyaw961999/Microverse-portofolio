/* eslint-disable linebreak-style */

function navItemsToggle() {
//   navItems.classlist.toggle('nav-toggle-show');
  const navItems = document.querySelectorAll('.nav-items');
  navItems.forEach((nav) => {
    nav.classList.toggle('nav-toggle-show');
    // TODO: toggle the nav-items children to set fixed height and no left-right margin
    // TODO: loop through each child from the nav-items and toggle the class
    nav.children[0].classList.toggle('nav-toggle-show');
    nav.children[1].classList.toggle('nav-toggle-show');
    nav.children[2].classList.toggle('nav-toggle-show');

    // TODO: when we click on the link in the nav-items, we want to hide the nav-items
  });
}
document.querySelector('.nav-container .checkbox').addEventListener('click', navItemsToggle);