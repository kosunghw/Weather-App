function fahrenheitToCelsius(degree) {
  return Math.round((degree - 32) * (5 / 9));
}

function celsiusToFahrenheit(degree) {
  return Math.round(degree * (9 / 5) + 32);
}

export { fahrenheitToCelsius, celsiusToFahrenheit };
