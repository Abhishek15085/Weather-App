const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const Weather_body = document.querySelector('.Weather-body');

async function checkWeather(city){
    const api_key = "7611c6fade76adbea8ea745baea12943";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response=> Response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display ="flex"; 
        Weather_body.style.display = "none"; 
        console.log("error");
        return;

    }

    location_not_found.style.display ="none"; 
    Weather_body.style.display = "flex"; 
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


   switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;    
        case 'Mist':
           weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
           weather_img.src = "/assets/snow.png";
            break;

   } 

    console.log(weather_data);
}
 

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});