const itemGameZon =document.getElementById('item-game-zon');
let move = 0;
let result = "";
const gameContent = document.getElementById('content');
const gameContentMove = document.getElementById('content-move');
const gameResult = document.getElementById('result-game');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const boxes = document.getElementsByClassName('box');
const winResult =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var arr = [null, null, null, null, null, null, null, null, null];
const gamePlay = document.getElementById('play-game');
const btnPlay = document.getElementsByClassName('btn-play');
let player = 0;
const btnStatistic =document.getElementById('statistic');
const statistic =document.getElementById('statistic-game');
const actionStatisyic =document.getElementsByClassName('statistic-play');
const buttonPlayPause = document.querySelector('.player-button');
const soundSwitchOn = document.getElementById('sound-switch-on');
const soundSwitchOff = document.getElementById('sound-switch-off');
const audio = new Audio ("audio/sound.mp3");

buttonPlayPause.addEventListener('click', onButtonPlayPauseClick);
function onButtonPlayPauseClick() {
    if (buttonPlayPause.classList.contains("play")) {
        buttonPlayPause.classList.add("pause");
        buttonPlayPause.classList.remove('play');
        soundSwitchOff.style.display = 'none';
        soundSwitchOn.style.display = 'inline';
        playAudio();
    } else {
        buttonPlayPause.classList.add("play");
        buttonPlayPause.classList.remove('pause');
        soundSwitchOn.style.display = 'none';
        soundSwitchOff.style.display = 'inline';
        
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


btnStatistic.addEventListener('click', e =>{
    statistic.style.display = 'block';
    getameToStorage ()
})
for (i=0;i<actionStatisyic.length;i++){
    actionStatisyic[i].addEventListener('click', e =>{
        if (e.target.dataset.save ==="save"){
            localStorage.clear();
            getameToStorage();
        }else if(e.target.dataset.save ==="statistic-closes"){
            statistic.style.display = 'none';
        }
   
    
    })
}

for (i=0;i<btnPlay.length;i++){
    btnPlay[i].addEventListener('click', e =>{
        if (e.target.dataset.players === "1"){
            gamePlay.style.display = 'none';
            player = 1;
        }else if (e.target.dataset.players === "2"){
            gamePlay.style.display = 'none';
            player = 2;
        }
    })
}


var concat = function(a,b,c){
    var concatResult = arr[a] + arr[b] + arr[c];
    if (concatResult === "XXX" || concatResult ==="OOO"){
        return concatResult
    }
    switch (concatResult){
        case "XXnull" : return ["X",c];
        case "XnullX" : return ["X",b];
        case "nullXX" : return ["X",a];
        case "OOnull" : return ["O",c];
        case "OnullO" : return ["O",b];
        case "nullOO" : return ["O",a];

    }
}

var botZero = function(){
    for (i = 0; i< winResult.length; i++){
        var resultZero = concat(winResult[i][0], winResult[i][1], winResult[i][2]);
        if (typeof resultZero === "object" && resultZero[0] === "O"){
            boxes[resultZero[1]].innerHTML = "O";
            arr[resultZero[1]] = "O";
            return; 
        }
    }
    for (i = 0; i< winResult.length; i++){
        var resultZero = concat(winResult[i][0], winResult[i][1], winResult[i][2]);
        if (typeof resultZero === "object" && resultZero[0] === "X"){
            boxes[resultZero[1]].innerHTML = "O";
            arr[resultZero[1]] = "O";
            return; 
        }
    }
  
    var tempArr = [];
    for (i=0; i<9; i++){
        if (arr[i]=== null){
            tempArr.push(i)
        }
    }

    if (tempArr.length != 0){
        var randomIndexTempArr = Math.floor(Math.random ()* tempArr.length);
        var randNull =tempArr[randomIndexTempArr];
        boxes[randNull].innerHTML = "O";
        arr[randNull] = "O";
    } else {
        move--;
    }
}

itemGameZon.addEventListener('click',e =>{
    if(e.target.className ==='box' && e.target.textContent === "" && player === 1){
        e.target.innerHTML = 'X';
        arr[e.target.dataset.num] = 'X';
        move++
        check();
        botZero();
        move++
        check();
    } else if (e.target.className ==='box' && e.target.textContent === "" && player === 2){
        e.target.innerHTML = move % 2 === 0 ? 'X' : 'O';
        move++;
        check();
    }

    if (result) {
        setTimeout(() => prepareResult(result),1000);
    }
})

function check(){
    for (i = 0; i< winResult.length; i++) {
        if (boxes[winResult[i][0]].innerHTML  == 'X'&& 
            boxes[winResult[i][1]].innerHTML == 'X'&& 
            boxes[winResult[i][2]].innerHTML == 'X')
        {
            boxes[winResult[i][0]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';
            boxes[winResult[i][1]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';
            boxes[winResult[i][2]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';

            result = " X win";
        } else if(
            boxes[winResult[i][0]].innerHTML =='O'&& 
            boxes[winResult[i][1]].innerHTML =='O'&& 
            boxes[winResult[i][2]].innerHTML =='O'
        ) {

            boxes[winResult[i][0]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';
            boxes[winResult[i][1]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';
            boxes[winResult[i][2]].style.backgroundColor = 'rgba(179, 168, 238, 0.8)';

            result = "O win" ;
        } else if(move === 9) {
            result = "Draw" ;
        }  
    }
}

function saveGameToStorage(result, move) {
    const gamesFromStorage = localStorage.getItem('games'); // 1. Получаем из localStorage сохранненные игры
    const games = gamesFromStorage ? JSON.parse(gamesFromStorage) : [];
    let date = new Date().toLocaleDateString();
    games.push({date,result,move});
    localStorage.setItem('games', JSON.stringify(games.slice(-10)));
}

function getameToStorage (){
    const gamesFromStorage = localStorage.getItem('games'); 
    const games = gamesFromStorage ? JSON.parse(gamesFromStorage) : [];
    let html ="";
     for(i=0; i<games.length; i++){
            html = `${html}<tr>
                                <td>${i + 1}</td> 
                                <td>${games[i].date}</td>
                                <td>${games[i].result}</td>
                                <td>${games[i].move}</td>
                            </tr>`;
    
     }
     const tBody = document.getElementById ('new-tr');
     tBody.innerHTML = html;
}


const prepareResult = winer =>{
    gameContent.innerHTML = `Result: ${winer}!`;
    gameContentMove.innerHTML = `Move: ${move}.`;
    saveGameToStorage(winer, move);
    gameResult.style.display = 'block';
}

const closeResult = () =>{
    gameResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click',closeResult);
btnClose.addEventListener('click', closeResult);
