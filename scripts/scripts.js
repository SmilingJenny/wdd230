const hamButton = document.querySelector("#hamButton")
const mainNavBar = document.querySelector("#mainNavBar")

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    mainNavBar.classList.toggle("show");
});


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first Visit 🥳 Welcome!";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);