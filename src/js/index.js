import '../style/main.scss';
import * as apiFuncs from './api.js';

const apiKey = 'AZMSJW8MDWHLZ8WGESZARBBK2';
const searchInput = document.querySelector('input');
const form = document.querySelector('form');

const h1 = document.querySelector('#cityName');
const p = document.querySelector('p');

form.addEventListener('submit', (e) => {
  if (searchInput.value) {
    const promise = apiFuncs.hitApi(searchInput.value);
    apiFuncs.getWeatherData(promise).then((response) => {
      h1.textContent = response.cityFullName;
      p.textContent = `${response.cityTemp} degrees Fahrenheit`;
    });

    form.reset();
  }
  e.preventDefault();
});

// const promise = apiFuncs.hitApi('toronto');
// apiFuncs.processJSON(promise);
