const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let citySearch = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL  + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    // Getting the data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

searchButton.addEventListener("click", () =>{
    checkWeather(citySearch.value);
})
