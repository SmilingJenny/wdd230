const tempBtn = document.getElementById("tempBtn")
const tempBan = document.getElementById("tempBan")

tempBan.classList.add("open")

tempBtn.addEventListener("click", () => {
    tempBan.classList.remove("open")
})


const hamBtn = document.getElementById("hamBtn")
const navBar = document.getElementById("navBar")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show")
    navBar.classList.toggle("show")
});


const reserveBtn = document.getElementById("reserveBtn")

reserveBtn.addEventListener("click", () => {
    window.location.href="reservations.html"
})