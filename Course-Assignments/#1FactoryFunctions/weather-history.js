import Temperature from "./temperature.js";
import CloudCoverage from "./cloud-coverage.js";
import Wind from "./wind.js";
import Precipitation from "./precipitation.js";
import DateInterval from "./date-interval.js";
import {
  TemperatureUnits,
  PrecipitationTypes,
  CardinalDirections,
  LengthUnits,
  SpeedUnits,
  WeatherDataTypes,
} from "./enums.js";

const WeatherHistory = (options) => {
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
    console.log("\u001b[1;33m Converting to US units");
    options.data.forEach((x) => {
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
    console.log("\u001b[1;33m Converted to US units");
  };

  const convertToInternationalUnits = () => {
    console.log("\u001b[1;33m Converting to INTERNATIONAL units");
    options.data.forEach((x) => {
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
    console.log("\u001b[1;33m Converted to INTERNATIONAL units");
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
    let historyTitle = "\u001b[1;36m \n Weather history:";
    let placeString =
      getCurrentPlace() !== undefined ? " \n - in: " + getCurrentPlace() : "";
    let typeString =
      getCurrentType() !== undefined ? " \n - for: " + getCurrentType() : "";
    let dateString =
      getCurrentDateInterval() !== undefined
        ? " \n - from: " +
          getCurrentDateInterval().from() +
          " \n - to: " +
          getCurrentDateInterval().to()
        : "";

    console.log(historyTitle + placeString + typeString + dateString);
    let placeDetailsString = "";
    let typeDetailsString = "";

    dataArrray.map((x) => {
      placeDetailsString = getCurrentPlace() === undefined ? x.getPlace() : "";
      typeDetailsString = getCurrentType() === undefined ? x.getType() : "";
      console.log(
        "\u001b[1;32m " +
          placeDetailsString +
          " " +
          typeDetailsString +
          " " +
          x.getUnit() +
          " " +
          x.getValue()
      );
    });
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

let wh = WeatherHistory({
  data: [],
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
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
// wh.setCurrentType(WeatherDataTypes.WIND);
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

let temp = Temperature({
  unit: TemperatureUnits.CELSIUS,
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let prec = Precipitation({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});
let wind = Wind({
  unit: SpeedUnits.MPH,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.WIND,
  direction: CardinalDirections.SE,
});
let clouds = CloudCoverage({
  unit: "Percentage",
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.CLOUDCOVERAGE,
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
wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
wh.printData(wh.data());
wh.clearCurrentType();
wh.printData(wh.data());
wh.clearCurrentPlace();
wh.printData(wh.data());
wh.clearCurrentDateInterval();
wh.printData(wh.data());
wh.convertToUsUnits();
wh.printData(wh.data());
wh.convertToUsUnits();
