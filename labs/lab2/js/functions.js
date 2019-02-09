//Code goes here
/* global $ */
var randomNumber = Math.floor(Math.random() * 99) +  1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var gameResults = document.querySelector('#gameResults');

var guessCount = 1;
var gamesWon = 0;
var gamesLost = 0;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
guessField.focus();
//document.getElementById("numberToGuess").innerHTML = randomNumber;

function checkGuess() {
    var userGuess = $(".guessField").val();
    if(guessCount === 1){
        $(guesses).text('Previous guess: ');
    }
    $(guesses).append(userGuess + ' ');
    
    if(userGuess == randomNumber){
        $(lastResult).text('Congratulations! You got it right!');
        lastResult.style.backgroundColor = 'green';
        $(lowOrHi).text('');
        gamesWon++;
        setGameOver();
    } else if (guessCount === 7) {
        $(lastResult).text('Sorry, you lost!');
        gamesLost++;
        setGameOver();
    } else {
        if(userGuess <randomNumber) {
            $(lastResult).text('Wrong!');
            lastResult.style.backgroundColor = 'red';
            $(lowOrHi).text('Last guess was too low!');
            guessCount++;
        } else if (userGuess > randomNumber && userGuess <= 99) {
            $(lastResult).text('Wrong!');
            lastResult.style.backgroundColor = 'red';
            $(lowOrHi).text("Last guess was too high!");
            guessCount++;
        } else {
            $(lastResult).text("That's out of bounds!");
        }
    }
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);
// $(".guessField").keyup(function(event) {
//     if (event.keyCode === 13) {
//         $(".guessSubmit").click();
//     }
// });
// $(".guessSubmit").click(function() {
//   checkGuess();
// });

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    $(gameResults).text('Games won: ' + gamesWon + ' Games Lost: ' + gamesLost);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    $(gameResults).text('');
    
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.style.display = 'none';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
}