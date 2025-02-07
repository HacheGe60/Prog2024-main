const filmInput = document.getElementById('film-input');
const addBtn = document.getElementById('add-btn');
const filmList = document.getElementById('film-list');
const filmItem = document.getElementById('film-item');

addBtn.addEventListener('click', function () {
    filmList.innerText += `
        ${filmInput.value}
        `;
    filmInput.value = '';
});
