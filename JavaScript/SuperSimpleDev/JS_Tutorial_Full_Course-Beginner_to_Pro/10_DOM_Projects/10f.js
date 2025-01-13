function toggleOffButtons(className) {
    const button = document.querySelector(className);
    if (!button.classList.contains('isToggled')) {
        button.classList.add('isToggled');
    } else {
        button.classList.remove('isToggled');
    }
}