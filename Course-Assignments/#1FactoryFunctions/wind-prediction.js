import { SpeedUnits, Colors } from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";
import { msToMph, mphToMs } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const WindPrediction = (options) => {
  const getDirection = () => options.direction;
  const setDirection = (newDirection) => (options.direction = newDirection);

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.value = msToMph(options.value);
    } else if (options.unit === SpeedUnits.MPH) {
      styledLog(Colors.RED, "Already in MPH");
    } else {
      styledLog(Colors.RED, "Not a supported speed unit");
    }
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.value = mphToMs(options.value);
    } else if (options.unit === SpeedUnits.MS) {
      styledLog(Colors.RED, "Already in MS");
    } else {
      styledLog(Colors.RED, "Not a supported speed unit");
    }
  };
  return {
    getDirection,
    setDirection,
    convertToMPH,
    convertToMS,
    ...WeatherPrediction(options),
  };
};

export default WindPrediction;
