const temp = document.getElementById("curr-temp") 
const humidity = document.getElementById("humidity")
const iconFig = document.getElementById("iconFig")
// const icon = document.getElementById("weather-icon")
// const description = document.getElementById("description")
const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.23&lon=-111.65&appid=b865574f47333eba1210cb2956e0e422&units=imperial"

async function fetchWeather() {
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

fetchWeather()

function displayResults(data) {
    const tempRounded = Math.round(data.main.temp)
    const humRounded = Math.round(data.main.humidity)
    const iconImg = document.createElement("img")
    const iconImgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const iconCaption = document.createElement("figcaption")
    const desc = data.weather[0].description
    const capDesc = titleCase(desc)

    temp.innerHTML = `${tempRounded}&deg;F`
    humidity.innerHTML = `${humRounded}&deg;F`
    iconImg.setAttribute("src", iconImgSrc)
    iconImg.setAttribute("alt", "Weather Icon")
    iconFig.appendChild(iconImg)
    iconCaption.innerHTML = `Current Weather Condition: <br>${capDesc}`
    iconFig.appendChild(iconCaption)   
}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function(char) {
        return char.toUpperCase()
    })
}



