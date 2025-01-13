let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let intervalId;

jsResetScoreButton = document.querySelector('#js-reset-score-button');
jsAutoPlayButton = document.querySelector('#js-auto-play-button');

jsResetScoreButton.addEventListener('click', resetScore);
jsAutoPlayButton.addEventListener('click', autoPlay);

document.body.addEventListener('keydown', function (event) {
	if (event.key === 'a' || event.key === 'A') {
		autoPlay();
	} else if (event.key === 'Backspace') {
		resetScore();
	}
});

function resetScore() {
	const confirmationElement = document.querySelector('#js-confirmation');
	confirmationElement.innerHTML = `<p>Are you sure you want to reset the score?</p><button id="js-yes">Yes</button><button id="js-no">No</button>`;

	document.querySelector('#js-yes').addEventListener('click', function () {
		confirmationElement.innerHTML = '';
		score.wins = 0;
		score.losses = 0;
		score.ties = 0;
		localStorage.removeItem('score');
		updateScoreElement();
		document.querySelector('.js-moves').innerHTML = '';
		document.querySelector('.js-result').innerHTML = '';
	});
	document.querySelector('#js-no').addEventListener('click', function () {
		confirmationElement.innerHTML = '';
	});
}

function autoPlay() {
	if (!isAutoPlaying) {
		intervalId = setInterval(function () {
			const playerMove = pickComputerMove();
			playGame(playerMove);
		}, 1000);
		isAutoPlaying = true;
		jsAutoPlayButton.innerHTML = 'Stop Playing';
	} else {
		clearInterval(intervalId);
		isAutoPlaying = false;
		jsAutoPlayButton.innerHTML = 'Auto Play';
	}
}

function playGame(playerMove) {
	const computerMove = pickComputerMove();

	let result = '';

	if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You lose.';
		} else if (computerMove === 'paper') {
			result = 'You win.';
		} else if (computerMove === 'scissors') {
			result = 'Tie.';
		}
	} else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			result = 'You win.';
		} else if (computerMove === 'paper') {
			result = 'Tie.';
		} else if (computerMove === 'scissors') {
			result = 'You lose.';
		}
	} else if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie.';
		} else if (computerMove === 'paper') {
			result = 'You lose.';
		} else if (computerMove === 'scissors') {
			result = 'You win.';
		}
	}

	if (result === 'You win.') {
		score.wins += 1;
	} else if (result === 'You lose.') {
		score.losses += 1;
	} else if (result === 'Tie.') {
		score.ties += 1;
	}

	localStorage.setItem('score', JSON.stringify(score));

	updateScoreElement();

	document.querySelector('.js-result').innerHTML = result;

	document.querySelector(
		'.js-moves'
	).innerHTML = `You <img src="./images/${playerMove}-emoji.png" alt="" class="move-icon"> <img
    src="./images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
}

function updateScoreElement() {
	document.querySelector(
		'.js-score'
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
	const randomNumber = Math.random();

	let computerMove = '';

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'scissors';
	}

	return computerMove;
}
