function hitApi(city) {
  const apiKey = 'AZMSJW8MDWHLZ8WGESZARBBK2';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?key=${apiKey}`;
  return fetch(url, { mode: 'cors' });

  promise.then((response) => {
    cityName = response.address;
    currentTemp = response.currentConditions.temp;
    console.log(cityName);
    console.log(currentTemp);
  });

  //   promise.then((response) => {
  //     response.json().then((weather) => {
  //       cityName = weather.address;
  //       currentTemp = weather.temp;
  //     });
  //   });
  //   console.log(cityName);
  //   console.log(currentTemp);
}

function getWeatherData(promise) {
  // This function takes in a promise, and process the JSON data.
  // Returns an object that required for the app.
  promise.then((response) => {
    response.json().then((weatherData) => {
      console.log(weatherData.currentConditions);
    });
  });
}

export { hitApi, getWeatherData };
