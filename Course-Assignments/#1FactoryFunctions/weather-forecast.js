import TemperaturePrediction from "./temperature-prediction.js";
import CloudCoveragePrediction from "./cloud-coverage-prediction.js";
import WindPrediction from "./wind-prediction.js";
import PrecipitationPrediction from "./precipitation-prediction.js";
import DateInterval from "./date-interval.js";
import {
  TemperatureUnits,
  PrecipitationTypes,
  CardinalDirections,
  LengthUnits,
  SpeedUnits,
  DataType,
} from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";

const WeatherForecast = (options) => { 
  const getCurrentPlace = () => options.place;

  const setCurrentPlace = (newCurrentPlace) =>
    (options.place = newCurrentPlace);

  const clearCurrentPlace = () => (options.place = undefined);

  const getCurrentType = () => options.type;

  const setCurrentType = (newCurrentType) => (options.type = newCurrentType);

  const clearCurrentType = () => (options.type = undefined);

  const getCurrentDateInterval = () =>
    options.dateInterval && options.dateInterval;

  const setCurrentDateInterval = (newCurrentDateInterval) =>
    (options.dateInterval = newCurrentDateInterval);

  const clearCurrentDateInterval = () => (options.dateInterval = undefined);

  const convertToUsUnits = () => {
    options.data.forEach((x) => {
      switch (x.getType()) {
        case DataType.TEMPERATURE:
          x.convertToF();
          break;
        case DataType.CLOUDCOVERAGE:
          break;
        case DataType.WIND:
          x.convertToMPH();
          break;
        case DataType.PRECIPITATION:
          x.convertToInches();
          break;
      }
    });
  };

  const convertToInternationalUnits = () => {
    options.data.forEach((x) => {
      switch (x.getType()) {
        case DataType.TEMPERATURE:
          x.convertToC();
          break;
        case DataType.CLOUDCOVERAGE:
          break;
        case DataType.WIND:
          x.convertToMS();
          break;
        case DataType.PRECIPITATION:
          x.convertToMM();
          break;
      }
    });
  };
  const add = (weatherData) => options.data.push(weatherData);
  const allData = () => options.data;
  const printData = () =>
    options.data.map(
      (x) => x.getType() + " " + x.getUnit() + " " + x.getValue(),
      "\n"
    );

  return {
    getCurrentType,
    setCurrentType,
    clearCurrentType,
    getCurrentPlace,
    setCurrentPlace,
    clearCurrentPlace,
    getCurrentDateInterval,
    setCurrentDateInterval,
    clearCurrentDateInterval,
    allData,
    add,
    convertToInternationalUnits,
    convertToUsUnits,
    printData,
  };
};

export default WeatherForecast;