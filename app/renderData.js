import data from "./fetchData.js"; /* Henter hele filen */
import { locationTmpl } from "./templates.js";

export const renderData = async () => {
  const weatherData = await data.fetchData();
  const output = document.querySelector(".output");
  output.insertAdjacentHTML("beforeend", locationTmpl(weatherData));
  console.log(weatherData);
};

export const renderBg = async () => {
  const weatherData = await data.fetchData();
  const bg = document.querySelector(".bg");
  weatherData.weather[0].main = "Clear";
  if (weatherData.weather[0].main === "Clear") {
    bg.style.backgroundImage = "url('img/clear.jpg')";
  } else if (weatherData.weather[0].main === "Clouds") {
    bg.style.backgroundImage = "url('img/clouds.jpg')";
  } else if (weatherData.weather[0].main === "Rain") {
    bg.style.backgroundImage = "url('img/rain.jpg')";
  } else if (weatherData.weather[0].main === "Snow") {
    bg.style.backgroundImage = "url('img/snow.jpg')";
  } else {
    bg.style.backgroundImage = "url('img/default.jpg')";
  }
  console.log(weatherData.weather[0].main);
};
