document.addEventListener('click', function (e) {

    if (e.target.dataset.shareIcon) {
        console.log(e.target.dataset.shareIcon);
    } else if (e.target.dataset.like) {
        console.log(e.target.dataset.like);
    }

})

