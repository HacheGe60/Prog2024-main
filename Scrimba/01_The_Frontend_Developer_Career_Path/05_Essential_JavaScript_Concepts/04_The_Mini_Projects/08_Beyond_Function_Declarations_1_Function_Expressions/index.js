/* Function Declaration */
function getSpendAlert(amount) {
    return `Warning! You just spent £${amount}!`;
}

console.log(getSpendAlert(100));

/* Function Expression (NOT HOISTED)*/
const getSpendAlert = function (amount) {
    return `Warning! You just spent £${amount}!`;
};