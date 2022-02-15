const url ="https://type.fit/api/quotes";
const urlRu ="https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json";
const buttonQuote = document.querySelector(".button");
const txtWindows = document.querySelector("#quote");
const imgs = document.querySelector("#grow");
const pageLanguages = document.querySelectorAll("[data-lang]");
let index =0;
let quotes = null;
let quotesRu = null;
let lang

pageLanguages.forEach((el) => el.addEventListener('click', changeLeng));
function changeLeng(el){
    pageLanguages.forEach((el)=> el.classList.remove('lang-active'));
    el.target.classList.add("lang-active");
    console.log("el.target.dataset.lang", el.target.dataset.lang);
    lang = el.target.dataset.lang;
    onButtonQuoteClick();
} 


buttonQuote.addEventListener('click', onButtonQuoteClick);
getData().then((data) => {
    quotes = data;
    onButtonQuoteClick();
});

getDataRu().then((dataRu) => {
    quotesRu = dataRu;
    onButtonQuoteClick();
});


function getRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return index = random;
}

function getQuote(index) {
    return quotes[index].text;
}

function getQuoteRu(index) {
    return quotesRu[index].text;
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function getDataRu() {
    const resRu = await fetch(urlRu);
    const dataRu = await resRu.json();
    return dataRu;
}

function onButtonQuoteClick() {
    imgs.classList.add("grow");
    buttonQuote.classList.add("grow");
    setTimeout(timer,300);
    console.log(lang);
    if (lang == "en"){
        const a = getRandom(0, quotes.length);
        txtWindows.textContent = getQuote(a);
        buttonQuote.textContent = "Give me a quote";
        
    }else{
        const a = getRandom(0, quotesRu.length);
        txtWindows.textContent = getQuoteRu(a);
        buttonQuote.textContent = "Получить циату";
    }
}
function timer(){
    imgs.classList.remove("grow");
    buttonQuote.classList.remove("grow");
}