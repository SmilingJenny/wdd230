const currentTemp = document.querySelector("#current-temp")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector("figcaption")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=b865574f47333eba1210cb2956e0e422&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch()

function displayResults(data) {
    const temp = Math.round(data.main.temp)
    currentTemp.innerHTML = `${temp}&deg;F`
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    let capDesc = titleCase(desc)

    weatherIcon.setAttribute("src", iconSrc)
    weatherIcon.setAttribute("alt", "Weather icon")
    captionDesc.textContent = capDesc

}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function (char) {
        return char.toUpperCase()
    })
}


