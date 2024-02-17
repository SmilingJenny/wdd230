const temp = document.querySelector("#temp").innerHTML
const wind = document.querySelector("#wind").innerHTML
const chill = document.querySelector("#chill").innerHTML

function windChill(temp, wind) {
    if (temp <= 50 && wind > 3) {
        let calcWindChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * Math.pow(wind, 0.16);
        return document.getElementById('chill').innerHTML = calcWindChill.toFixed(0);
    }
    else {
        return document.getElementById('chill').innerHTML = "n/a"
    }
};

windChill(temp, wind);
