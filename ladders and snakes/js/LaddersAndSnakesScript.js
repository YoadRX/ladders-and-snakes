let counter2 =  1;
let table2 = document.getElementById("table2");
table2.style.borderCollapse = "collapse";
let r = 10;


const specialBlocks = [2, 9, 15, 16, 18, 29, 50, 61, 72, 74, 96];
for (let i = 0; i < r; i++) {
    let tr = document.createElement("tr");
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
const player1 = document.createElement("img");
player1.className = "players";
player1.id = "player";
player1.src = "../img/solier.png";
let currentTdOfThePlayer = document.getElementById("block1");
currentTdOfThePlayer.appendChild(player1);

const player2 = document.createElement("img");
player2.className = "players";
player2.id = "computer";
player2.src = "../img/solier.png";
let currentTdOfThePlayer2 = document.getElementById("block1");
currentTdOfThePlayer2.appendChild(player2);

const playersArr = [player1, player2]
let playerIndex = 0
const moveBtn = document.getElementById("move-btn");

function getRundomNumber() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    // let randomNum = 100
    const oldDiceSrc = document.getElementById('dice-src');
    const diceVideo = document.getElementById("dice-video")
    if (oldDiceSrc) oldDiceSrc.remove()
    const diceSrc = document.createElement("source")
    diceSrc.type = "video/mp4"
    diceSrc.id = "dice-src"
    switch (randomNum) {
        case 1:
            diceSrc.src = "../img/one-dice.mp4"
            break;
        case 2:
            diceSrc.src = "../img/two-dice.mp4"
            break;
        case 3:
            diceSrc.src = "../img/three-dice.mp4"
            break;
        case 4:
            diceSrc.src = "../img/four-dice.mp4"
            break;
        case 5:
            diceSrc.src = "../img/five-dice.mp4"
            break;
        case 6:
            diceSrc.src = "../img/six-dice.mp4"
            break;

    }
    diceVideo.appendChild(diceSrc)
    diceVideo.load()
    diceVideo.play()
    return randomNum;
}


const whosTurn = document.getElementById("whos-turn");
function moveThePlayer() {

    moveBtn.disabled = true

    positionPlayer = Number(playersArr[playerIndex].parentElement.id.slice(5));
    positionPlayer = positionPlayer + getRundomNumber();
    if (positionPlayer > 100) {
        positionPlayer = 100;
    }

    function changePlayerOnScreen() {
        if (whosTurn.innerHTML === "Your Turn") {
            whosTurn.innerHTML = "Computer Turn"
        } else {
            whosTurn.innerHTML = "Your Turn"
        }
    }

    setTimeout(() => {
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
                currentTdOfThePlayer.appendChild(playersArr[playerIndex]);
                if (playerIndex === 0) playerIndex = 1
                else playerIndex = 0
                changePlayerOnScreen();
                if (playerIndex === 1) setTimeout(moveThePlayer, 500)
                else moveBtn.disabled = false
            }, 500)
        } else {
            if (positionPlayer === 100) {
                setTimeout(endGame, 500)
            } else {
                if (playerIndex === 0) playerIndex = 1
                else playerIndex = 0
                changePlayerOnScreen();
                if (playerIndex === 1) setTimeout(moveThePlayer, 500)
                else moveBtn.disabled = false
            }
        }
    }, 1300)

}
moveBtn.addEventListener("click", moveThePlayer);


const endGame = () => {
    alert(playersArr[playerIndex].id === "player" ? "You've won!" : "You've lost")
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const usersArray = JSON.parse(localStorage.getItem("usersArray"));
    const index = usersArray.findIndex(i => i.email = currentUser.email);

    if (playersArr[playerIndex].id === "player") {
        confetti.start()
        setTimeout(confetti.stop, 3000)
        currentUser.snakesAndLaddersScore.victories++
        usersArray[index].snakesAndLaddersScore.victories++;
    } else {
        currentUser.snakesAndLaddersScore.losses++
        usersArray[index].snakesAndLaddersScore.losses++;
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem("usersArray", JSON.stringify(usersArray))

    firstTd = document.getElementById("block1")
    firstTd.appendChild(player1)
    firstTd.appendChild(player2)
    moveBtn.disabled = false
}

