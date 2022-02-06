const audio = new Audio("assets/audio/forest.mp3");
const buttonPlayPause = document.querySelector('.player-button');
const navButton = document.querySelectorAll("[data-audio]");
const mainBg = document.querySelector('.main');

function onButtonPlayPauseClick() {
    if (buttonPlayPause.classList.contains("play")) {
        buttonPlayPause.classList.add("pause");
        buttonPlayPause.classList.remove('play');
        playAudio();
    } else {
        buttonPlayPause.classList.add("play");
        buttonPlayPause.classList.remove('pause');
        pauseAudio();
    }
}

function playAudio(src) {
    if (src) {
        audio.src = src;
    }
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function onNavButtonClick(e) {
    mainBg.style = `background-image: url(${e.target.dataset.img});`;
    playAudio(e.target.dataset.audio);
    buttonPlayPause.classList.add("pause");
    buttonPlayPause.classList.remove('play');
    navButton.forEach((el) => el.classList.remove("nav-button-active"));
    e.target.classList.add("nav-button-active");
}

buttonPlayPause.addEventListener('click', onButtonPlayPauseClick);
navButton.forEach((el) => el.addEventListener('click', onNavButtonClick));

console.log('Ваша отметка - 70 балла(ов)\n Отзыв по пунктам ТЗ:\n Все пункты выполнены полностью!');