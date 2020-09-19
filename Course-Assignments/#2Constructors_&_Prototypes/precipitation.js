import CWeatherData from "./weather-data.js";
import { LengthUnits } from "./enums.js";
import { mmToInch, inchToMM } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

class CPrecipitation extends CWeatherData {
  constructor(unit, time, place, value, precipitationType) {
    super(WeatherDataTypes.PRECIPITATION, unit, time, place, value);
    this.precipitationType = precipitationType;
  }
  getPrecipitationType() {
    return this.precipitationType;
  }
}

CPrecipitation.prototype.convertToInches = function () {
  if (this.unit === LengthUnits.MM) {
    this.unit = LengthUnits.INCHES;
    this.value = mmToInch(this.value);
  } else if (this.unit === LengthUnits.INCHES) {
    styledLog(Colors.RED, "Already in INCHES");
  } else {
    styledLog(Colors.RED, "Not a supported length unit");
  }
};

CPrecipitation.prototype.convertToMM = function () {
  if (this.unit === LengthUnits.INCHES) {
    this.unit = LengthUnits.MM;
    this.value = inchToMM(this.value);
  } else if (this.unit === LengthUnits.MM) {
    styledLog(Colors.RED, "Already in MM");
  } else {
    styledLog(Colors.RED, "Not a supported length unit");
  }
};

export default CPrecipitation;
