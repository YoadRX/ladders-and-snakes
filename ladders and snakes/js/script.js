let counter2 = 1;
let table2 = document.getElementById("table2");
table2.style.borderCollapse = "collapse";
let r = 10;
const specialBlocks = [2, 9, 15, 16, 18, 29, 50, 61, 72, 74, 96];
for (let i = 0; i < r; i++) {
    let tr = document.createElement("tr");
    // tr.id = +i+1"tr";
    table2.appendChild(tr);
    for (let j = 0; j < r; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.className = "blocks";
        td.style.height = "65.5px";
        td.style.width = "65px";
        td.style.backgroundColor = "transparent";
        counter2++;
    }
}
let tds = document.getElementsByClassName("blocks");
for (j = 100; j > 0; j--) {
    const tens = Math.floor((j - 1) / 10);
    if (tens % 2 !== 0) {
        tds[100 - j].id = "block" + j;
    } else {
        const ones = j - tens * 10;
        const num = 11 - ones + tens * 10;
        tds[100 - j].id = "block" + num;
    }
}
let positionPlayer1 = 1;
const player1 = document.createElement("img");
player1.className = "players";
player1.id = "player1";
player1.src = "../img/solier.png";
let currentTdOfThePlayer = document.getElementById("block" + positionPlayer1);
currentTdOfThePlayer.appendChild(player1);

let positionPlayer2 = 1;
const player2 = document.createElement("img");
player2.className = "players";
player2.id = "player2";
player2.src = "../img/solier.png";
let currentTdOfThePlayer2 = document.getElementById("block" + positionPlayer2);
currentTdOfThePlayer2.appendChild(player2);

const playersArr = [player1, player2]
let playerIndex = 0

const moveBtn = document.getElementById("move-btn");

function getRundomNumber() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
}

function moveThePlayer() {

    positionPlayer = Number(playersArr[playerIndex].parentElement.id.slice(5));
    positionPlayer = positionPlayer + getRundomNumber();
    if (positionPlayer > 100) {
        positionPlayer = 100;
    }
    currentTdOfThePlayer = document.getElementById("block" + positionPlayer);
    currentTdOfThePlayer.appendChild(playersArr[playerIndex]);

    if (specialBlocks.includes(positionPlayer)) {
        switch (positionPlayer) {
            case 2:
                positionPlayer = 37;
                // moveThePlayer;
                break;
            case 9:
                positionPlayer = 14;
                break;
            case 15:
                positionPlayer = 82;
                break;
            case 16:
                positionPlayer = 54;
                break;
            case 18:
                positionPlayer = 6;
                break;
            case 29:
                positionPlayer = 7;
                break;
            case 50:
                positionPlayer = 91;
                break;
            case 61:
                positionPlayer = 16;
                break;
            case 72:
                positionPlayer = 47;
                break;
            case 74:
                positionPlayer = 87;
                break;
            case 96:
                positionPlayer = 76;
                break;
        }
        setTimeout(() => {
            currentTdOfThePlayer = document.getElementById("block" + positionPlayer);
            if(playerIndex == 0){
                currentTdOfThePlayer.appendChild(playersArr[playerIndex +1]);
            }
            if(playerIndex == 1){
                currentTdOfThePlayer.appendChild(playersArr[playerIndex -1]);
            }
        }, 500)

    }
    if (playerIndex === 0) playerIndex = 1
    else playerIndex = 0
}
moveBtn.addEventListener("click", moveThePlayer);

// function getId(id){

// }

// const id=getId(19)
// const rowNumber=Math.floor((id-1)/10)
// if(rowNumber%2!=0) {
//     const left=rowNumber*10+1
//     const right=(rowNumber+1)*10
//     return left+right-1
// }
// else return id;
