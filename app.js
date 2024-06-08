document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location-input').value;
    getWeather(location);
});

async function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('location-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('weather-result').classList.remove('hidden');
}
