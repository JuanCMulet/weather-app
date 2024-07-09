const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
let API_KEY = '838479d3c63a2629563152a6d074aa81';

document.getElementById('submit').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a valid city');
    }
});

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(data => data.json())
    .then(data => showWeatherData(data));
}

function showWeatherData(data) {
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const cityInfo = document.createElement('h2');
    cityInfo.innerHTML = `${cityName}, ${countryName}`;

    const temp = data.main.temp;
    const tempInfo = document.createElement('p');
    tempInfo.innerHTML = `Temperature: ${Math.round(temp)}°C`;
    
    const humidity = data.main.humidity;
    const humidityInfo = document.createElement('p');
    humidityInfo.innerHTML = `Humidity: ${humidity}%`;
    
    const icon = data.weather[0].icon;
    const iconImage = document.createElement('img');
    iconImage.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    const description = data.weather[0].description;
    const descriptionInfo = document.createElement('p');
    descriptionInfo.innerHTML = `The weather now is ${description}`;

    weatherData.appendChild(cityInfo);
    weatherData.appendChild(tempInfo);
    weatherData.appendChild(humidityInfo);
    weatherData.appendChild(iconImage);
    weatherData.appendChild(descriptionInfo);
}