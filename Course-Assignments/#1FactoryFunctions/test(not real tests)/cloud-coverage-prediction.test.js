import CloudCoveragePrediction from "./../src/cloud-coverage-prediction.js";
import { WeatherDataTypes } from "../src/enums.js";

let clouds = CloudCoveragePrediction({
  unit: "Percentage",
  from: -1,
  to: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.CLOUDCOVERAGE,
});
console.log(
  clouds.getUnit() + " " + clouds.fromValue() + " " + clouds.toValue()
);
