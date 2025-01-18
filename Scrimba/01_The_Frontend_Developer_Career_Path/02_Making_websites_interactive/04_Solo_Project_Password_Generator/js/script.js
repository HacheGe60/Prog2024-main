const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?',
    '/'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const containerEl = document.querySelector("#container");
const darkLightBtnEl = document.querySelector("#dark-light-btn");
const darkLightIconEl = document.querySelector("#dark-light-icon");
const colorTitleEl = document.querySelector(".colorTitle");
const descriptionEl = document.querySelector(".description");
const lengthEl = document.querySelector("#length");
const lengthTitleEl = document.querySelector("#lengthTitle");
const generateBtnEl = document.querySelector("#generateBtn");
const symbolsEl = document.querySelector("#symbols");
const numbersEl = document.querySelector("#numbers");
const upperCaseEl = document.querySelector("#uppercase");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");

darkLightBtnEl.addEventListener("click", () => {
    containerEl.classList.toggle("light");
    darkLightIconEl.classList.toggle("fa-moon");
    darkLightIconEl.classList.toggle("fa-sun");

    if (containerEl.classList.contains("light")) {
        colorTitleEl.style.color = "#10b981";
        descriptionEl.style.color = "#6b7280";
    } else {
        colorTitleEl.style.color = "#4adf86";
        descriptionEl.style.color = "#d5d4d8";
    }

});

lengthEl.addEventListener("input", () => {
    lengthTitleEl.textContent = `Password Length: ${lengthEl.value}`;
});

generateBtnEl.addEventListener("click", () => {
    const passwordLength = lengthEl.value;
    const hasSymbols = symbolsEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasUpper = upperCaseEl.checked;

    if (hasSymbols && hasNumbers && hasUpper) {
        generatePassword1(passwordLength, symbols, numbers, upperCase);
        generatePassword2(passwordLength, symbols, numbers, upperCase);
    } else if (hasSymbols && hasNumbers) {
        generatePassword1(passwordLength, symbols, numbers);
        generatePassword2(passwordLength, symbols, numbers);
    } else if (hasSymbols && hasUpper) {
        generatePassword1(passwordLength, symbols, upperCase);
        generatePassword2(passwordLength, symbols, upperCase);
    } else if (hasNumbers && hasUpper) {
        generatePassword1(passwordLength, numbers, upperCase);
        generatePassword2(passwordLength, numbers, upperCase);
    } else if (hasSymbols) {
        generatePassword1(passwordLength, symbols);
        generatePassword2(passwordLength, symbols);
    } else if (hasNumbers) {
        generatePassword1(passwordLength, numbers);
        generatePassword2(passwordLength, numbers);
    } else if (hasUpper) {
        generatePassword1(passwordLength, upperCase);
        generatePassword2(passwordLength, upperCase);
    } else {
        generatePassword1(passwordLength);
        generatePassword2(passwordLength);
    }
});

function generatePassword1(passwordLength, symbols, numbers, upperCase) {
    let characters = lowerCase;
    if (symbols) {
        characters = characters.concat(symbols);
    }
    if (numbers) {
        characters = characters.concat(numbers);
    }
    if (upperCase) {
        characters = characters.concat(upperCase);
    }

    let password1 = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex];
    }

    console.log(password1);

    return password1El.textContent = password1;
}

function generatePassword2(passwordLength, symbols, numbers, upperCase) {
    let characters = lowerCase;
    if (symbols) {
        characters = characters.concat(symbols);
    }
    if (numbers) {
        characters = characters.concat(numbers);
    }
    if (upperCase) {
        characters = characters.concat(upperCase);
    }

    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex];
    }

    return password2El.textContent = password2;
}