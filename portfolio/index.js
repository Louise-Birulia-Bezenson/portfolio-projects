const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');
//Part3
const portfolioBtn = document.querySelectorAll('.portfolio-box-button');
const portfolioImages = document.querySelectorAll('.portfolio-photo-item');

// const portfolioActivButton = document.querySelectorAll('.active');

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

//Part3
function onPortfolioBtnClick(event) {
  if(event.target.classList.contains('portfolio-box-button')) {
    portfolioBtn.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add("active");
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}

portfolioBtn.forEach((el) => el.addEventListener('click', onPortfolioBtnClick));

function preloadImages(season) {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${season}/${i}.jpg`;
  }
}

const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach(season => preloadImages(season));

console.log(`
Ваша отметка - 85 балла(ов)
Отзыв по пунктам ТЗ:

Все пункты выполнены полностью!`);