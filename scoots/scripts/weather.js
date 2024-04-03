async function weatherData() {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=b865574f47333eba1210cb2956e0e422&units=imperial"

    try {
        const response = await fetch(weatherUrl)
        if (response.ok) {
            const data = await response.json()
            // remove 
            console.log(data.list)
            displayWeather(data.list)
        } else {
            throw Error(response.text())
        }

    } catch (error) {
        console.log(error);
    }
}
weatherData()

function displayWeather(data) {
    const temp = document.getElementById("temp")
    const hum = document.getElementById("hum")
    const highTemp = document.getElementById("high-temp")
    const forecastTomorrow = document.getElementById("forecastTomorrow")

    const tomorrowIndex = data.findIndex(function(object){
        let today = new Date()
        today.setUTCHours(15)
        today.setUTCMinutes(0)
        today.setUTCSeconds(0)
        today.setUTCMilliseconds(0)
        today.setDate(today.getDate() + 1)
    
        let tomorrow = today.getTime()
        let objectTime = object.dt*1000

        return objectTime == tomorrow
    })

    const tomorrowTemp = data[tomorrowIndex].main.temp
    
    const img = document.createElement("img")
    const imgSrc = `https://openweathermap.org/img/w/${data[tomorrowIndex].weather[0].icon}.png`
    const figCaption = document.createElement("figcaption")
    const description = data[tomorrowIndex].weather[0].description

    img.setAttribute("src", imgSrc)
    img.setAttribute("alt", "Weather icon")
    img.setAttribute("loading", "lazy")
    figCaption.textContent = Math.round(tomorrowTemp)
    figCaption.append(`°F - ${description}` )

    temp.textContent = Math.round(data[0].main.temp)
    hum.textContent = Math.round(data[0].main.humidity)
    highTemp.textContent = Math.round(data[0].main.temp)
    forecastTomorrow.appendChild(img)
    forecastTomorrow.appendChild(figCaption)
}











// maybe create a f to c conversion function for displaying c