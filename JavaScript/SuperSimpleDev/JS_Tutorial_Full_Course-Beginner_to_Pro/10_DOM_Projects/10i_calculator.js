if (localStorage.getItem('calculation')) {
    calculation = localStorage.getItem('calculation');
} else {
    calculation = '';
}


function updateCalculation(value) {
    document.querySelector('.display').innerHTML = calculation += value;
    localStorage.setItem('calculation', calculation);
}


function reset() {
    calculation = '';
    localStorage.removeItem('calculation');
    document.querySelector('.display').innerHTML = calculation;
}

