const randomArray = [];
const userName = document.querySelector("#userName");
const userGuess = document.querySelector("#userGuess");
const resultMessage = document.querySelector("#resultMessage");
const Bulls = document.querySelector("#Bulls");
const Cows = document.querySelector("#Cows");
const PcGuess = document.querySelector("#PcGuess");
const elemHistory = document.querySelector("#showHistory");
const timeDisplay = document.querySelector("#time");
const guess = userGuess.value;
let startTime;
let guessArray;
let i;

function startGame() {
  clearHistory();
  pcCreateArrayWuthRandNumbers();
  startTime = new Date();
}

function clearHistory() {
  elemHistory.innerHTML = "";
  Bulls.innerHTML = "";
  Cows.innerHTML = "";
}

function pcCreateArrayWuthRandNumbers() {
  while (randomArray.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
}

function is2NumberSimilar() {
  const guess = userGuess.value;
  guessArray = guess.split("").map(Number);
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (guessArray[i] === guessArray[j]) {
        alert("Please choose other numbers. Two numbers cannot be the same.");
        return false;
      }
    }
  }
}

function isGameFinish() {
  const guess = userGuess.value;
  guessArray = guess.split("").map(Number);
  if (randomArray.join("") === guessArray.join("")) {
    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;
    resultMessage.innerHTML = `${guess} are the correct numbers! ${userName.value}, you win!`;
    timeDisplay.innerHTML = `Time taken: ${duration} seconds`;
  }
  console.log(guessArray);
}

function computeNumBulls() {
  let correctNumbers1 = 0;
  for (i = 0; i < 4; i++) {
    if (randomArray[i] === guessArray[i]) {
      correctNumbers1++;
    }
    Bulls.innerHTML = `you have ${correctNumbers1} bulls`;
    userGuess.value = "";
  }
}

function computeNumCows() {
  let correctNumbers2 = 0;
  for (let j = 0; j < 4; j++) {
    for (let z = 0; z < 4; z++) {
      if (randomArray[z] !== guessArray[z]) {
        if (randomArray[z] === guessArray[j]) {
          correctNumbers2++;
        }
      }
      Cows.innerHTML = `you have ${correctNumbers2} cows`;
      userGuess.value = "";
    }
  }
}

function showHistory() {
  elemHistory.innerHTML += `${guessArray} <br>`;
}

function ShowPcGuess() {
  PcGuess.innerHTML = `PC's Guess is ${randomArray}`;
}
