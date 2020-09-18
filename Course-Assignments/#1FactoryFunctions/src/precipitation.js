import { LengthUnits, PrecipitationTypes, Colors } from "./enums.js";
import WeatherData from "./weather-data.js";
import { mmToInch, inchToMM } from "../../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

const Precipitation = (options) => {
  const getPrecipitaionType = () => options.precipitationType;

  const setPrecipitationType = (newPrecipitationtype) =>
    (options.precipitationType = newPrecipitationtype);

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value = mmToInch(options.value);
    } else if (options.unit === LengthUnits.INCHES) {
      styledLog(Colors.RED, "Already in INCHES");
    } else {
      styledLog(Colors.RED, "Not a supported length unit");
    }
  };

  const convertToMM = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.value = inchToMM(options.value);
    } else if (options.unit === LengthUnits.MM) {
      styledLog(Colors.RED, "Already in MM");
    } else {
      styledLog(Colors.RED, "Not a supported length unit");
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