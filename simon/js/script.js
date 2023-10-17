const display = document.getElementById("display");
const counter = document.querySelector(".Score");
const padCursor = document.querySelectorAll(".pad");
const simon = document.getElementById("simon");

let arrayMemory = [];
let userInputArray = [];
let scoreCounter = 0;
let eventCountClicks = 0;
let level = 1;

// Whats timeout?
// setTimeout(()=> console.log("AAA!!"), 1000)  --> this will call AAA! after 1 second
// setInterval(()=> console.log("AAA!!"), 1000) --> this will call AAA! every 1 second

// function to generate random color
const colors = ["red", "yellow", "blue", "green"];
const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * 4);
  return colors[randomIndex];
};

resetGame();

function PlaySimon() {
  display.innerText = "";
  document.body.style.backgroundColor = "#cfcfcf";
  setTimeout(() => putrndColor(), 2000);
}

function onSuccess() {
  // make the simon circle light in green, and add to score + 1 and level +1 
  simon.classList.add('success');
  userInputArray = [];
  scoreCounter++;
  level++;
  counter.innerText = "Your Score : " + scoreCounter;
  setTimeout(() => {
    simon.classList.remove("success");
    setTimeout(() => {
      setTimeout(() => putrndColor(), 2000);
    }, 500);
  }, 1000);
}

function lightPreviousPads(functionToCallWhenFinished) {
  let i = 0;

  function lightNextPad() {
    // if we reach to the end of arrayMemory
    if (i === arrayMemory.length) {
      functionToCallWhenFinished()
    } else {
      const currentColor = arrayMemory[i];
      const currentPad = document.getElementById(currentColor);
      currentPad.classList.add("light");
      setTimeout(() => {
        // after 1 second we turn off the light of the pad
        currentPad.classList.remove("light");
        // then we want to wait 0.5 seconds, and then we call the next pad to light
        // because if we have the same color on a row we need to wait between them
        setTimeout(() => {
          i++;
          lightNextPad();
        }, 500);
      }, 1000);
    }
  }

  lightNextPad();
}

// this function needs to "light-up" a random color ${level} times
function putrndColor() {
  disablePads();
  lightPreviousPads(() => {
    const rndColor = generateRandomColor();
    arrayMemory.push(rndColor);
    const currentPad = document.getElementById(rndColor);
    currentPad.classList.add("light");
    setTimeout(() => {
      currentPad.classList.remove("light");
      setTimeout(() => {
        enablePads();
      }, 500);
    }, 1000);
  });
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

  // [red, red, blue, red] arraymemory
  // [red, red, blue, red] 
  const currentPosition = userInputArray.length -1 ; // 2
  
  if(userInputArray[currentPosition] !== arrayMemory[currentPosition]) {
    alert("you lost!");
    return resetGame();
  }

  if (userInputArray.length === arrayMemory.length) {
    // all elements match, we continue
    onSuccess();
  }
  enablePads();
}

function resetGame() {
  document.body.style.backgroundColor = "#666";
  display.innerText = "Play";
  counter.innerText = "Your Score : 0";
  scoreCounter = 0;
  eventCountClicks = 0;
  arrayMemory = [];
  userInputArray = [];
  display.addEventListener("click", PlaySimon);
  disablePads();
}
