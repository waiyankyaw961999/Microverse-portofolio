function navItemsToggle() {
  const humBurger = document.getElementsByClassName('nav-container');
  const navItems = document.getElementsByClassName('nav-items');
  const body = document.getElementsByTagName('body')[0];
  
  navItems[0].classList.toggle('nav-toggle-show');
  navItems[0].classList.remove('text-center');
  navItems[0].classList.remove('align-items-center');
  
  if (humBurger[0].children[2].classList.contains('hidden')) {
    humBurger[0].children[2].classList.remove('hidden');
    humBurger[0].children[1].classList.add('hidden');
    body.style.overflowY = 'hidden';
  } else {
    humBurger[0].children[1].classList.remove('hidden');
    humBurger[0].children[2].classList.add('hidden');
    body.style.overflowY = 'auto';
  }
  
  Object.entries(navItems[0].children).forEach((item) => {
    item[1].classList.toggle('nav-item-show');
    item[1].addEventListener('click', () => {
      humBurger[0].children[1].classList.remove('hidden')
      navItems[0].classList.remove('nav-toggle-show');
      humBurger[0].children[2].classList.add('hidden')
      Object.entries(navItems[0].children).forEach((item, index) => {
        item[1].classList.remove('nav-item-show');
        if (index < 3) {
          humBurger[0].children[index].classList.remove(`checked-${index + 1}`);
        }
      });
      body.style.overflowY = 'auto';
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
