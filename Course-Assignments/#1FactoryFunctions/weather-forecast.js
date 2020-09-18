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

  const getCurrentDateInterval = () => options.dateInterval;

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

  const typeCondition = (x) =>
    getCurrentType() ? x.getType() === getCurrentType() : true;
  const placeCondition = (x) =>
    getCurrentPlace() ? x.getPlace() === getCurrentPlace() : true;
  const dateCondition = (x) =>
    getCurrentDateInterval()
      ? getCurrentDateInterval().contains(x.getTime())
      : true;

  const add = (weatherData) => options.data.push(weatherData);
  const data = () => {
    let returnArray = [];

    options.data.map((x) => {
      typeCondition(x) &&
        placeCondition(x) &&
        dateCondition(x) &&
        returnArray.push(x);
    });

    return returnArray;
  };
  const allData = () => options.data;

  const printData = (dataArrray) => {
    let historyTitle = "Weather history";
    let placeString =
      getCurrentPlace() !== undefined ? " in: " + getCurrentPlace() : "";
    let typeString =
      getCurrentType() !== undefined ? " for: " + getCurrentType() : "";
    let dateString =
      getCurrentDateInterval() !== undefined
        ? " from: " +
          getCurrentDateInterval().from() +
          " to: " +
          getCurrentDateInterval().to()
        : "";

    console.log(historyTitle + placeString + typeString + dateString);
    dataArrray.map((x) =>
      console.log(
        x.getPlace() +
          " " +
          x.getType() +
          " " +
          x.getUnit() +
          " " +
          x.getValue(),
        "\n"
      )
    );
  };

  return {
    data,
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

let wh = WeatherForecast({
  data: [],
  place: "Aarhus",
  type: DataType.TEMPERATURE,
  dateInterval: DateInterval({
    startDate: new Date(2010, 10, 24),
    endDate: new Date(2021, 11, 24),
  }),
});
// console.log(wh.getCurrentPlace());
// wh.setCurrentPlace("Brasov 4ever");
// console.log(wh.getCurrentPlace());
// wh.clearCurrentPlace();
// console.log(wh.getCurrentPlace());

// console.log(wh.getCurrentType());
// wh.setCurrentType(DataType.WIND);
// console.log(wh.getCurrentType());
// wh.clearCurrentType();
// console.log(wh.getCurrentType());
// debugger;
// let di = wh.getCurrentDateInterval();
// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
// );

// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
// );
// wh.setCurrentDateInterval(
//   DateInterval({
//     startDate: new Date(2020, 10, 24),
//     endDate: new Date(2020, 11, 24),
//   })
// );
// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
// );

// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
// );
// wh.clearCurrentDateInterval();
// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
// );

// console.log(
//   wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
// );


let temp = TemperaturePrediction({
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: DataType.TEMPERATURE,
  unit: TemperatureUnits.CELSIUS,
  
});

let temp = TemperaturePrediction({
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: DataType.TEMPERATURE,
  unit: TemperatureUnits.CELSIUS,
  
});
let prec = PrecipitationPrediction({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: DataType.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});
let wind = WindPrediction({
  unit: SpeedUnits.MPH,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: DataType.WIND,
  direction: CardinalDirections.SE,
});
let clouds = CloudCoveragePrediction({
  unit: "Percentage",
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: DataType.CLOUDCOVERAGE,
});
wh.add(temp);
wh.add(prec);
wh.add(clouds);
wh.add(wind);
// console.log(wh.printData());
// wh.convertToUsUnits();
// console.log(wh.printData());

// wh.convertToInternationalUnits();
// console.log(wh.printData());
debugger;
// console.log(wh.data());
wh.printData(wh.data());
wh.setCurrentType(DataType.PRECIPITATION);
wh.printData(wh.data());
wh.clearCurrentType();
wh.printData(wh.data());
wh.clearCurrentPlace();
wh.printData(wh.data());
wh.clearCurrentDateInterval();
wh.printData(wh.data());
wh.convertToUsUnits();
wh.printData(wh.data());
