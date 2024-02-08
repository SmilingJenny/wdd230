const header = document.querySelector("header")
const heroImage = document.querySelector("#heroImage")
const main = document.querySelector("main")
const modeButton = document.querySelector("#modeButton")

modeButton.addEventListener("click", () => {
    header.classList.toggle("darkMode");
    heroImage.classList.toggle("darkMode");
    main.classList.toggle("darkMode");
});