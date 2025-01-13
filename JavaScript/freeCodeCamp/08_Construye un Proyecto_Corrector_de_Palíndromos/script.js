const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isPalindrome = (str) => {
	const text = textInput.value;
	const regex = /[\s_(),\.\-:]/g;
	const textRegex = text.replace(regex, '').toLowerCase();
	console.log(textRegex);
	const textRegexInv = textRegex.split('').reverse().join('');
	console.log(textRegexInv);
	if (text === '') {
		alert('Please input a value');
	} else if (textRegex === textRegexInv) {
		result.innerText = `${text} is a palindrome`;
	} else {
		result.innerText = `${text} is not a palindrome`;
	}
};

checkBtn.addEventListener('click', isPalindrome);
