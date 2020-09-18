import Event from "./event.js";
import WeatherData from "./weather-data.js";
import DataTypes from "./data-type.js"

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
    ...DataTypes(options),
    ...WeatherData(options),
  };
};

export default WeatherPrediction;