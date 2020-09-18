import { SpeedUnits, CardinalDirections } from "./enums.js";
import WeatherData from "./weather-data.js";
import WeatherPrediction from "./weather-prediction.js";

const msToMph = (value) => value * 2.237;
const mphToMs = (value) => value / 2.237;

const WindPrediction = (options) => {
  // const matches = (data) => {
  //   if (options.data == data) {
  //     console.log("Wind Prediction matches with actual Wind");
  //   } else {
  //     console.log("Wind Prediction does NOT match with actual Wind");
  //   }
  // };
  const getDirection = () => options.direction;
  const setDirection = (newDirection) => (options.direction = newDirection);

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.value = msToMph(options.value);
    } else if (options.unit === SpeedUnits.MPH) {
      console.log("\u001b[1;31m Already in MPH");
    } else {
      console.log("\u001b[1;31m Not a supported speed unit");
    }
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.value = mphToMs(options.value);
    } else if (options.unit === SpeedUnits.MS) {
      console.log("\u001b[1;31m Already in MS");
    } else {
      console.log("\u001b[1;31m Not a supported speed unit");
    }
  };
  return {
    getDirection,
    setDirection,
    convertToMPH,
    convertToMS,
    // ...WeatherData(options),
    ...WeatherPrediction(options),
  };
};

export default WindPrediction;
