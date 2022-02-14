const url ="https://type.fit/api/quotes";
const buttonQuote = document.querySelector(".button");
const txtWindows = document.querySelector("#quote");
const imgs = document.querySelector("#grow")
let index =0;
let quotes = null;

buttonQuote.addEventListener('click', onButtonQuoteClick);
getData().then((data) => quotes = data);

function getRandom(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return index = random;
}

function getQuote(index) {
    return quotes[index].text;
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

function onButtonQuoteClick() {
    imgs.classList.add("grow");
    setTimeout(timer,300);

    if (quotes != null){
        const a = getRandom(0, quotes.length);
        txtWindows.textContent = getQuote(a);
    }
}
function timer(){
    imgs.classList.remove("grow");
}

