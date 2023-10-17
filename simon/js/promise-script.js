const display = document.getElementById("display");
const counter = document.querySelector(".Score");
const padCursor = document.querySelectorAll(".pad");
let arrayMemory = [];
let userInputArray = [];
let scoreCounter = 0;
let eventCountClicks = 0;
let level = 1;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const colors = ["red", "yellow", "blue", "green"];

const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * 4);
  return colors[randomIndex];
};

resetGame();

display.addEventListener("click", PlaySimon);
function PlaySimon() {
  display.innerText = "";
  document.body.style.backgroundColor = "#cfcfcf";
  setTimeout(() => putrndColor(), 2000);
}

function onSuccess() {
  userInputArray = [];
  scoreCounter++;
  level++;
  counter.innerText = "Your Score : " + scoreCounter;
  setTimeout(() => putrndColor(), 2000);
}

async function lightPreviousPads() {
  for (let i= 0; i<arrayMemory.length;i++) {
    const currentPad = document.getElementById(arrayMemory[i]);
    currentPad.classList.add("light");
    await delay(1000);
    currentPad.classList.remove('light');
    await delay(500);
  }
}

// this function needs to "light-up" a random color ${level} times
async function putrndColor() {
  disablePads();
  await lightPreviousPads();
  const rndColor = generateRandomColor();
  arrayMemory.push(rndColor);
  const currentPad = document.getElementById(rndColor);
  currentPad.classList.add("light");
  await delay(1000);
  enablePads();
}
// remove the light, allow the user to click the pads
function enablePads() {
  for (let i = 0; i < padCursor.length; i++) {
    padCursor[i].classList.remove("light");
    padCursor[i].classList.add("pointer", "active");
    padCursor[i].addEventListener("click", handleClickPad);
  }
}

function disablePads() {
  for (let i = 0; i < padCursor.length; i++) {
    padCursor[i].classList.remove("light", "pointer", "active");
    padCursor[i].removeEventListener("click", handleClickPad);
  }
}

function handleClickPad(e) {
  disablePads();

  console.log("touched!", e.target.id);

  userInputArray.push(e.target.id);
  if (userInputArray.length === arrayMemory.length) {
    // check if every element match
    for (let i = 0; i < arrayMemory.length; i++) {
      if (userInputArray[i] !== arrayMemory[i]) {
        alert("you lost!");
        return resetGame();
      }
    }
    // all elements match, we continue
    onSuccess();
  }
  enablePads();
}
function resetGame() {
  document.body.style.backgroundColor = "#666";
  display.innerText = "Click To Play";
  counter.innerText = "Your Score : 0";
  scoreCounter = 0;
  eventCountClicks = 0;
  arrayMemory = [];
  userInputArray = [];
  disablePads();
}
