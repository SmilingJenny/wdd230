const header = document.querySelector("header")
const heroImage = document.querySelector("#heroImage")
const main = document.querySelector("main")
const modeButton = document.querySelector("#modeButton")

const logo = document.querySelector("#logo");

modeButton.addEventListener("click", () => {
    header.classList.toggle("darkMode");
    modeButton.classList.toggle("darkMode");
    heroImage.classList.toggle("darkMode");
    main.classList.toggle("darkMode");

    console.log(logo.src)

    if (logo.src.endsWith("images/cropped-provo-logo.png")) {
        logo.src = "images/cropped-white-logo.png";
    } else {
        logo.src = "images/cropped-provo-logo.png"
    }
});



