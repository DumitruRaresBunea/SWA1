import CWeatherData from "./weather-data.js";
import { SpeedUnits, WeatherDataTypes } from "./enums.js";

class CWind extends CWeatherData {
  constructor(type, unit, time, place, value, direction) {
    super(type, unit, time, place, value);
    this.direction = direction;
  }
}
