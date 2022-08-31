let color = 'black';
let click = true;

function makeBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size
    for(let i = 0; i<amount; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend',square);
}
}

makeBoard(16);

function changeSize(input){
    if (input >= 2 || input <= 100){
        makeBoard(input);
    } else {
        console.log("not an acceptable amount");
    }
}

function colorSquare(){
    if (click){
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;

}

function resetBoard(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", (e) => {
   if(e.target.tagName != 'BUTTON'){
    click = !click;
    if (click){
        document.querySelector('.drawMode').textContent = "Mode: Drawing is on";
    } else {
        document.querySelector('.drawMode').textContent = "Mode: Drawing is off";
    }
   }
});