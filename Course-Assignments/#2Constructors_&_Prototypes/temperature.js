import CWeatherData from "./weather-data.js";
import { TemperatureUnits } from "./enums.js";
import {
  celsiusToFarenheit,
  farenheitToCelsius,
} from "../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

class CTemperature extends CWeatherData {
  constructor(type, unit, time, place, value) {
    super(type, unit, time, place, value);
  }
}

CTemperature.prototype.convertToF = function () {
  if (this.unit === TemperatureUnits.CELSIUS) {
    this.unit = TemperatureUnits.FAHRENHEIT;
    this.value = celsiusToFarenheit(this.value);
  } else if (this.unit === TemperatureUnits.FAHRENHEIT) {
    styledLog(Colors.RED, "Already in FAHRENHEIT");
  } else {
    styledLog(Colors.RED, "Not a supported temperature unit");
  }
};

CTemperature.prototype.convertToC = function () {
  if (this.unit === TemperatureUnits.FAHRENHEIT) {
    this.unit = TemperatureUnits.CELSIUS;
    this.value = farenheitToCelsius(this.value);
  } else if (this.unit === TemperatureUnits.CELSIUS) {
    styledLog(Colors.RED, "Already in CELSIUS");
  } else {
    styledLog(Colors.RED, "Not a supported temperature unit");
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
