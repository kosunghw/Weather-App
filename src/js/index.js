import '../style/main.scss';
import * as apiFuncs from './api.js';

const apiKey = 'AZMSJW8MDWHLZ8WGESZARBBK2';
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto/?key=${apiKey}`;
const searchInput = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  if (searchInput.value) {
    const promise = apiFuncs.hitApi(searchInput.value);
    apiFuncs.getWeatherData(promise);
    form.reset();
  }
  e.preventDefault();
});

// const promise = apiFuncs.hitApi('toronto');
// apiFuncs.processJSON(promise);
