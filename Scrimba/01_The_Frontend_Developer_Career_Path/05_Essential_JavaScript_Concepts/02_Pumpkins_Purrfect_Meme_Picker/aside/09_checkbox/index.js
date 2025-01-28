const continueBtn = document.getElementById('continue-btn');
const acceptTerms = document.getElementById('accept-terms');
const email = document.getElementById('email');

continueBtn.addEventListener('click', function () {
    if (acceptTerms.checked) {
        console.log('Terms accepted!');
    } else {
        console.log('Please accept the terms and conditions');
    }

    if (email.checked) {
        console.log('mail accepted');
    } else {
        console.log('mail not accepted');
    }
});