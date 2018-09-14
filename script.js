var temperatureInCelsius=40;
var Celsius=temperatureInCelsius;
var CelsiusToFahrenheit;
CelsiusToFahrenheit = (Celsius * 9) / 5 + 32;

var temperatureInFahrenheit=104;
var Fahrenheit=temperatureInFahrenheit;
var fahrenheitToCelsius;
fahrenheitToCelsius= ((Fahrenheit - 32) * 5) / 9;

console.log("Temperature of "+temperatureInCelsius+"Celsius,will be"+CelsiusToFahrenheit+"Fahrenheit");
console.log("Temperature of"+Fahrenheit+"Fahrenheit,will be"+fahrenheitToCelsius+"Celsius");