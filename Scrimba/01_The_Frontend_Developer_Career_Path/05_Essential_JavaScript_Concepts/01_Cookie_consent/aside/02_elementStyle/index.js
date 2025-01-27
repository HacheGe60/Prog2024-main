const revealBtn = document.getElementById('reveal-btn');
const answer = document.getElementById('answer');
const question = document.getElementById('question');

revealBtn.addEventListener('click', function () {
    answer.style.display = "block";
    revealBtn.style.display = "none";
    question.style.color = "#1434a4";
    question.style.backgroundColor = "#68e1fd";
});