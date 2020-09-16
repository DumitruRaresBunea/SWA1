import { LengthUnits } from "./enums.js";

const Precipitation = (options) => {
  const precipitaionType = () => options.type;
  const convertToInches = () => {
    if (options.unit !== LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value / 25.4;
    }
    const convertToMM = () => {
      if (options.unit !== LengthUnits.INCHES) {
        options.unit = LengthUnits.MM;
        options.value * 25.4;
      }
    };
  };
};
