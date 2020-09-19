import CWeatherData from "./weather-data.js";
import { SpeedUnits } from "./enums.js";
import { mphToMs, msToMph } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

class CWind extends CWeatherData {
  constructor(unit, time, place, value, direction) {
    super(WeatherDataTypes.WIND, unit, time, place, value);
    this.direction = direction;
  }
}

CWind.prototype.convertToMPH = function () {
  if (this.unit === SpeedUnits.MS) {
    this.unit = SpeedUnits.MPH;
    this.value = msToMph(this.value);
  } else if (this.unit === SpeedUnits.MPH) {
    styledLog(Colors.RED, "Already in MPH");
  } else {
    styledLog(Colors.RED, "Not a supported speed unit");
  }
};

CWind.prototype.convertToMS = function () {
  if (this.unit === SpeedUnits.MPH) {
    this.unit = SpeedUnits.MS;
    this.value = mphToMs(this.value);
  } else if (this.unit === SpeedUnits.MS) {
    styledLog(Colors.RED, "Already in MS");
  } else {
    styledLog(Colors.RED, "Not a supported speed unit");
  }
};

export default CWind;
