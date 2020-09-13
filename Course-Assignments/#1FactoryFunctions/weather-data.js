import Event from "./event.js";
import DataType from "./data-type.js";

const WeatherData = (options) => {
  const weatherData = {
    value: options.value,
  };

  weatherData.getValue = () => weatherData.valuel;

  return { ...weatherData, ...Event(options), ...DataType(options) };
};

// Verification

// let weatherData1 = WeatherData({
//   value: 1,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
//   unit: "kmh",
// });

// console.log(weatherData1);
// console.log(weatherData1.getValue());
// console.log(weatherData1.getTime());
// console.log(weatherData1.getPlace());
// console.log(weatherData1.getType());
// console.log(weatherData1.getUnit());
