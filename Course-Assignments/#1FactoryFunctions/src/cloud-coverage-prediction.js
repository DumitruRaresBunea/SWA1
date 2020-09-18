import WeatherPrediction from "./weather-prediction.js";

const CloudCoveragePrediction = (options) => {
  return {
    ...WeatherPrediction(options),
  };
};

export default CloudCoveragePrediction;
