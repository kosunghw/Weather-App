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
  const cityFullName = weatherData.resolvedAddress;
  const cityTemp = condition.temp;
  //   console.log({ cityFullName, cityTemp });
  return { cityFullName, cityTemp };
}

export { hitApi, getWeatherData };
