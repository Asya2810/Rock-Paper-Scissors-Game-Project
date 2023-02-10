let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randonNumber = Math.floor(Math.random() * 3);
    return choices[randonNumber];
}

function convertToWord(letter) {
    if (letter ==="r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, ComputerChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(ComputerChoice)}. You win!`;
}
function lose(userChoice, ComputerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(ComputerChoice)}. You lost!`;
}
function draw(userChoice, ComputerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(ComputerChoice)}. It's a draw!`;
}

function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    console.log("user choice => " + userChoice);
    switch (userChoice + ComputerChoice) {
        case "rs":
        case "pr": 
        case "sp": 
        win(userChoice, ComputerChoice);
       
        break;
        case "rp": 
        case "ps": 
        case "sr": 
        lose(userChoice, ComputerChoice);
        
        break;
        case "rr": 
        case "pp": 
        case "ss": 
        draw(userChoice, ComputerChoice);
        
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
     game("r");
    })

    paper_div.addEventListener('click', function() {
     game("p");
    })

    scissors.addEventListener('click', function() {
     game("s");
})
}

main();