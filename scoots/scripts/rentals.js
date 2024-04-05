
async function getRentals() {
    const url = "https://smilingjenny.github.io/wdd230/scoots/data/rentals.json"
    const response = await fetch(url)
    const results = await response.json()
    console.log(results);
    displayRentals(results.rentals)
}
getRentals()

function displayRentals(rentals) {
    rentals.forEach(object => {
        const tbody = document.querySelector("tbody")
        const tr = document.createElement("tr")
        const url = document.createElement("td")
        const name = document.createElement("td")
        const maxPeople = document.createElement("td")
        const rHalfPrice = document.createElement("td")
        const rWholePrice = document.createElement("td")
        const wHalfPrice = document.createElement("td")
        const wWholePrice = document.createElement("td")

        url.textContent = object.url
        name.textContent = object.name
        maxPeople.textContent = object.maxPeople
        rHalfPrice.textContent = object.rHalfPrice
        rWholePrice.textContent = object.rWholePrice
        wHalfPrice.textContent = object.wHalfPrice
        wWholePrice.textContent = object.wWholePrice

        console.log(rHalfPrice);
        // tr.appendChild(url)
        // tbody.appendChild(tr)




    });

}
