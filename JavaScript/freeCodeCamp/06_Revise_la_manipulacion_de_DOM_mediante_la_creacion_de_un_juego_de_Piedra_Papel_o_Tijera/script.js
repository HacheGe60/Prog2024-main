function getRandomComputerResult() {
	const options = ['Rock', 'Paper', 'Scissors'];
	return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
	return (
		(player === 'Rock' && computer === 'Scissors') ||
		(player === 'Scissors' && computer === 'Paper') ||
		(player === 'Paper' && computer === 'Rock')
	);
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();

	if (userOption === computerResult) {
		return `It's a tie! Both chose ${userOption}`;
	} else if (hasPlayerWonTheRound(userOption, computerResult)) {
		playerScore++;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else {
		computerScore++;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}

console.log(getRoundResults('Rock'));
console.log('Player Score: ', playerScore, 'Computer Score: ', computerScore);

const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn');

function showResults(userOption) {
	roundResultsMsg.innerText = getRoundResults(userOption);
	playerScoreSpanElement.innerText = playerScore;
	computerScoreSpanElement.innerText = computerScore;
	if (playerScore === 3 || computerScore === 3) {
		winnerMsgElement.innerText = `${
			playerScore === 3 ? 'Player' : 'Computer'
		} has won the game!`;

		resetGameBtn.style.display = 'block';
		optionsContainer.style.display = 'none';
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	playerScoreSpanElement.innerText = playerScore;
	computerScoreSpanElement.innerText = computerScore;
	roundResultsMsg.innerText = '';
	winnerMsgElement.innerText = '';
	resetGameBtn.style.display = 'none';
	optionsContainer.style.display = 'block';
}
