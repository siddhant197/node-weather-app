const request = require("request");

const geocode = (address, callback) => {
  const apiKey = process.env.GEO_API_KEY;
  var options = {
    method: "GET",
    json: true,
    url:
      "https://api.geoapify.com/v1/geocode/search?text=" +
      address +
      "&apiKey=" +
      apiKey,
    headers: {},
  };

  request(options, function (error, response) {
    if (error) {
      callback("Unable to connect to location API.", undefined);
    } else {
      const data = response.body.features[0].properties;
      const latitude = data.lat;
      const longitude = data.lon;
      const location = `${data.city}, ${data.state}, ${data.country}`;
      callback(undefined, { latitude, longitude, location });
    }
  });
};

module.exports = geocode;
