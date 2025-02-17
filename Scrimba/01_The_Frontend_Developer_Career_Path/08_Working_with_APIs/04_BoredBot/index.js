const buttonEl = document.querySelector('#get-activity');

buttonEl.addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.querySelector("#activity").textContent = data.activity;
            document.querySelector("h1").textContent = "Bored? Try to...";
            buttonEl.style.backgroundImage = "url('./images/happy-emoji.png')";
            buttonEl.style.backgroundSize = "cover";
            setTimeout(() => {
                buttonEl.style.backgroundImage = "none";
                buttonEl.style.backgroundSize = "cover";
            }, 3000);
        });

});