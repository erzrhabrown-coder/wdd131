const currenty = new Date().getFullYear();


document.querySelector("#currentyear").innerHTML = currenty;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  docMod;



let temperature = 10;
let windspeed = 5;
let windchill = 2.9 ;

document.querySelector('#temperature').textContent = 'Temperature: ' + temperature + ' \u2103';
document.querySelector('#windspeed').textContent = 'Wind: ' + windspeed + ' km/h';
document.querySelector('#windchill').textContent = 'Wind Chill: ' + windchill + ' \u2103';

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill); 
    } else {
        return 'N/A'; 
    }
}