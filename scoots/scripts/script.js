const hamBtn = document.getElementById("hamBtn")
const navBar = document.getElementById("navBar")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show")
    navBar.classList.toggle("show")
});