import Event from "./event.js";
import DataType from "./data-type.js";
import WeatherData from "./weather-data.js";

const WeatherPrediction = (options) => {
  const matches = (actualValue) => {
    if (options.value == actualValue) {
      console.log("Wind Prediction matches with actual Wind");
    } else {
      console.log("Wind Prediction does NOT match with actual Wind");
    }
  };
  const fromValue = () => options.value;
  const toValue = () => options.value;

  return {
    matches,
    fromValue,
    toValue,
    ...Event(options),
    ...DataType(options),
    ...WeatherData(options),
  };
};

export default WeatherPrediction;
