//b6e2bf49fe48d6dd9edb76ea8976ac21
const request = require('request');

var getWeather = (lat,lon,callback) => {
  request({
    url: `https://api.darksky.net/forecast/b6e2bf49fe48d6dd9edb76ea8976ac21/${lat},${lon}`,
    json: true
  },(error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
