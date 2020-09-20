import CWindPrediction from "./wind-prediction.js";
import CTemperature from "./temperature.js";
import CPrecipitation from "./precipitation.js";
import CWeatherHistory from "./weather-history.js";

import {
  TemperatureUnits,
  CardinalDirections,
  WeatherDataTypes,
  LengthUnits,
  SpeedUnits,
} from "./enums.js";

var e = new CTemperature(
  TemperatureUnits.CELSIUS,
  new Date(2000, 2, 2),
  "Brasov",
  10
);

console.log(e);
e.convertToF();
console.log(e);
e.convertToC();
console.log(e);

let w = new CWindPrediction(SpeedUnits.MPH, Date.now, "Aarhus", 2, 5, [
  CardinalDirections.NV,
  CardinalDirections.S,
]);

console.log(w);
w.convertToMS();
console.log(w);
w.convertToMPH();

console.log(w);
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
var wh = new CWeatherHistory({ data: [t, p], currentPlace: "Brasov" });
console.log(wh);
wh.convertToUSUnits();
console.log(wh);
console.log(wh.getCurrentPlace());
console.log(wh.getData());
