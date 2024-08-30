import '../style/main.scss';
import * as apiFuncs from './api.js';
import * as icon from './icon.js';

const searchInput = document.querySelector('input');
const form = document.querySelector('form');
const body = document.querySelector('body');

const h1 = document.querySelector('#cityName');
const p = document.querySelector('p');
const iconDiv = document.getElementById('icon');

form.addEventListener('submit', (e) => {
  if (searchInput.value) {
    const promise = apiFuncs.hitApi(searchInput.value);
    apiFuncs.getWeatherData(promise).then((response) => {
      h1.textContent = response.cityFullName;
      p.textContent = `${response.cityTemp} degrees Fahrenheit`;
      iconDiv.innerHTML = icon.getIcon(response.icon);
    });

    form.reset();
  }
  e.preventDefault();
});

// const promise = apiFuncs.hitApi('toronto');
// apiFuncs.processJSON(promise);
