const data = {};

data.getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude, "Longitude:", longitude); // Log the latitude and longitude
        resolve({ latitude, longitude });
      }, reject);
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};
data.fetchData = async () => {
  try {
    const location = await data.getLocation();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=adaa3a4ad64eebb1d8d1708d5810a2ac&units=metric`
    );
    console.log(location.latitude, location.longitude);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export default data;
