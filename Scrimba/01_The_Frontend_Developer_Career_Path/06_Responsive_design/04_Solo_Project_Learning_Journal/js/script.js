const viewBtnEl = document.querySelector('#view-btn');
const blog3El = document.querySelector('#blog-3');
const blog4El = document.querySelector('#blog-4');
const blog5El = document.querySelector('#blog-5');
const blog6El = document.querySelector('#blog-6');
const blog7El = document.querySelector('#blog-7');
const blog8El = document.querySelector('#blog-8');
const blog9El = document.querySelector('#blog-9');

viewBtnEl.addEventListener('click', handleShowBtn);



function handleShowBtn() {
    blog3El.style.marginBottom === '1em' ? blog3El.style.marginBottom = '2em' : blog3El.style.marginBottom = '1em';
    blog9El.style.marginBottom === '1em' ? blog6El.style.marginBottom = '2em' : blog9El.style.marginBottom = '1em';
    blog4El.classList.toggle('none');
    blog5El.classList.toggle('none');
    blog6El.classList.toggle('none');
    blog7El.classList.toggle('none');
    blog8El.classList.toggle('none');
    blog9El.classList.toggle('none');
    viewBtnEl.textContent === 'view more' ? viewBtnEl.textContent = 'view less' : viewBtnEl.textContent = 'view more';
    viewBtnEl.style.color = 'black';
}