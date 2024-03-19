const body = document.querySelector("body")
const header = document.querySelector("header")
const meetingBanner = document.querySelector("#meetingBanner")
const heroImage = document.querySelector("#heroImage")
const main = document.querySelector("main")
const footer = document.querySelector("footer");
const modeButton = document.querySelector("#modeButton")

modeButton.addEventListener("click", () => {
    body.classList.toggle("darkMode");
    header.classList.toggle("darkMode");
    meetingBanner.classList.toggle("darkMode");
    heroImage.classList.toggle("darkMode");
    main.classList.toggle("darkMode");
    footer.classList.toggle("darkMode");
    

    if (logo.src.endsWith("images/webp-blue-logo.webp")) {
        logo.src = "images/webp-white-logo.webp";
    } else {
        logo.src = "images/webp-blue-logo.webp"
    }
});




