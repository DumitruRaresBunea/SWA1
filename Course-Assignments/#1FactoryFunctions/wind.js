import { SpeedUnits, CardinalDirections } from "./enums.js";
import WeatherData from "./weather-data.js";

const msToMph = (value) => value * 2.237;
const mphToMs = (value) => value / 2.237;

const Wind = (options) => {
  const getDirection = () => options.direction;
  const setDirection = (newDirection) => (options.direction = newDirection);

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.value = msToMph(options.value);
    } else if (options.unit === SpeedUnits.MPH) {
      console.log("\u001b[1;31m Already in MPH");
    } else {
      console.log("\u001b[1;31m Not a supported speed unit");
    }
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.value = mphToMs(options.value);
    } else if (options.unit === SpeedUnits.MS) {
      console.log("Already in MS");
    } else {
      console.log("Not a supported speed unit");
    }
  };
  return {
    getDirection,
    setDirection,
    convertToMPH,
    convertToMS,
    ...WeatherData(options),
  };
};

export default Wind;

// Verification
// let wind = Wind({
//   unit: SpeedUnits.MPH,
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
//   direction: CardinalDirections.SE,
// });

// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMPH();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMS();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMPH();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.setDirection(CardinalDirections.NV);
// console.log(wind.getDirection());
