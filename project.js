const apiKey = '114e56158e95aa755cff019549bdaf60'; // Obtenha uma chave de API gratuita do OpenWeatherMap
const searchBtn = document.getElementById('searchBtn');
const locationInput = document.getElementById('location');
const weatherDiv = document.getElementById('weather');

searchBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    }
});

function getWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error:', error);
            weatherDiv.textContent = 'Erro ao obter dados. Verifique a localização.';
        });
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    
    weatherDiv.innerHTML = `<h2>${name}</h2>
                            <p>Temperatura: ${temperature}°C</p>
                            <p>Condição: ${description}</p>`;
}
