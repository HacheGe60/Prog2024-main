function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    const costElement = document.querySelector('.js-total-cost');
    const cost = Number(inputElement.value);
    console.log(cost);
    if (cost <= 0) {
        costElement.innerHTML = `Error: cost cannot be less than $0.1`;
        costElement.style.color = 'red';
    } else {
        const cost = Number(inputElement.value);
        const total = cost >= 40 ? cost : cost + 10;
        costElement.innerHTML = `Shipping cost: $${total}`;
        costElement.style.color = 'black';
    }
}
function handleCostKey(event) {
    event.key === 'Enter' && calculateTotal();
}