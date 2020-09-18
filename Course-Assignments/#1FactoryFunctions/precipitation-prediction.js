import { LengthUnits, PrecipitationTypes } from "./enums.js";
import WeatherData from "./weather-data.js";
import WeatherPrediction from "./weather-prediction.js";

const mmToInch = (value) => value / 25.5;
const inchToMm = (value) => value * 25.5;

const PrecipitationPrediction = (options) => {
  // const matches = (data) => {
  //   if (options.data == data) {
  //     console.log(
  //       "Precipitation Prediction matches with actual Precipitations"
  //     );
  //   } else {
  //     console.log(
  //       "Precipitation Prediction does not match with actual Precipitations"
  //     );
  //   }
  // };
  const getPrecipitaionType = () => options.precipitationType;

  const setPrecipitationType = (newPrecipitationtype) =>
    (options.precipitationType = newPrecipitationtype);

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value = mmToInch(options.value);
    } else if (options.unit === LengthUnits.INCHES) {
      console.log("\u001b[1;31m Already in INCHES");
    } else {
      console.log("\u001b[1;31m Not a supported length unit");
    }
  };

  const convertToMM = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.value = inchToMm(options.value);
    } else if (options.unit === LengthUnits.MM) {
      console.log("\u001b[1;31m Already in MM");
    } else {
      console.log("\u001b[1;31m Not a supported length unit");
    }
  };

  return {
    getPrecipitaionType,
    setPrecipitationType,
    convertToInches,
    convertToMM,
    // ...WeatherData(options),
    ...WeatherPrediction(options),
  };
};

export default PrecipitationPrediction;
