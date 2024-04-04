async function weatherData() {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=b865574f47333eba1210cb2956e0e422&units=imperial"

    try {
        const response = await fetch(weatherUrl)
        if (response.ok) {
            const data = await response.json()
            // remove 
            console.log(data.list)
            displayWeather(data.list)
            displayForecast(data.list)
        } else {
            throw Error(response.text())
        }

    } catch (error) {
        console.log(error);
    }
}
weatherData()

function displayWeather(data) {
    const highTemp = document.getElementById("high-temp")
    const currWeatherPara = document.getElementById("currWeatherPara")
    const currWeather = document.getElementById("currWeather")
    const temp = document.getElementById("currTemp")
    const desc = document.getElementById("currDesc")
    const hum = document.getElementById("hum")
    
    const img = document.createElement("img")
    const imgSrc = `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`
    const figcaption = document.createElement("figcaption")
    const description = data[0].weather[0].description
    const capDesc = titleCase(description)
    const today = new Date().toDateString()

    img.setAttribute("src", imgSrc)
    img.setAttribute("alt", "Weather icon")
    img.setAttribute("loading", "lazy")
    img.setAttribute("width", "50")
    img.setAttribute("height", "50")
    figcaption.textContent = data[0].weather[0].main 
    temp.textContent = Math.round(data[0].main.temp)
    desc.textContent = capDesc
    hum.textContent = Math.round(data[0].main.humidity)

    currWeatherPara.textContent = today.slice(0, -5)
    highTemp.textContent = Math.round(data[0].main.temp)
    currWeather.appendChild(img)
    currWeather.appendChild(figcaption)
}

function displayForecast(data) {
    const forecastPara = document.getElementById("forecastPara")
    const forecastTomorrow = document.getElementById("forecastTomorrow")
    const temp = document.getElementById("forecastTemp")
    const desc = document.getElementById("forecastDesc")
    const hum = document.getElementById("forecastHum")
    
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")
    const today = new Date()
    const tomorrow = today.setDate(today.getDate() + 1)
    const tomorrowString = new Date(tomorrow).toDateString()   

    const tomorrowIndex = data.findIndex(function (object) {
        let today = new Date()
        today.setUTCHours(15)
        today.setUTCMinutes(0)
        today.setUTCSeconds(0)
        today.setUTCMilliseconds(0)
        today.setDate(today.getDate() + 1)

        let tomorrow = today.getTime()
        let objectTime = object.dt * 1000

        return objectTime == tomorrow
    })
    const tomorrowTemp = data[tomorrowIndex].main.temp
    const imgSrc = `https://openweathermap.org/img/w/${data[tomorrowIndex].weather[0].icon}.png`
    const description = data[tomorrowIndex].weather[0].description
    const capDesc = titleCase(description)

    img.setAttribute("src", imgSrc)
    img.setAttribute("alt", "Weather icon")
    img.setAttribute("loading", "lazy")
    img.setAttribute("width", "50")
    img.setAttribute("height", "50")
    figcaption.textContent = data[tomorrowIndex].weather[0].main
    forecastPara.textContent = tomorrowString.slice(0, -5)
    temp.textContent = Math.round(tomorrowTemp)
    desc.textContent = capDesc
    hum.textContent = Math.round(data[tomorrowIndex].main.humidity)

    forecastTomorrow.appendChild(img)
    forecastTomorrow.appendChild(figcaption)
}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function (char) {
        return char.toUpperCase()
    })
}











// maybe create a f to c conversion function for displaying c