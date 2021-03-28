const overlay = document.querySelector('#overlay');
const phrase = document.querySelector('#phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
const keyboard = document.querySelector('#qwerty');
const startScreen = document.querySelector('.start');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');

// attaches an event listener to the “Start Game” button to hide the start screen overlay
startButton.addEventListener('click', hideStartScreen);
keyboard.addEventListener('click', keyboardPress);

// number of guesses player has missed is set to 0
let missed = 0;

//array of song title phrases to be used in the game
const phrases = [
    "Smells Like Teen Spirit",
    "Edge of Seventeen",
    "A Day In The Life",
    "When Doves Cry",
    "Best of My Love",
    "You Should Be Dancing"
  ];

// returns a random phrase from an array


// adds the letters of a string to the display


// check if a letter is in the phrase

// check if the game has been won or lost


// missed guesses


// resets the game

// listen for the start game button to be pressed

// keyboard event listener
