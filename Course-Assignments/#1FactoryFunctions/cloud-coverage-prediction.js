import WeatherData from "./weather-data.js";
import WeatherPrediction from "./weather-prediction.js";

const CloudCoveragePrediction = (options) => {
  return {
    // ...WeatherData(options),
    ...WeatherPrediction(options),
  };
};

export default CloudCoveragePrediction;
