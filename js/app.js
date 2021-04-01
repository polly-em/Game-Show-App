const phrase = document.querySelector('#phrase');
const keyboard = document.querySelector('#qwerty');
const button = document.getElementsByTagName('button');
const startButton = document.getElementById('overlay');
const buttonReset = document.getElementsByClassName('btn__reset');

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

function addPhrasetoDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    let letter = document.createTextNode(arr[i]);
    li.appendChild(letter);

    if ( li.innerText.indexOf(' ') >= 0) {
      li.className = 'space';
      document.getElementsByTagName('ul')[0].appendChild(li);
    } else {
      li.className = 'letter';
      document.getElementsByTagName('ul')[0].appendChild(li);
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);

// check if a letter is in the phrase

const checkLetter = (button) => {
  let matched = null;
  const letterList = document.querySelectorAll('li');
  for (i = 0; i < letterList.length; i++) {
      if (button === letterList[i].textContent.toLowerCase()) {
          letterList[i].classList.add('show');
          letterList[i].style.transition = '1s';
          letterList[i].style.color = 'white';
          matched = true;
      }
  }
  return matched;
};

qwerty.addEventListener("click", function(e) {
  const target = e.target;

  if ( target.nodeName == 'BUTTON'  ) {
    e.target.classList.add('chosen');
    e.target.disabled = true;

    if (checkLetter(target.innerText) === null ) {
      const scoreboard = document.getElementsByTagName('ol');
      const tries = document.getElementsByClassName('tries');
      scoreboard[0].removeChild(tries[0]);
      missed ++;
      checkWin();
    } else {
      checkWin();
    }

  }
});

// check if the game has been won or lost

function checkWin() {
  const letter = document.querySelectorAll('.letter');
  const show = document.querySelectorAll('.show');
  if (show.length == letter.length) {
    startButton.style.display = 'flex';
    startButton.className = 'win';
    buttonReset[0].innerText = 'Congratulations, you win!'

  } else if (missed === 5 ) {
    startButton.style.display = 'flex';
    startButton.className = 'lose';
    buttonReset[0].innerText = 'Sorry, you lost!';
  }
}
