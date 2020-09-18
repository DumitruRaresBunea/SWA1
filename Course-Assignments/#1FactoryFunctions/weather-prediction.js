import Event from "./event.js";
import WeatherData from "./weather-data.js";
import DataTypes from "./data-type.js";

import TemperaturePrediction from "./temperature-prediction.js";
import Temperature from "./temperature.js";

import {
  TemperatureUnits,
  PrecipitationTypes,
  CardinalDirections,
  LengthUnits,
  SpeedUnits,
  WeatherDataTypes,
  Colors,
} from "./enums.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const WeatherPrediction = (options) => {
  const fromValue = () => options.fromValue;
  const toValue = () => options.toValue;
  const matches = (weatherData) =>
    options.fromValue <= weatherData.getValue() &&
    options.toValue >= weatherData.getValue() &&
    options.type === weatherData.getType() &&
    options.unit === weatherData.getUnit();
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

// let temp = Temperature({
//   value: 0,
//   time: new Date(2014, 12, 23),
//   place: "Aarhus",
//   type: WeatherDataTypes.TEMPERATURE,
//   unit: TemperatureUnits.CELSIUS,
// });

// let temp1 = TemperaturePrediction({
//   fromValue: -1,
//   toValue: 2,
//   time: new Date(2014, 12, 23),
//   place: "Aarhus",
//   type: WeatherDataTypes.PRECIPITATION,
//   unit: TemperatureUnits.CELSIUS,
// });

// console.log(temp1.matches(temp));
