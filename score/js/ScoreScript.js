const points = [];

let key;
var scoreArray;
let usersIEM =[];
let currentIEM =[];
const usersArray = localStorage.getItem("usersArray");
const currentUser2 = localStorage.getItem("currentUser") 
console.log('currentUser :', currentUser2);
usersIEM = JSON.parse(usersArray);
currentIEM = JSON.parse(currentUser2).email;
let createTable = document.querySelector(".tbody-Simon")



for(key in usersIEM){
    if(usersIEM[key].email === currentIEM){
     points[key] = usersIEM[key].score;
        console.log(points);
    }
  }
        // Sort the numbers in descending order:
        if(points === 0 || points === null || points[key] === undefined || points === undefined || points[key] === null){
          createTable.innerHTML += "<tr><td>Simon</td><td>2 hour</td><td>0 Points</td></tr>";
        }
        else{
          console.log('points :', points);
          const sortedPoints = points[key].sort();  
        console.log('sortedPoints :', sortedPoints);
        const lastHighsetPoints = sortedPoints.pop();
        createTable.innerHTML += "<tr><td>Simon</td><td>2 hour</td><td>"+lastHighsetPoints+" Points</td></tr>";
        }



const victory = document.getElementById("victory");
const lose = document.getElementById('lose');
const currentUser3 = JSON.parse(currentUser2);
victory.innerHTML = currentUser3.snakesAndLaddersScore.victories+ " times";
lose.innerHTML= currentUser3.snakesAndLaddersScore.losses+" times"
const numOfVic = currentUser3.snakesAndLaddersScore.victories;
const numOfLos = currentUser3.snakesAndLaddersScore.losses;
const sum = numOfLos + numOfVic;
const percentageOfVic = (numOfVic/sum) * 100;
console.log(percentageOfVic + "%");
const victoryPercentage = document.getElementById('percentage');
victoryPercentage.innerHTML = percentageOfVic + "%";



