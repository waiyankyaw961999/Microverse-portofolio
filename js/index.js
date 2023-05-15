const checkbox = document.querySelector('.checkbox');
const navItems = document.querySelector('.nav-items-mobile');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    navItems.style.display = 'flex';
  } else {
    navItems.style.display = 'none';
  }
});
