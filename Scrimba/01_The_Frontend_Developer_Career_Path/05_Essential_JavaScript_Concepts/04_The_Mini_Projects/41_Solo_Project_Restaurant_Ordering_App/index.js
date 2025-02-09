import { menuArray } from "./data.js";

const containerEl = document.querySelector('#container');
const foodEl = document.querySelector('#food');
const orderEl = document.querySelector('#order');
const modalContentEl = document.querySelector('#modal-content');
const checkoutBtnEl = document.querySelector('#checkout-btn');
const payBtnEl = document.querySelector('#pay-btn');
const orderArr = [];
const totalArr = [];

menuArray.forEach(menu => {
    const foodItemEl = document.createElement('ul');
    foodItemEl.classList.add('foodItem');
    foodItemEl.innerHTML = `
        <li class="food-container" id="food-container">
            <div class="iconText">
                <span class="icon">${menu.emoji}</span>
                <span class="text">
                    <h3 class="name">${menu.name}</h3>
                    <p class="ingredients">${menu.ingredients.join(', ')}</p>
                    <p class="price">$ ${menu.price}</p>
                </span>
            </div>
            <button type="button" class="add-btn" id="menu-${menu.id}">+</button>
        </li>
    `;
    foodEl.appendChild(foodItemEl);
    const addBtnEl = document.querySelector(`#menu-${menu.id}`);

    addBtnEl.addEventListener('click', () => {
        handleClickOrder(menu.id);
    });
});

checkoutBtnEl.addEventListener('click', () => {
    orderEl.classList.remove('active');
    checkoutBtnEl.classList.remove('active');
    payBtnEl.classList.add('active');
    modalContentEl.classList.add('active');
    orderArr.length = 0;
    totalArr.length = 0;
    showPaymentMethodModal();
});

payBtnEl.addEventListener('click', () => {
    orderEl.classList.remove('active');
    checkoutBtnEl.classList.remove('active');
    payBtnEl.classList.remove('active');
    modalContentEl.classList.remove('active');
    showGreetings();
});



function showOrder() {
    const orderItemsEl = document.getElementById('order-items');
    orderItemsEl.innerHTML = '';
    orderEl.classList.add('active');
    checkoutBtnEl.classList.add('active');
    orderArr.forEach(order => {
        orderItemsEl.innerHTML += `<ul class="order-item" id="order-item">
                            <li class="order-name-btn" id="order-name-btn">
                                <p class="order-name" id="order-name">${order.name}</p>
                                <button class="remove-btn" id="remove-btn-${order.id}">remove</button>
                            </li>
                            <p class="order-price" id="order-price">$${order.price}</p>
                        </ul>`;
    });

    orderArr.forEach(order => {
        const removeBtnEl = document.querySelector(`#remove-btn-${order.id}`);
        removeBtnEl.addEventListener('click', () => {
            removeOrderItem(order.id);
        });
    });

    if (orderArr.length === 0) {
        orderEl.classList.remove('active');
        checkoutBtnEl.classList.remove('active');
    }
}

function getOrderArr(foodId) {
    orderArr.push(menuArray[foodId]);
}

function handleClickOrder(foodId) {
    getOrderArr(foodId);
    showOrder();
    getTotalPrice(foodId);
};

function getTotalPrice(foodId) {
    totalArr.push(menuArray[foodId].price);
    totalArr.reduce((total, price) => total + price);
    const totalEl = document.getElementById('total-amount');
    totalEl.textContent = `$ ${totalArr.reduce((total, price) => total + price)}`;
}

function removeOrderItem(foodId) {
    const itemIndex = orderArr.findIndex(item => item.id === foodId);
    if (itemIndex !== -1) {
        const [removedItem] = orderArr.splice(itemIndex, 1);
        const priceIndex = totalArr.indexOf(removedItem.price);
        if (priceIndex !== -1) {
            totalArr.splice(priceIndex, 1);
        }
        showOrder();
        updateTotalPrice();
    }
}

// Update the total price after removing an item
function updateTotalPrice() {
    const totalEl = document.getElementById('total-amount');
    totalEl.textContent = `$ ${totalArr.reduce((total, price) => total + price, 0)}`;
}

function showGreetings() {
    const greetName = document.getElementById('input-name').value;
    console.log(greetName);
    orderEl.classList.add('active');
    orderEl.innerHTML = `
                    <ul class="order-items" id="order-items">
                        <li class="greetings">
                            Thanks ${greetName}!<br>Your order is on its way! 
                        </li>    
                    </ul>`;
}


function showPaymentMethodModal() {
    const formEl = document.getElementById('form');
    formEl.classList.add('active');
    formEl.innerHTML = `
                         <h1 class="form-title">Enter card details</h1>
                        <div class="input-container">
                            <input class="input-pay" type="text" name="name" id="input-name"
                                placeholder="Enter your name" aria-label="Enter your name" required>
                            <input class="input-pay" type="text" name="cardNumber" id="cardNumber"
                                placeholder="Enter card number" aria-label="Enter your card number" required>
                            <input class="input-pay" type="text" name="cvv" id="cvv" placeholder="Enter CVV"
                                aria-label="Enter CVV" required>
                        </div>  
    `;

}


