const passLabel = document.querySelector("#passwordLabel")
const pass = document.querySelector("#password")
const rePass = document.querySelector("#re-password")
const message = document.querySelector("#divMessage")

rePass.addEventListener("focusout", confirmPass)

function confirmPass() {
    if (rePass.value !== pass.value) {
        message.innerHTML = "Password's Didn't Match"
        pass.value = ""
        rePass.value = ""
        pass.focus()
    } else {
        message.innerHTML = ""
    }
}


const ratingDisplay = document.querySelector("#ratingDisplay")
const ratingRange = document.querySelector("#rating")

ratingRange.addEventListener("change", displayValue)
ratingRange.addEventListener("input", displayValue)

function displayValue() {
    ratingDisplay.innerHTML = ratingRange.value
}
