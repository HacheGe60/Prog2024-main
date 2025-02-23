const getSchemeBtn = document.getElementById("get-scheme");
const form = document.getElementById("color-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const colorInput = document.getElementById("color-input").value.slice(1);
    const colorScheme = document.getElementById("color-scheme").value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${colorScheme}`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors;
            colors.forEach((color, index) => {
                const colorEl = document.getElementsByClassName("color")[index];
                colorEl.style.backgroundColor = `${color.hex.value}`;
                document.querySelectorAll(".hex-code")[index].textContent = `${color.hex.value}`;
            });
        });
});
