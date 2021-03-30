const overlay = document.querySelector('#overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const phrase = document.querySelector('#phrase');
const keyboard = document.querySelector('#qwerty');
const button = document.getElementsByTagName('button');


// attaches an event listener to the “Start Game” button to hide the start screen overlay
startButton.addEventListener('click', () => {
  overlay.style.display = "none";
});

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

const getRandomPhraseAsArray = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i].split('');
};

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.textContent = arr[i].toLowerCase();
    phrase.appendChild(li);
    if (li.textContent === ' ') {
      li.className = 'space';
    } else {
      li.className = 'letter';

    }
  }
}
addPhraseToDisplay(randomPhrase);

// check if a letter is in the phrase
function checkLetter(button) {
  const letter = document.querySelectorAll('li');
  let match = null;
    for (let i = 0; i < letter.length; i++) {
      if (button === letter[i].textContent.toLowerCase()) {
        letter[i].classList.add('show');
        match = true;
      }
      
    };
  
    return match;
  };
// check if the game has been won or lost


// missed guesses


// resets the game

// listen for the start game button to be pressed


// keyboard event listener
