let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
	if (!loader.hidden) {
		quoteContainer.hidden = false;
		loader.hidden = true;
	}
}

// Show New Quote

https: function newQuote() {
	showLoadingSpinner();
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// Check if Author filed is blank and replace it with 'Unknown'
	if (!quote.author) {
		authorText.innerText = 'Unknown';
	} else {
		authorText.innerText = quote.author;
	}
	// Check Quote length to determine styling
	if (quote.content.length > 120) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	removeLoadingSpinner();
	quoteText.innerText = quote.content;
}

// Get Quotes From API
async function getQuotes() {
	showLoadingSpinner();
	const apiUrl = 'https://api.quotable.io/quotes/random?limit=120';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch Error Here
	}
}

// On load
getQuotes();

// Tweet Quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
	window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);

twitterBtn.addEventListener('click', tweetQuote);
