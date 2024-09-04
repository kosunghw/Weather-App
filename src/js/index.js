import '../main.css';
import * as apiFuncs from './api.js';
import * as icon from './icon.js';
import * as util from './utils.js';

// DOM
(function () {
  const searchInput = document.querySelector('input');
  const form = document.querySelector('form');

  const address = document.getElementById('address');
  const resolvedAddress = document.getElementById('resolved-address');
  const temp = document.getElementById('temperature');
  const iconDiv = document.getElementById('icon');
  const span = document.getElementById('degree');
  const toggleButton = document.getElementById('degree-toggle');

  form.addEventListener('submit', (e) => {
    if (searchInput.value) {
      const promise = apiFuncs.hitApi(searchInput.value);
      apiFuncs.getWeatherData(promise).then((response) => {
        address.textContent = response.cityFullName;
        resolvedAddress.textContent = response.resolvedAddress;
        temp.innerText = response.cityTemp;

        // condition.innerText = response.currentCondition;
        span.classList.add('show');
        iconDiv.innerHTML = icon.getIcon(response.icon);
      });

      form.reset();
    }
    e.preventDefault();
  });

  toggleButton.addEventListener('click', () => {
    span.classList.toggle('celsius');

    const degree = Number(temp.innerText);
    let newDegree;
    if (span.classList.contains('celsius')) {
      toggleButton.innerHTML = '&deg;F / <strong>&deg;C</strong>';
      span.innerHTML = '&deg;C';
      if (temp.innerText === '') {
        return;
      }
      newDegree = util.fahrenheitToCelsius(degree);
    } else {
      toggleButton.innerHTML = '<strong>&deg;F</strong> / &deg;C';
      span.innerHTML = '&deg;F';
      if (temp.innerText === '') {
        return;
      }
      newDegree = util.celsiusToFahrenheit(degree);
    }
    temp.innerText = newDegree;
  });
})();

// const promise = apiFuncs.hitApi('toronto');
// apiFuncs.processJSON(promise);
