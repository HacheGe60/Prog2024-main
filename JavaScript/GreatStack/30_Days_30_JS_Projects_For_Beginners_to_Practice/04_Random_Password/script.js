const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~{}|{}[]<>/=";

function createPassword() {
    let password = "";
    const allChars = upperCase + lowerCase + numbers + symbols;
    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomNum);
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

