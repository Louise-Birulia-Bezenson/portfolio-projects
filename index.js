const itemGameZon =document.getElementById('item-game-zon');
let move = 0;
let result = "";
const gameContent = document.getElementById('content');
const gameResult = document.getElementById('result-game');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');



itemGameZon.addEventListener('click',e =>{
    if(e.target.className = 'box'){
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML ='O';
        move++;
        check();
    }
})

function check(){
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

    for (i = 0; i< winResult.length; i++){
        if (boxes[winResult[i][0]].innerHTML  == 'X'&& 
            boxes[winResult[i][1]].innerHTML == 'X'&& 
            boxes[winResult[i][2]].innerHTML == 'X'){
            result = " X win";
            prepareResult(result);
        } else if( boxes[winResult[i][0]].innerHTML =='O'&& 
                    boxes[winResult[i][1]].innerHTML =='O'&& 
                    boxes[winResult[i][2]].innerHTML =='O'){
            result = " O win" ;
            prepareResult(result);
        }
    }
}

const prepareResult = winer =>{
    gameContent.innerHTML = `Result${winer}!`;
    gameResult.style.display = 'block';
}

const closeResult = () =>{
    gameResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click',closeResult);
btnClose.addEventListener('click',closeResult);
