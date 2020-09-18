import Event from "./event.js";
import WeatherData from "./weather-data.js";

import TemperaturePrediction from "./temperature-prediction.js";
import Temperature from "./temperature.js"
import {
  TemperatureUnits,
  PrecipitationTypes,
  CardinalDirections,
  LengthUnits,
  SpeedUnits,
  WeatherDataTypes,
} from "./enums.js";


const WeatherPrediction = (options) => {
  const matches = (weatherData) =>
    options.value === weatherData.getValue() &&
    options.type === weatherData.getType() &&
    options.unit === weatherData.getUnit();
  const fromValue = () => options.value;
  const toValue = () => options.value;

  return {
    matches,
    fromValue,
    toValue,
    ...Event(options),
    ...WeatherDataTypes(options),
    ...WeatherData(options),
  };
};

export default WeatherPrediction;

let temp = TemperaturePrediction({
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
  unit: TemperatureUnits.CELSIUS,
  
});

let temp1 = Temperature({
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
  unit: TemperatureUnits.CELSIUS,
  
});

console.log(temp.matches(temp1));