import Temperature from "./temperature.js";
import CloudCoverage from "./cloud-coverage.js";
import Wind from "./wind.js";
import Precipitation from "./precipitation.js";
import WeatherData from "./weather-data.js";
import {
  TemperatureUnits,
  PrecipitationTypes,
  CardinalDirections,
  LengthUnits,
  SpeedUnits,
  DataType,
} from "./enums.js";

const WeatherHistory = (options) => {
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
  const data = () => options.data;

  return { data, add, convertToInternationalUnits, convertToUsUnits };
};

let wh = WeatherHistory({ data: [] });
let temp = Temperature({
  unit: TemperatureUnits.CELSIUS,
  value: 0,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: DataType.TEMPERATURE,
});
let prec = Precipitation({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: DataType.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});
let wind = Wind({
  unit: SpeedUnits.MPH,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: DataType.WIND,
  direction: CardinalDirections.SE,
});
wh.add(temp);
wh.add(prec);
wh.add(wind);
debugger;
console.log(wh.data().map((x) => x.getUnit() + " " + x.getValue()));
wh.convertToUsUnits();
console.log(wh.data().map((x) => x.getUnit() + " " + x.getValue()));
wh.convertToInternationalUnits();
console.log(wh.data().map((x) => x.getUnit() + " " + x.getValue()));
