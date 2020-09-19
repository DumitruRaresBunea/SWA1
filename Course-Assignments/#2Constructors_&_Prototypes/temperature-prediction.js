import {
  celsiusToFarenheit,
  farenheitToCelsius,
} from "../helpers/unit-converter.helper.js";
import { Colors, TemperatureUnits } from "./enums.js";
import CWeatherPrediction from "./weather-prediction.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

class CTemperaturePrediction extends CWeatherPrediction {
  constructor(type, unit, time, place, from, to) {
    super(type, unit, time, place, from, to);
  }
}

CTemperaturePrediction.prototype.convertToF = function () {
  if (this.unit === TemperatureUnits.CELSIUS) {
    this.unit = TemperatureUnits.FAHRENHEIT;
    this.from = celsiusToFarenheit(this.from);
    this.to = celsiusToFarenheit(this.to);
  } else if (this.unit === TemperatureUnits.FAHRENHEIT) {
    styledLog(Colors.RED, "Already in FAHRENHEIT");
  } else {
    styledLog(Colors.RED, "Not a supported temperature unit");
  }
};

CTemperaturePrediction.prototype.convertToC = function () {
  if (this.unit === TemperatureUnits.FAHRENHEIT) {
    this.unit = TemperatureUnits.CELSIUS;
    this.from = farenheitToCelsius(this.from);
    this.to = farenheitToCelsius(this.to);
  } else if (this.unit === TemperatureUnits.CELSIUS) {
    styledLog(Colors.RED, "Already in CELSIUS");
  } else {
    styledLog(Colors.RED, "Not a supported temperature unit");
  }
};

export default CTemperaturePrediction;
