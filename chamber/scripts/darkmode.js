const body = document.querySelector("body")

modeButton.addEventListener("click", () => {
    body.classList.toggle("darkMode");

    if (logo.src.endsWith("images/webp-blue-logo.webp")) {
        logo.src = "images/webp-white-logo.webp";
    } else {
        logo.src = "images/webp-blue-logo.webp"
    }
});




