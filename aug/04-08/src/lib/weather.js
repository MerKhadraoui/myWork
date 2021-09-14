const OpenWeatherClinet = require("./weather-client");
const mykey = require("../../config");
const API_KEY = mykey.apiKey;
function formatData(data) {
  const result = `It is now ${data.main.temp}\u0000c in ${data.name}, ${
    data.sys.country
  }
      Today's weather  ${data.weather
        .map((condition) => condition.description)
        .join(", ")}`;
  return result;
}
module.exports = async function weather(city, country) {
  const client = new OpenWeatherClinet(API_KEY);
  const currentData = await client.getWeather(city, country);
  return formatData(currentData);
};
