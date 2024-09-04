function fahrenheitToCelsius(degree) {
  const celsius = (degree - 32) * (5 / 9);
  return celsius.toFixed(1);
}

function celsiusToFahrenheit(degree) {
  const fahrenheit = degree * (9 / 5) + 32;
  return fahrenheit.toFixed(1);
}

export { fahrenheitToCelsius, celsiusToFahrenheit };
