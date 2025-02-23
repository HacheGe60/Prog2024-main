let deckId;
let card1;
let card2;
let computerScore = 0;
let playerScore = 0;
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-card");
const messageEl = document.getElementById("message");
const deckCountEl = document.getElementById("deck-count");
const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
playerEl.classList.add('none');
computerEl.classList.add("none");

async function handleClick() {
    const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/");
    const data = await res.json();
    deckId = data.deck_id;
    deckCountEl.textContent = getRemainingCards(data);
    computerScore = 0;
    playerScore = 0;
    playerEl.classList.add('none');
    computerEl.classList.add("none");
    messageEl.textContent = '';
    cardsContainer.children[1].innerHTML = '';
    cardsContainer.children[2].innerHTML = '';


    drawCardBtn.disabled = false;
}

async function drawCard() {
    const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`);
    const data = await res.json();
    cardsContainer.children[1].innerHTML = `<img src="${data.cards[0].image}" class="card">`;
    cardsContainer.children[2].innerHTML = `<img src="${data.cards[1].image}" class="card">`;
    card1 = data.cards[0];
    card2 = data.cards[1];
    messageEl.textContent = getCardWinner(card1, card2);
    deckCountEl.textContent = getRemainingCards(data);
    if (data.remaining === 0) {
        drawCardBtn.disabled = true;
        if (playerScore > computerScore) {
            messageEl.textContent = "You win the game!";
        } else if (playerScore < computerScore) {
            messageEl.textContent = "You lose the game!";
        } else {
            messageEl.textContent = "It's a draw!";
        }
    }
    playerEl.classList.remove('none');
    computerEl.classList.remove("none");

}

newDeckBtn.addEventListener("click", handleClick);
drawCardBtn.addEventListener("click", drawCard);

function getCardWinner(card1, card2) {
    const rankArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
    const card1ValueIndex = rankArray.indexOf(card1.value);
    const card2ValueIndex = rankArray.indexOf(card2.value);
    if (card1ValueIndex > card2ValueIndex) {
        computerScore++;
        computerEl.textContent = `Computer: ${computerScore}`;
    } else if (card1ValueIndex < card2ValueIndex) {
        playerScore++;
        playerEl.textContent = `You: ${playerScore}`;
    }
    return card1ValueIndex === card2ValueIndex ? "War!" : card1ValueIndex > card2ValueIndex ? "Computer wins!" : "You win!";
}

function getRemainingCards(data) {
    return `Remaining Cards: ${data.remaining}`;
}

