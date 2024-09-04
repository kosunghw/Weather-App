import * as util from './utils.js';

function hitApi(city) {
  const apiKey = 'AZMSJW8MDWHLZ8WGESZARBBK2';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}`;
  return fetch(url, { mode: 'cors' });
}

async function getWeatherData(promise) {
  // This function takes in a promise by fetch(), and process the JSON data.
  // Returns an object that required for the app.
  const weatherData = await promise.then((response) => response.json());
  const condition = weatherData.currentConditions;
  const cityFullName = weatherData.address.toUpperCase();
  const resolvedAddress = weatherData.resolvedAddress;
  const today = weatherData.days[0];
  const minTemp = today.tempmin;
  const maxTemp = today.tempmax;
  const feelsLike = condition.feelslike;
  let cityTemp = condition.temp;
  const icon = condition.icon;
  const currentCondition = condition.conditions;
  console.log(weatherData);

  const degree = document.getElementById('degree');
  if (degree.classList.contains('celsius')) {
    cityTemp = util.fahrenheitToCelsius(cityTemp);
  }
  return {
    cityFullName,
    cityTemp,
    icon,
    currentCondition,
    resolvedAddress,
    minTemp,
    maxTemp,
    feelsLike,
  };
}

export { hitApi, getWeatherData };
