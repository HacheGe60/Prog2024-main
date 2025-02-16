/* Challenge: Give a textual code review.
Provide feedback using code comments. */

/* Let's pay closer attention to
code indentation and semicolon consistency */

/* JavaScript guidelines suggest using camelCase for
variable and function names, e.g., getDiscount, calculateFinalPrice */
function getdiscount(code) {
    /* Convert the value of code to uppercase before
    finding a matching promo code */
    /* Make this condition more concise without the !== comparison;
 only check if promo is truthy and active: promo && promo.isActive */
    /* Declare the promo variable with const to prevent reassignment */
    let promo = promos.find(promo => promo.code === code);
    /* Let's not include console.log statements in production code */
    console.log(promo);
    /* What do you think about returning the value using
    a ternary operator to make the function more concise? */
    if (promo !== undefined && promo.isActive) {
        /* Let's not include console.log statements in production code */
        console.log(`You get a ${promo.amount}% discount!`);
        return promo.amount / 100;
    }
    return 0;
}

function calculatefinalprice(basePrice, userCode) {
    /* Similar to getDiscount, consider omitting the else block and
  returning basePrice if the condition is false */
    if (userCode) {
        const discount = getdiscount(userCode);
        const finalPrice = basePrice - basePrice * discount;
        return finalPrice;
    } else {
        return basePrice;
    }
}


/* Move this array to the top of the file 
for better code organization */
const promos = [
    { code: 'TOTALLY10', amount: 10, isActive: true },
    { code: 'PLENTY20', amount: 20, isActive: false },
    { code: 'NIFTY50', amount: 50, isActive: true },
    { code: 'WHOPPING75', amount: 75, isActive: true },
    { code: 'YOLOFREE', amount: 100, isActive: false },
];

console.log();