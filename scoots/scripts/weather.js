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
    const forecast = document.getElementById("forecast")

    const tomorrowIndex = data.findIndex(function(object){
        let today = new Date()
        today.setHours(3)
        today.setMinutes(0)
        today.setSeconds(0)
        today.setMilliseconds(0)
        today.setDate(today.getDate() + 1)
    
        let tomorrow = today
        // console.log(today)
        // console.log(tomorrow)

        return object.dt_text == tomorrow
    })

    // const tomorrowTemp = data[tomorrowIndex].main.temp
    
    console.log(tomorrowIndex);
    
    // const img = document.createElement("img")
    // const figCaption = document.createElement("figcaption")

    // img.setAttribute("src", data[].)

    temp.textContent = Math.round(data[0].main.temp)
    hum.textContent = Math.round(data[0].main.humidity)
    highTemp.textContent = Math.round(data[0].main.temp)
    // forecast.textContent = Math.round(data[].weather)

}











// maybe create a f to c conversion function for displaying c