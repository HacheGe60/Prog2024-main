/* function speedWarning(speed) {
    return `You are going at ${speed} mph!`;
} */


/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/
/* const speedWarning = speed => `You are going at ${speed} mph!`;

console.log(speedWarning(60)); */

const speedWarning = (speedLimit, speed) => {
    if (speedLimit < speed) {
        return `You are going at ${speed} mph! ${speed - speedLimit} mph over the speed limit.`;
    }
};

console.log(speedWarning(30, 40))

