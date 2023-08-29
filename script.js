let color = 'black'
let click = true

function populateBoard(size) {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=>div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` // makes 16 columns. each column will be 1/16 of the width of the container 
    board.style.gridTemplaterRows = `repeat(${size}, 1fr)` //  makes 16 rows. each row will be 1/16 of the width of the container 

    let amount = size * size
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div')// as long as i is less than 256 created a fiv named square that is the color blue 
        square.addEventListener('mouseover', colorSquare) // adds an event listener. every time you mouse over a square the background c0lor changes to black
        square.style.backgroundColor = 'white' //sqaure original background color is white 
        board.insertAdjacentElement('beforeend',square)// appends the blue square to the board
        }
}

populateBoard(16)

function changeSize(input) { // will only let user input a value between 2 and 100
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display ='none'
        populateBoard(input)
    }
    else {
        document.querySelector('.error').style.display ='flex'
    }
}

function colorSquare() { // function will only draw a square if you click. if you dotn click it stops drawing
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = color
        }
    }
}
function changeColor(choice) { // function links to buttons in html. change ccolor function applies to each specific button
    color = choice
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=>(div.style.backgroundColor='white'))
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Coloring"
        }
        else {
            document.querySelector('.mode').textContent = "Mode: Not Coloring"
        }
    }
})