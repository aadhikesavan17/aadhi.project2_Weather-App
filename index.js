const apiKey ="f1f21bd62ddeb1aa63ffc50e5db19cf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "clouds"){
        weathericon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }else if(data.weather[0].main == "drizzle"){
        weathericon.src = "drizzle.png";
    }else if(data.weather[0].main == "humidity"){
        weathericon.src = "images/humidity.png";
    }else if(data.weather[0].main == "mist"){
        weathericon.src = "images/mist.png";
    }else if(data.weather[0].main == "rain"){
        weathericon.src = "images/rain.png";
    }else if(data.weather[0].main == "snow"){
        weathericon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";
        }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

const defaultCity = "London";
checkWeather(defaultCity);