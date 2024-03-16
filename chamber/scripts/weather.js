
async function weatherData() {
    const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=40.23&lon=-111.65&appid=b865574f47333eba1210cb2956e0e422&units=imperial"
    try {
        const response = await fetch(urlWeather)
        if (response.ok) {
            const data = await response.json()
            displayWeather(data)
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
weatherData()

function displayWeather(data) {
    const temp = document.getElementById("temp")
    const wind = document.getElementById("wind")
    const icon = document.getElementById("icon")
    const description = document.getElementById("description")
    const tempRound = Math.round(data.main.temp)
    const windRound = Math.round(data.wind.speed)
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const desc = data.weather[0].description
    const capDesc = titleCase(desc)
    
    
    temp.textContent = tempRound
    wind.textContent = windRound
    icon.setAttribute("src", iconSrc)
    icon.setAttribute("alt", "Weather Icon")
    description.innerHTML = `Current Weather Condition: <br>${capDesc}`
    windChill(temp.textContent, wind.textContent)
}

function titleCase(desc) {
    return desc.replace(/\b\w/g, function(char) {
        return char.toUpperCase()
    })
}

function windChill(temp, wind) {
    const chill = document.querySelector("#chill")
    
    if (temp <= 50 && wind > 3) {
        let calcWindChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * Math.pow(wind, 0.16);
        return chill.innerHTML = `${calcWindChill.toFixed(0)}&deg;F`
    }
    else {
        document.getElementById("windPara").textContent = ""
        return chill.textContent = "and no wind chill right now."
    }
}

async function forecastData() {
    const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=40.23&lon=-111.65&appid=b865574f47333eba1210cb2956e0e422&units=imperial"

    try {
        const response = await fetch(urlForecast)
        if (response.ok) {
            const data = await response.json()
            // remove console logs when done
            console.log(data)
            displayForecast(data)
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
forecastData()

// const forecast = document.getElementById("forecast")
// const dayPara = createElement("p")
// const dayPara = createElement("p")
// const tempPara = 
// forecast.appendChild

function displayForecast(data) {
    // day 1
    const day1Date = document.getElementById("day1Date")
    const day1Temp = document.getElementById("day1Temp")
    const day1Desc = document.getElementById("day1Desc")
    
    const day1 = data.list[0].dt * 1000
    const dateObj = new Date(day1)
    const formatDate = dateObj.toDateString()
    
    const tempRound = Math.round(data.list[0].main.temp)
    const desc = data.list[0].weather[0].description
    const capDesc = titleCase(desc)
    
    day1Date.textContent = formatDate
    day1Temp.innerHTML = `${tempRound}&deg;F`
    day1Desc.textContent = capDesc

    // day 2
    const day2Date = document.getElementById("day2Date")
    const day2Temp = document.getElementById("day2Temp")
    const day2Desc = document.getElementById("day2Desc")

    const dtSec2 = data.list[8].dt
    const dateObj2 = new Date(dtSec2*1000)
    const formatDate2 = dateObj2.toDateString()

    const tempRound2 = Math.round(data.list[8].main.temp)
    const desc2 = data.list[8].weather[0].description
    const capDesc2 = titleCase(desc2)
    
    day2Date.textContent = formatDate2
    day2Temp.innerHTML = `${tempRound2}&deg;F`
    day2Desc.textContent = capDesc2

    // day 3
    const day3Date = document.getElementById("day3Date")
    const day3Temp = document.getElementById("day3Temp")
    const day3Desc = document.getElementById("day3Desc")
    
    const dtSec3 = data.list[16].dt
    const dateObj3 = new Date(dtSec3*1000)
    const formatDate3 = dateObj3.toDateString()
    
    const tempRound3 = Math.round(data.list[16].main.temp)
    const desc3 = data.list[16].weather[0].description
    const capDesc3 = titleCase(desc3)
    
    day3Date.textContent = formatDate3
    day3Temp.innerHTML = `${tempRound3}&deg;F`
    day3Desc.textContent = capDesc3
}









// const day1Icon = document.getElementById("day1Date")
// const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
// icon.setAttribute("src", iconSrc)
// icon.setAttribute("alt", "Weather Icon")