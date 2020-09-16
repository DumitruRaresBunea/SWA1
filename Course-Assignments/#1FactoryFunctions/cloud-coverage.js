import WeatherData from "./weather-data.js";

const CloudCoverage = (options) => {
  return { ...WeatherData(options) };
};

export default CloudCoverage;
