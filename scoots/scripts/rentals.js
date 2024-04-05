
async function getRentals() {
    const url = "https://smilingjenny.github.io/wdd230/scoots/data/rentals.json"
    const response = await fetch(url)
    const result = await response.json()
    console.log(result);
    // displayRentals(result.rentals)
}
getRentals()

// function displayRentals(rentals) {

// }
