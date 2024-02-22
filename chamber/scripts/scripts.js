const hamButton = document.querySelector("#hamButton")
const mainNavBar = document.querySelector("#mainNavBar")

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show")
    mainNavBar.classList.toggle("show")
});

