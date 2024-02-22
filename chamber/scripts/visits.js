
function daysBetweenVisits() {
    const visitsDisplay = document.querySelector(".visits")
    const date = new Date().getTime()

    // Code to test 1 day ago as last visit
    // const oldDate = (new Date().getTime()) - 86400000
    // localStorage.setItem('visit', JSON.stringify(oldDate))

    // Code to test 2 days ago as last visit
    // const oldDate = (new Date().getTime()) - 172822209 
    // localStorage.setItem('visit', JSON.stringify(oldDate))

    if (localStorage.getItem("visit") !== null) {
        const lastVisit = JSON.parse(localStorage.getItem("visit"))
        const thisVisit = date
        const daysSince = (thisVisit - lastVisit) / 86400000
        
        if (daysSince < 1) {
            visitsDisplay.textContent = "Back so soon! Awesome!"
        } else if (daysSince < 2) {
            visitsDisplay.textContent = "You last visited 1 day ago."
        } else {
            visitsDisplay.textContent = `You last visited ${daysSince.toFixed(0)} days ago.`
        }
        localStorage.setItem("visit", JSON.stringify(date))
    } else {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions."
        localStorage.setItem("visit", JSON.stringify(date))
    }
}

daysBetweenVisits()