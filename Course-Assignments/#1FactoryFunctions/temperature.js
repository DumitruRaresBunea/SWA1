import WeatherData from "./weather-data.js";
import { TemperatureUnits } from "./enums.js";

const CtoF = (celsiusT) => (celsiusT / 5) * 9 + 32;
const FtoC = (farenheitT) => ((farenheitT - 32) * 5) / 9;

const Temperature = (options) => {
  const convertToF = () => {
    if (options.unit !== TemperatureUnits.FAHRENHEIT) {
      options.unit = TemperatureUnits.FAHRENHEIT;
      setUnit(TemperatureUnits.FAHRENHEIT);
      options.value = CtoF(options.value);
    }
  };
  const convertToC = () => {
    if (options.unit !== TemperatureUnits.CELSIUS) {
      options.unit = TemperatureUnits.CELSIUS;
      options.value = FtoC(options.value);
    }
  };

  return { convertToF, convertToC, ...WeatherData(options) };
};

export default Temperature;

// Verification
let temp = Temperature({ unit: TemperatureUnits.CELSIUS, value: 0 });
console.log(temp);
temp.setUnit(temp.convertToC());
console.log(temp.unit + " " + temp.value);
console.log(temp);
temp.setUnit(temp.convertToF());

console.log(temp.unit + " " + temp.value);
console.log(temp);
