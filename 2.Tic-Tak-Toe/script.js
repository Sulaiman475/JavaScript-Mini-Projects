
let title = document.querySelector(".title");
let resetBtn = document.querySelector('.reset');
let boxes = document.querySelectorAll('.boxes');


///////////////////////////////  SOUNDS  //////////////////////////////////
let clcikSound = new Audio('./Assets/Click.mov');
let winnerSound = new Audio('./Assets/Winner.mov');
let wrongClick = new Audio('./Assets/wrong.wav');


let data = ["", "", "", "", "", "", "", "", ""];
let count = 0;
let lock = false;

///////////////////////////////  FUNCTION FOR DISPLAYING X, O  //////////////////////////////////
const toggle = (e, num) => {
    if(lock) return;

    if(count % 2 === 0 && data[num] == '') {
        e.innerHTML = `<img src='./Assets/cross.png' />`;
        data[num] = "x";
        count++;
        clcikSound.play();
        
    } else if( count % 2 !== 0 && data[num] == '') {
        e.innerHTML = `<img src='./Assets/circle.png' />`;
        data[num] = "o";
        count++;
        clcikSound.play();
    } else {
        wrongClick.play();
    }
    
    checkWin();
}


///////////////////////////////  CHECKING WINNER FUNCTION  //////////////////////////////////
const checkWin = () => {
    if( data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
        won(data[2])
    } 
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
        won(data[5])
    } 
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
        won(data[8])
    } 
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
        won(data[6])
    } 
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
        won(data[7])
    } 
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
        won(data[8])
    } 
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
        won(data[8])
    } 
    else if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
        won(data[2])
    } 
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
        won(data[6])
    }
}


///////////////////////////////  ON-WINING FUNCTION  //////////////////////////////////
const won = (winner) => {
    winnerSound.play();
    lock = true;
    if(winner === 'x') {
        title.innerHTML = `Congratulation: <img src='./Assets/cross.png' /> win`;
    } else {
        title.innerHTML = `Congratulation: <img src='./Assets/circle.png' /> win`;
    }
}

///////////////////////////////  RESETING FUNCTION  //////////////////////////////////
const handleReset = () => {
    lock = false;
    data = ["", "", "", "", "", "", "", "", ""];
    title.innerHTML = "React Tic-Tak-Toe";
    count = 0;
    boxes.forEach(e => {
        e.innerHTML = '';
    })
}


///////////////////////////////  EVENT LISTENERS  //////////////////////////////////
boxes.forEach((e, i) => {
    e.addEventListener('click',() => toggle(e, i));
})

resetBtn.addEventListener("click", handleReset);