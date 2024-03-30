const hamBtn = document.querySelector("#hamBtn")
const navBar = document.querySelector("#navBar")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle("show")
    navBar.classList.toggle("show")
});


// const joinButton = document.querySelector("#joinButton")

// joinButton.addEventListener("click", () => {
//     window.location.href="join.html"
// })