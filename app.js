const select = document.querySelector("#numberOfRounds");
const play1Btn = document.querySelector("button.play1");
const play2Btn = document.querySelector("button.play2");
const reset = document.querySelector("button.reset");
const score = document.querySelector("h1");


const getNumberOfRounds = () => {
    const numberOfRounds = select.value;
    return numberOfRounds;
}

play1Btn.addEventListener("click", () => {
    updateScore("play1");
})

play2Btn.addEventListener("click", () => {
    updateScore("play2");
})



const updateScore = (player) => {
    const playerScore = document.querySelector(`span.${player}`);
    const currentScore = parseInt(playerScore.innerText);
    if (player == "play1") {
        var otherPlayerScore = document.querySelector("span.play2");
    } else {
        var otherPlayerScore = document.querySelector("span.play1");
    }

    if (parseInt(otherPlayerScore.innerText) < getNumberOfRounds() && currentScore < getNumberOfRounds()) {
        if (getNumberOfRounds() > currentScore + 1) {
            playerScore.innerText = currentScore + 1;
        } else if (getNumberOfRounds() == currentScore + 1) {
            playerScore.innerText = currentScore + 1;
            playerScore.style.color = "green";
            otherPlayerScore.style.color = "red";
        }
    }
}


reset.addEventListener("click", () => {
    const play1Score = document.querySelector("span.play1");
    const play2Score = document.querySelector("span.play2");
    play1Score.innerText = 0;
    play2Score.innerText = 0;
    play1Score.style.color = "black";
    play2Score.style.color = "black";
})