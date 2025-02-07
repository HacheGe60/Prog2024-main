/* const getSpendAlert = function (amount) {
    return `Warning! You just spent £${amount}!`;
}; */

/* const getSpendAlert = (amount) => {
    return `Warning! You just spent £${amount}!`;
}; */

const getSpendAlert = amount => {
    return `Warning! You just spent £${amount}!`;
};

const getSpendAlert2 = () => 'Warning! You just spent some money.';

const getSpendAlert3 = (name, amount) => `Warning! Hey ${name}! You just spent $${amount}!`;

console.log(getSpendAlert(150));
console.log(getSpendAlert2());
console.log(getSpendAlert3('Horacio', 200000));