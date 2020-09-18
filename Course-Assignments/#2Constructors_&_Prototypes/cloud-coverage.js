import CWeatherData from "./weather-data.js";

class CCloudCoverage extends CWeatherData {
  constructor(type, unit, time, place, value) {
    super(type, unit, time, place, value);
  }
}

export default CCloudCoverage;
