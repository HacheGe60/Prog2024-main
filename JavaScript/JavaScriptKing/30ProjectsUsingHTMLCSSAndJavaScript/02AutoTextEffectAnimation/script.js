const containerEl = document.querySelector('.container');

const careers = [
	'Youtuber',
	'Web Developer',
	'Web Designer',
	'Video Editor',
	'Content Writer',
];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
	characterIndex++;
	containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
		0,
		characterIndex
	)}</h1>`;

	if (characterIndex === careers[careerIndex].length) {
		careerIndex++;
		characterIndex = 0;
	}

	if (careerIndex === careers.length) careerIndex = 0;
	setTimeout(updateText, 300);
}
