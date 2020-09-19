import CDateInterval from "./date-interval.js";
import {
  WeatherDataTypes,
  TemperatureUnits,
  PrecipitationTypes,
  LengthUnits,
  Colors,
} from "./enums.js";
import CTemperature from "./temperature.js";
import CPrecipitation from "./precipitation.js";
import CWind from "./wind.js";
import CCloudCoverage from "./cloud-coverage.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

class CWeatherHistory {
  constructor(options) {
    this.data = options.data;
    this.currentPlace = options.currentPlace;
    this.currentType = options.currentType;
    this.currentPeriod = options.currentPeriod;
  }

  getCurrentPalce() {
    return this.currentPlace;
  }
  setCurrentPlace(place) {
    this.currentPlace = place;
  }
  clearCurrentPlace() {
    this.currentPlace = undefined;
  }
  getCurrentType() {
    return this.currentType;
  }
  setCurrentType(type) {
    this.currentType = type;
  }
  clearCurrentType() {
    this.currentType = undefined;
  }
  getCurrentPeriod() {
    return this.currentPeriod;
  }
  setCurrentPeriod(period) {
    this.currentPeriod = period;
  }
  clearCurrentPeriod() {
    this.currentPeriod = undefined;
  }
}

CWeatherHistory.prototype.convertToUSUnits = function () {
  styledLog(Colors.YELLOW, "Converting to US units");
  this.data.forEach((x) => {
    switch (x.getType()) {
      case WeatherDataTypes.TEMPERATURE:
        x.convertToF();
        break;
      case WeatherDataTypes.CLOUDCOVERAGE:
        break;
      case WeatherDataTypes.WIND:
        x.convertToMPH();
        break;
      case WeatherDataTypes.PRECIPITATION:
        x.convertToInches();
        break;
    }
  });
  styledLog(Colors.YELLOW, "Converted to US units");
};

CWeatherHistory.prototype.convertToInternationalUnits = function () {
  styledLog(Colors.YELLOW, "\nConverting to INTERNATIONAL units");
  this.data.forEach((x) => {
    switch (x.getType()) {
      case WeatherDataTypes.TEMPERATURE:
        x.convertToC();
        break;
      case WeatherDataTypes.CLOUDCOVERAGE:
        break;
      case WeatherDataTypes.WIND:
        x.convertToMS();
        break;
      case WeatherDataTypes.PRECIPITATION:
        x.convertToMM();
        break;
    }
  });
  styledLog(Colors.YELLOW, "Converted to INTERNATIONAL units");
};

CWeatherHistory.prototype.allData = function () {
  return this.data;
};

CWeatherHistory.prototype.add = function (weatherData) {
  this.data.push(weatherData);
};

CWeatherHistory.prototype.conditions = function (x) {
  getCurrentType() ? x.getType() === getCurrentType() : true;
  getCurrentPlace() ? x.getPlace() === getCurrentPlace() : true;
  getCurrentDateInterval()
    ? getCurrentDateInterval().contains(x.getTime())
    : true;
};

CWeatherHistory.prototype.dataX = function () {
  let returnArray = [];

  this.data.map((x) => {
    this.data.conditions(x) && returnArray.push(x);
  });
  return returnArray;
};

export default CWeatherHistory;

var t = new CTemperature(
  WeatherDataTypes.TEMPERATURE,
  TemperatureUnits.CELSIUS,
  new Date(2000, 2, 2),
  "Brasov",
  10
);

var p = new CPrecipitation(
  WeatherDataTypes.PRECIPITATION,
  LengthUnits.MM,
  new Date(2000, 1, 1),
  "Chisinau",
  20
);
debugger;
var wh = new CWeatherHistory({ data: [t, p], currentPlace: "string" });
console.log(wh);
wh.convertToUSUnits();
console.log(wh);
console.log(wh.getCurrentPalce());
console.log(wh.dataX());
