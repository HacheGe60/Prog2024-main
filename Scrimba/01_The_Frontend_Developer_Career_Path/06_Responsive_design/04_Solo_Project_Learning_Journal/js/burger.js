const burgerEl = document.querySelector('#burger');
const navbarEl = document.querySelector('#navbar');

burgerEl.addEventListener('click', showNav);

function showNav() {
    burgerEl.classList.toggle('none');
    navbarEl.style.display = 'flex';
}