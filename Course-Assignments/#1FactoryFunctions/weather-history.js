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
  DataType,
} from "./enums.js";

const WeatherHistory = (options) => {
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

let wh = WeatherHistory({
  data: [],
  place: "Brasov",
  type: DataType.TEMPERATURE,
  dateInterval: DateInterval({
    startDate: new Date(20, 10, 24),
    endDate: new Date(20, 11, 24),
  }),
});
console.log(wh.getCurrentPlace());
wh.setCurrentPlace("Brasov 4ever");
console.log(wh.getCurrentPlace());
wh.clearCurrentPlace();
console.log(wh.getCurrentPlace());

console.log(wh.getCurrentType());
wh.setCurrentType(DataType.WIND);
console.log(wh.getCurrentType());
wh.clearCurrentType();
console.log(wh.getCurrentType());

console.log(wh.getCurrentDateInterval().from());
console.log(wh.getCurrentDateInterval().to());
wh.setCurrentDateInterval(
  DateInterval({
    startDate: new Date(2020, 10, 24),
    endDate: new Date(2020, 11, 24),
  })
);
console.log(wh.getCurrentDateInterval().from());
console.log(wh.getCurrentDateInterval().to());
wh.clearCurrentDateInterval();
console.log(wh.getCurrentDateInterval().from());
console.log(wh.getCurrentDateInterval().to());
// let temp = Temperature({
//   unit: TemperatureUnits.CELSIUS,
//   value: 0,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: DataType.TEMPERATURE,
// });
// let prec = Precipitation({
//   unit: LengthUnits.MM,
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: DataType.PRECIPITATION,
//   precipitationType: PrecipitationTypes.SNOW,
// });
// let wind = Wind({
//   unit: SpeedUnits.MPH,
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: DataType.WIND,
//   direction: CardinalDirections.SE,
// });
// let clouds = CloudCoverage({
//   unit: "Percentage",
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: DataType.CLOUDCOVERAGE,
// });
// wh.add(temp);
// wh.add(prec);
// wh.add(clouds);
// wh.add(wind);
// console.log(wh.printData());
// wh.convertToUsUnits();
// console.log(wh.printData());

// wh.convertToInternationalUnits();
// console.log(wh.printData());
