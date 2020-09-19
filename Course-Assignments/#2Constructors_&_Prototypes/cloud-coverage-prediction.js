import CWeatherPrediction from "./weather-prediction.js";


class CCloudCoveragePrediction extends  CWeatherPrediction {
    constructor(type, unit, time, place, from, to) {
        super(type, unit, time, place, from, to);
    }
}

export default CCloudCoveragePrediction;