// document.getElementById("count").innerText = 5;

const dateEl = document.getElementById("date-el");
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const perHourEl = document.getElementById("perHour-el");


let count = 0;
let date = new Date();
let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour1 = 8;
let hour2 = 9;

dateEl.innerText = day + '/' + month + '/' + year;
function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    saveEl.innerHTML += `<p>${hour1 + 1}:00 - ${hour2 + 1}:00 Sales: ${count}</p>`;
    hour1++;
    hour2++;
    count = 0;
    countEl.innerText = count;
}

let name = 'Horacio.';
let greeting = 'Hi, my name is ';

let myGreeting = greeting + name;

console.log(myGreeting);