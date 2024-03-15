
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
    let desc = data.weather[0].description
    let capDesc = titleCase(desc)
    
    
    temp.textContent = tempRound
    wind.textContent = windRound
    icon.setAttribute("src", iconSrc)
    icon.setAttribute("alt", "Weather Icon")
    description.innerHTML = `Current Weather Conditions are: <br>${capDesc}`
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
        return chill.innerHTML = calcWindChill.toFixed(0);
    }
    else {
        return chill.innerHTML = "n/a"
    }
}

async function forecastData() {
    const forecast = document.getElementById("forecast")
    const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=40.23&lon=-111.65&appid=b865574f47333eba1210cb2956e0e422&units=imperial"
    try {
        const response = await fetch(urlForecast)
        if (response.ok) {
            const data = await response.json()
            // remove console logs when done
            console.log(data)
            // displayWeather(data)
        } else {
            throw Error(response.text())
        }
    } catch (error) {
        console.log(error)
    }
}
forecastData()


