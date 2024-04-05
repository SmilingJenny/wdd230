
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
        const picture = document.createElement("td")
        const img = document.createElement("img")
        const name = document.createElement("td")
        const maxPeople = document.createElement("td")
        const rHalfPrice = document.createElement("td")
        const rWholePrice = document.createElement("td")
        const wHalfPrice = document.createElement("td")
        const wWholePrice = document.createElement("td")

        img.setAttribute("src", object.imgUrl)
        img.setAttribute("alt", object.imgAlt)
        img.setAttribute("loading", "lazy")
        img.setAttribute("width", "75")
        picture.appendChild(img)
        name.textContent = object.name
        maxPeople.textContent = object.maxPeople
        rHalfPrice.textContent = object.rHalfPrice
        rWholePrice.textContent = object.rWholePrice
        wHalfPrice.textContent = object.wHalfPrice
        wWholePrice.textContent = object.wWholePrice

        tr.appendChild(picture)
        tr.appendChild(name)
        tr.appendChild(maxPeople)
        tr.appendChild(rHalfPrice)
        tr.appendChild(rWholePrice)
        tr.appendChild(wHalfPrice)
        tr.appendChild(wWholePrice)
        tbody.appendChild(tr)
    });

}
