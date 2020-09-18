import { TemperatureUnits, Colors } from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";
import {
  farenheitToCelsius,
  celsiusToFarenheit,
} from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

function TemperaturePrediction(options) {
  const convertToF = () => {
    if (options.unit === TemperatureUnits.CELSIUS) {
      options.unit = TemperatureUnits.FAHRENHEIT;
      options.value = celsiusToFarenheit(options.value);
    } else if (options.unit === TemperatureUnits.FAHRENHEIT) {
      styledLog(Colors.RED, "Already in FAHRENHEIT");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  const convertToC = () => {
    if (options.unit === TemperatureUnits.FAHRENHEIT) {
      options.unit = TemperatureUnits.CELSIUS;
      options.value = farenheitToCelsius(options.value);
    } else if (options.unit === TemperatureUnits.CELSIUS) {
      styledLog(Colors.RED, "Already in CELSIUS");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  return {
    convertToF,
    convertToC,
    ...WeatherPrediction(options),
  };
}

export default TemperaturePrediction;
