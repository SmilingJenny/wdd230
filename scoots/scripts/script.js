const tempBtn = document.getElementById("tempBtn")
const tempBan = document.getElementById("tempBan")

const hamBtn = document.getElementById("hamBtn")
const navBar = document.getElementById("navBar")

tempBan.classList.add("open")

tempBtn.addEventListener("click", () => {
    tempBan.classList.remove("open")
})

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show")
    navBar.classList.toggle("show")
});


// const joinButton = document.querySelector("#joinButton")

// joinButton.addEventListener("click", () => {
//     window.location.href="join.html"
// })