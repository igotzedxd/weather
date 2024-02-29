export const locationTmpl = (weatherData) => {
  return `
    <div class="location">
    <h2 class="city">${weatherData.name}</h2>
    <p class="weather-type">${weatherData.weather[0].main}</p>
    <p class="temp">${Math.round(weatherData.main.temp)}</p>
    <p class="temp"> ${Math.round(weatherData.main.feels_like)}</p>
    </div>      
  `;
};
