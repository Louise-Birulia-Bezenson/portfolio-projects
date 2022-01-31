import i18Obj from './translate.js';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');
//Part3
const portfolioBtn = document.querySelectorAll('.portfolio-box-button');
const portfolioImages = document.querySelectorAll('.portfolio-photo-item');
const pageLanguages = document.querySelectorAll("[data-lang]");
const valueSwitch = document.querySelectorAll('.switch');



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

function getTranslate(lang){
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const str = i18Obj[lang][element.dataset.i18n];
    if (element.placeholder) {
      element.placeholder = str;
    }
    else{element.textContent = str;
    }

  });
}

getTranslate(localStorage.getItem('lang') || "en");

pageLanguages.forEach((el) => {
  el.addEventListener('click', (clickedEl)=> { 
    getTranslate(el.dataset.lang);
    pageLanguages.forEach(item => item.classList.remove("lang-active"));
    clickedEl.target.classList.add("lang-active");
    localStorage.setItem('lang', clickedEl.target.dataset.lang);

  });
});

valueSwitch.forEach((el) => el.addEventListener('click', changeLighting));


function changeLighting(el){
  valueSwitch.forEach((el)=> el.classList.remove('switch-activ'));
  el.target.classList.add("switch-activ");
  document.body.classList.toggle("light");

//   document.documentElement.style.setProperty('--body-color', '#fff');
// document.documentElement.style.setProperty('--text-color', '#000');
// document.documentElement.style.setProperty('--hover-color', '#000');
// document.documentElement.style.setProperty('--social-filter', 'invert(100%)');
// document.documentElement.style.setProperty('--title-primary-color','#000');

}



console.log(`
Ваша отметка - 78 балла(ов)
Отзыв по пунктам ТЗ:
Не выполненные:
1) сложные эффекты для кнопок при наведении и/или клике

Частично выполненные пункты:
1) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы — 3 балл(а)
Комментарий проверяющего: Реализовано только для смены языка.


Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.
`);

