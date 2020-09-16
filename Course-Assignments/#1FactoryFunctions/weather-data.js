import Event from "./event.js";
import DataType from "./data-type.js";

const WeatherData = (options) => {
  const getValue = () => options.value;

  const setValue = (newValue) => (options.value = newValue);

  return {
    setValue,
    getValue,
    ...Event(options),
    ...DataType(options),
  };
};

export default WeatherData;
// Verification

// let weatherData1 = WeatherData({
//   value: 1,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
//   unit: "kmh",
// });

// console.log(weatherData1.getValue());
// console.log(weatherData1.getTime());
// console.log(weatherData1.getPlace());
// console.log(weatherData1.getType());
// console.log(weatherData1.getUnit());

// weatherData1.setTime(new Date(2011, 3, 5));
// weatherData1.setPlace("another place");

// weatherData1.setType("length");
// weatherData1.setUnit("cm");

// weatherData1.setValue(3);
// console.log(weatherData1.getValue());
// console.log(weatherData1.getTime());
// console.log(weatherData1.getPlace());
// console.log(weatherData1.getType());
// console.log(weatherData1.getUnit());

// console.log(weatherData1);
