const viewMoreEl = document.querySelector('#viewMore');
const viewLessEl = document.querySelector('#viewLess');
const blog3El = document.querySelector('#blog-3');
const blog4El = document.querySelector('#blog-4');
const blog5El = document.querySelector('#blog-5');
const blog6El = document.querySelector('#blog-6');

viewMoreEl.addEventListener('click', showMore);
viewLessEl.addEventListener('click', showLess);

function showMore() {
    blog3El.style.marginBottom = '2em';
    blog6El.style.marginBottom = '1em';
    blog4El.classList.remove('none');
    blog5El.classList.remove('none');
    blog6El.classList.remove('none');
    viewMoreEl.classList.add('none');
    viewLessEl.classList.remove('none');
}

function showLess() {
    blog3El.style.marginBottom = '1em';
    blog4El.classList.add('none');
    blog5El.classList.add('none');
    blog6El.classList.add('none');
    viewMoreEl.classList.remove('none');
    viewLessEl.classList.add('none');
}