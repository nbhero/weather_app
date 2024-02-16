const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let citySearch = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL  + city + `&appid=${apiKey}`);
    var data = await response.json();

    // Error Message
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        // Getting the data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        // Updating Weather Icon
        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "weather_icons/sunny_white.png"
        }
        else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather_icons/cloudy_white.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "weather_icons/rainny_white.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "weather_icons/mist_white.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather_icons/drizzle_white.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}

searchButton.addEventListener("click", () =>{
    checkWeather(citySearch.value);
})
