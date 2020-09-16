import { LengthUnits, PrecipitationTypes } from "./enums.js";
import WeatherData from "./weather-data.js";

const Precipitation = (options) => {
  const getPrecipitaionType = () => options.precipitationType;

  const setPrecipitationType = (newPrecipitationtype) =>
    (options.precipitationType = newPrecipitationtype);

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value = options.value / 25.4;
    } else if (options.unit === LengthUnits.INCHES) {
      console.log("Already in INCHES");
    } else {
      console.log("Not a supported length unit");
    }
  };

  const convertToMM = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.value = options.value * 25.4;
    } else if (options.unit === LengthUnits.MM) {
      console.log("Already in MM");
    } else {
      console.log("Not a supported length unit");
    }
  };

  return {
    getPrecipitaionType,
    setPrecipitationType,
    convertToInches,
    convertToMM,
    ...WeatherData(options),
  };
};

export default Precipitation;

// Verification
// let prec = Precipitation({
//   unit: LengthUnits.MM,
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
//   precipitationType: PrecipitationTypes.SNOW,
// });

// prec.convertToInches();
// console.log(prec.getUnit() + " " + prec.getValue());
// prec.convertToMM();

// console.log(prec.getUnit() + " " + prec.getValue());
// prec.convertToMM();

// prec.setPrecipitationType(PrecipitationTypes.RAIN);
// console.log(prec.getPrecipitaionType());
