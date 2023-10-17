const display = document.getElementById("display");
const counter = document.querySelector(".Score");
const padCursor = document.querySelectorAll(".pad");
const arrayMemory = [];
const userInputArray = [];
let scoreConter = 0;
let eventCountClicks = 0;


display.innerText = "Click To Play";
counter.innerText ="Your Score : 0";
    display.addEventListener("click", PlaySimon);
    function PlaySimon() {
        padCursor.forEach(function (pad) {
          pad.classList.add("pointer");
        });
      
        display.innerText = "";
        document.body.style.backgroundColor = "#cfcfcf";
        setInterval(putRndColor,2000);
        setInterval(removerndColor,2500);
//   setInterval(putRndColor,3000);

  
}
function ifSuccess() {
    scoreConter++;
    counter.innerText ="Your Score : " + scoreConter;
}
function putRndColor () {

      if((arrayMemory.length+1 <= 3)){
        const rndcolor = Math.floor(Math.random() * 4);
        arrayMemory.push(rndcolor);
        padCursor[rndcolor].style.opacity = "0.9";
        padCursor[rndcolor].addEventListener("click",byEventListener);
        console.log(rndcolor, arrayMemory);
      }
}
function removerndColor() {

  const lastArray = arrayMemory.length - 1;
    for (let i = 0; i < padCursor.length; i++) {
        padCursor[i].style.opacity = "0.5";
        eventCountClicks = 0;
    }
}

function byEventListener(e) {
        e.preventDefault();
        eventCountClicks += 1;
        switch(eventCountClicks) {
            case 1:
                    ifSuccess();
                    console.log(' :', eventCountClicks);
                break;
            default:
                console.log("more then 2 clicks"+eventCountClicks);
        }
        eventCountClicks = 2    ;
}
