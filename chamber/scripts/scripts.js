const hamButton = document.querySelector("#hamButton")
const mainNavBar = document.querySelector("#mainNavBar")

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("show");
    mainNavBar.classList.toggle("show");
});

const visitsDisplay = document.querySelector(".visits");
const date = new Date();

function timeBetweenVisits(date) {
    if (localStorage.getItem("visit") !== "") {
        const today = date
        const lastDay = localStorage.getItem("visit")
        const dayDiff = date - lastDay
} else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions."
    localStorage.setItem("visit", JSON.stringify(date))
}

}

console.log()