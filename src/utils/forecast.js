const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=77cc9f93e4241974ed13af6eba079085&query=" +
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
      callback(
        undefined,
        data.current.weather_descriptions[0] +
          ". It is currently " +
          data.current.temperature +
          " degrees out. It feels like " +
          data.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
