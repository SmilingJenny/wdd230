const body = document.querySelector("body")
const header = document.querySelector("header")
const heroImage = document.querySelector("#heroImage")
const main = document.querySelector("main")
const modeButton = document.querySelector("#modeButton")
const meetingBanner = document.querySelector("#meetingBanner")
const logo = document.querySelector("#logo");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
    body.classList.toggle("darkMode");
    header.classList.toggle("darkMode");
    // modeButton.classList.toggle("darkMode");
    heroImage.classList.toggle("darkMode");
    main.classList.toggle("darkMode");
    meetingBanner.classList.toggle("darkMode");
    footer.classList.toggle("darkMode");
    

    if (logo.src.endsWith("images/webp-blue-logo.webp")) {
        logo.src = "images/webp-white-logo.webp";
    } else {
        logo.src = "images/webp-blue-logo.webp"
    }
});




