document.addEventListener('click', function (e) {

    if (e.target.dataset.share) {
        console.log(e.target.dataset.share);
    } else if (e.target.dataset.like) {
        console.log(e.target.dataset.like);
    }

})

