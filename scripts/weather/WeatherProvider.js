import "../parks/Park.js"
import { settings } from '../Settings.js'

//incomplete weather data/rendering

export let weather = []
// Check to see if the URL loads when a variable is in the fetch call:
// const taco = {
//     lat: "44.409286",
//     lon: "-68.247501"
// }

// MAKE SURE YOU CHANGE THIS LATER
// you need to know what the parksObj is. It's a placeholder for now
export const getWeather = (lat, lon) => {
    const weatherFetchCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}lon=${lon}&appid=${settings.weatherKey}units=imperial`
    // fucntion to find object and pass in object, extract lat and lon (And id) 
    
    return fetch(weatherFetchCall)
        .then(response => response.json())
            .then(parsedWeather => {
                console.log("Weather Data Check", parsedWeather)
                weather = parsedWeather.daily
            })
}

export const useWeather = () => {
    return weather.slice(0, 5)
}