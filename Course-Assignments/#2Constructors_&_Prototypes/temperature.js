import CWeatherData from "./weather-data.js";
import { TemperatureUnits, WeatherDataTypes } from "./enums.js";

class CTemperature extends CWeatherData {
  constructor(type, unit, time, place, value) {
    super(type, unit, time, place, value);
  }
}

CTemperature.prototype.convertToF = function () {
  if (this.unit === TemperatureUnits.CELSIUS) {
    this.unit = TemperatureUnits.FAHRENHEIT;
    this.value = (this.value / 5) * 9 + 32;
  } else if (this.unit === TemperatureUnits.FAHRENHEIT) {
    console.log("\u001b[1;31m Already in FAHRENHEIT");
  } else {
    console.log("\u001b[1;31m Not a supported temperature unit");
  }
};

CTemperature.prototype.convertToC = function () {
  if (this.unit === TemperatureUnits.FAHRENHEIT) {
    this.unit = TemperatureUnits.CELSIUS;
    this.value = ((this.value - 32) * 5) / 9;
  } else if (this.unit === TemperatureUnits.CELSIUS) {
    console.log("\u001b[1;31m Already in CELSIUS");
  } else {
    console.log("\u001b[1;31m Not a supported temperature unit");
  }
};

export default CTemperature;

// var e = new CTemperature(
//   WeatherDataTypes.TEMPERATURE,
//   TemperatureUnits.CELSIUS,
//   new Date(2000, 2, 2),
//   "Brasov",
//   10
// );

// console.log(e);
// e.convertToF();
// console.log(e);
// e.convertToC();
// console.log(e);
