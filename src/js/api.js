import * as util from './utils.js';

async function hitApi(city) {
  const apiKey = 'AZMSJW8MDWHLZ8WGESZARBBK2';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}`;
  const response = await fetch(url, { mode: 'cors' });
  if (response.status !== 200) {
    throwError(response.status);
    return 'error';
  } else {
    const weatherData = await response.json();
    const resultData = getData(weatherData);
    return resultData;
  }
}

async function getData(weatherData) {
  // This function takes in a promise by fetch(), and process the JSON data.
  // Returns an object that required for the app.
  const condition = weatherData.currentConditions;
  const result = {
    cityFullName: weatherData.address.toUpperCase(),
    resolvedAddress: weatherData.resolvedAddress,
    cityTemp: condition.temp,
    icon: condition.icon,
  };

  const degree = document.getElementById('degree');
  if (degree.classList.contains('celsius')) {
    result.cityTemp = util.fahrenheitToCelsius(cityTemp);
  }
  return result;
}

function throwError(status) {
  if (status === 400) {
    alert('BAD REQUEST. USE CORRECT ADDRESS');
  } else if (status === 429) {
    alert('TOO MANY REQUEST');
  }
}

export { hitApi };
