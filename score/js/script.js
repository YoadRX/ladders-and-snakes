const points = [];

const scoreArray = localStorage.getItem("ScoreArray");
// Sort the numbers in descending order:
const valueScoreSimon = JSON.parse(scoreArray);
for(let i = 0; i < valueScoreSimon.length; i++){
    points.push(valueScoreSimon[i]);
}
const sortedPoints = points.sort();
console.log('sortedPoints :', sortedPoints);
const lastHighsetPoints = sortedPoints.pop();
const createTable = document.querySelector(".tbody-games")
createTable.innerHTML += "<tr><td>Simon</td><td>2 hour</td><td>"+lastHighsetPoints+" Points</td></tr>";

