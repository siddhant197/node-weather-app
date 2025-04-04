const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url =
    "https://api.weatherstack.com/current?access_key=" +
    apiKey +
    "&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather API.", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = response.body;
      callback(undefined, {
        description: data.current.weather_descriptions[0],
        temperature: data.current.temperature,
        feelslike: data.current.feelslike,
        humidity: data.current.humidity,
      });
    }
  });
};

module.exports = forecast;
