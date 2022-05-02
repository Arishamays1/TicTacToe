let squares = document.querySelectorAll(".squares")
console.log(squares)
let player = 'X'
let wrongMove = document.querySelector(".cheater");
let turn = document.querySelector(".turn")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")
let board = document.querySelector(".game-board")
let results = document.querySelector(".results")
let activeGame = true;
let moves= 0;


start.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("hide");
        activeGame = true
    })
})

reset.addEventListener("click", () => {
    squares.forEach(square => {
        square.innerHTML = ('');
        square.classList.remove('squarechange1');
        square.classList.remove("squarechange2");
        turn.innerHTML = 'Ready to play? Press $(".start") to begin!';
        results.innerHTML="Results";
        activeGame= false;
        moves= 0
    })
})
//function check()
$(document).ready(function(){
    start.click(function() {
        $(".hide").fadeIn(5000);
    });
},

function changePlayer() {
    if (player === "X") {
        player = "O"
        turn.innerHTML = "It's Player O's turn!"
    }
    else if (player === "O") {
        player = "X"
        turn.innerHTML = "It's Player X Turn!";
    }
},

squares.forEach(square => {
    square.addEventListener('click', () => {

        if (square.innerHTML === '' && activeGame === true){
            wrongMove.innerHTML = ""
            square.innerHTML = player;
            changePlayer();
            console.log('it worked')
            moves++;
            if(moves === 9){
                activeGame= false;
                results.innerHTML= "It's a tie!";
            }
            if (player === "X") {
                square.classList.add("squarechange1")
            } else {
                square.classList.add("squarechange2")
            }
        } else {
            wrongMove.innerHTML = "AHHT AHT AHT NO CHEATING!";
            console.log('works');
        }
        checkWinner()

    }
    )
}),

/*winningConditions= [
    [0,1,2],
    [3,4,5],
    [6, 7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
*/

//function checking(a, b, c) {
   // return (a == b && b == c && a !== '')
//}
//functions
function checkWinner() {
    //for x
    if ((squares[0].innerHTML == "X" && squares[1].innerHTML == "X" && squares[2].innerHTML == "X")
        || (squares[3].innerHTML == "X" && squares[4].innerHTML == "X" && squares[5].innerHTML == "X")
        || (squares[1].innerHTML == "X" && squares[4].innerHTML == "X" && squares[7].innerHTML == "X")
        || (squares[2].innerHTML == "X" && squares[5].innerHTML == "X"&& squares[8].innerHTML == "X")
        || (squares[0].innerHTML == "X"&& squares[4].innerHTML == "X" && squares[8].innerHTML == "X")
        || (squares[2].innerHTML == "X"&& squares[4].innerHTML == "X"&& squares[6].innerHTML == "X")
        ||(squares[6].innerHTML =="X"&& squares[7].innerHTML=="X"&&squares[8].innerHTML=="X")
        ||(squares[0].innerHTML =="X"&& squares[3].innerHTML=="X"&&squares[6].innerHTML=="X"))
        {
        results.innerHTML = "Player X wins!";
        turn.innerHTML=""
        activeGame = false;
    } //For O
    else if ((squares[0].innerHTML == "O"&& squares[1].innerHTML == "O"&& squares[2].innerHTML == "O")
        || (squares[3].innerHTML =="O"&&squares[4].innerHTML == "O"  && squares[5].innerHTML == "O")
        || (squares[1].innerHTML == "O"&& squares[4].innerHTML == "O"  &&squares[7].innerHTML == "O")
        || (squares[2].innerHTML == "O" &&squares[5].innerHTML == "O"&& squares[8].innerHTML == "O")
        || (squares[0].innerHTML == "O"&& squares[4].innerHTML == "O"&& squares[8].innerHTML == "O")
        || (squares[2].innerHTML == "O"&&squares[4].innerHTML == "O"&& squares[6].innerHTML == "O")
        ||(squares[6].innerHTML =="O" && squares[7].innerHTML =="O"&& squares[8].innerHTML=="O")
        ||(squares[0].innerHTML =="O" && squares[3].innerHTML =="O"&& squares[6].innerHTML=="O"))
        {
            results.innerHTML = "Player O wins!";
            activeGame = false;
            turn.innerHTML=""
                
        }})


