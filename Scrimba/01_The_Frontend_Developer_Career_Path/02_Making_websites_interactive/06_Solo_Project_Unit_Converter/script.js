const userInputValueEl = document.getElementById("userInputValue");
const convertBtnEl = document.getElementById("convert");
const lengthResultEl = document.getElementById("lengthResult");
const volumeResultEl = document.getElementById("volumeResult");
const massResultEl = document.getElementById("massResult");
const darkLightBtnEl = document.getElementById("dark-light-btn");
const darkLightIconEl = document.getElementById("dark-light-icon");
const resultsEl = document.getElementById("results");

darkLightBtnEl.addEventListener("click", () => {
    resultsEl.classList.toggle("dark");
    if (darkLightIconEl.classList.contains("fa-moon")) {
        darkLightIconEl.classList.remove("fa-moon");
        darkLightIconEl.classList.add("fa-sun");
    } else {
        darkLightIconEl.classList.remove("fa-sun");
        darkLightIconEl.classList.add("fa-moon");
    }
});


convertBtnEl.addEventListener("click", () => {
    const value = userInputValueEl.value;
    const feet = value * 3.281;
    const meters = value / 3.281;
    const gallon = value * 0.264;
    const liter = value / 0.264;
    const kilogram = value * 2.204;
    const pound = value / 2.204;

    lengthResultEl.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`;
    volumeResultEl.textContent = `${value} liters = ${gallon.toFixed(3)} gallons | ${value} gallons = ${liter.toFixed(3)} liters`;
    massResultEl.textContent = `${value} kilograms = ${pound.toFixed(3)} pounds | ${value} pounds = ${kilogram.toFixed(3)} kilograms`;

    userInputValueEl.value = "";
});