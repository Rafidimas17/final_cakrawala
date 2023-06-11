const axios = require("axios");

async function geoCode(address) {
  
  const accessToken = "pk.eyJ1IjoiYWdyZWdhdG9yIiwiYSI6ImNsaXIwZmhxNTAwaDEzZ2xjYTZrNDdjdm0ifQ.N-EmT90hgdTuS5WnGZYXAQ";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}&limit=1`;
  const response = await axios.get(url);
  console.log(response);
  const coordinates = {
    longitude: response.data.features[0].center[0],
    latitude: response.data.features[0].center[1],
  };

  return coordinates;
}

const secret_weather = "ae97c50fef527dbd65b43f79e8e51ef1";
geoCode("Tamiajeng").then(async function (coordinates) {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${secret_weather}&query=${coordinates.latitude},${coordinates.longitude}&units=m`;
  const weatherResponse = await axios.get(weatherUrl);
  const description = weatherResponse.data.current.weather_descriptions[0];
  const temperature = weatherResponse.data.current.temperature;

  console.log("Description:", description);
  console.log("Temperature:", temperature);
}).catch(function (error) {
  console.error("Error:", error);
});
