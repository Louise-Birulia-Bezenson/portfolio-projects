const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('main-nav-visible');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    hamburger.classList.remove('is-active');
    menu.classList.remove('main-nav-visible');
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

console.log(`
Ваша отметка - 85 балла(ов)
Отзыв по пунктам ТЗ:

Все пункты выполнены полностью!`);