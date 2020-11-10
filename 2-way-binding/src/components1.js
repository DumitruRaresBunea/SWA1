import model from "./model.js";

var weatherContainer = document.getElementById("data");
var forecastContainer = document.getElementById("forecast");
var minTempContainer = document.getElementById("minTemp");
var maxTempContainer = document.getElementById("maxTemp");
var totalPrecipitationContainer = document.getElementById("totalPrec");
var averageWindSpeedContainer = document.getElementById("speed");
var directionContainer = document.getElementById("direction");
var cloudsContainer = document.getElementById("clouds");

let weatherData = [];
const fetchPromiseData = fetch("http://localhost:8080/data");
fetchPromiseData
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderHTMLForData(data);
  });

const fetchPromiseForecast = fetch("http://localhost:8080/forecast");
fetchPromiseForecast
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderHTMLForForecast(data);
  });

function renderHTMLForData(data) {
  var filtered = model().latestMeasurements(data);
  weatherContainer.innerHTML = filtered
    .map(
      (x) =>
        `<tr>
  <td>${x.value}</td>
  <td>${x.type}</td>
  <td>${
    x.direction ? x.direction : x.precipitation_type ? x.precipitation_type : ""
  }</td>
  <td>${x.unit}</td>
  <td>${x.time}</td>
  <td>${x.place}</td>
    </tr>`
    )
    .join("");

  minTempContainer.innerHTML = model().lowestTemperatureValue(
    model().getDataForLastNDaysForType(data, 5, "temperature")
  );

  maxTempContainer.innerHTML = model().highestTemperatureValue(
    model().getDataForLastNDaysForType(data, 5, "temperature")
  );

  totalPrecipitationContainer.innerHTML = model()
    .totalPrecipitation(
      model().getDataForLastNDaysForType(data, 5, "precipitation")
    )
    .toFixed(2);

  averageWindSpeedContainer.innerHTML = model()
    .averageWindSpeed(model().getDataForLastNDaysForType(data, 5, "wind speed"))
    .toFixed(2);

  directionContainer.innerHTML = model().dominantWindDirection(
    model().getDataForLastNDaysForType(data, 5, "wind speed")
  );

  cloudsContainer.innerHTML = model()
    .averageCloudCoverage(
      model().getDataForLastNDaysForType(data, 5, "cloud coverage")
    )
    .toFixed(2);
}

function renderHTMLForForecast(data) {
  var filteredForecast = model().predictions24Hours(data);
  forecastContainer.innerHTML = filteredForecast
    .map(
      (x) =>
        `<tr>
    <td>${x.from}</td>
    <td>${x.to}</td>
    <td>${x.type}</td>
    <td>${x.unit}</td>
    <td>${x.time}</td>
    <td>${x.place}</td>
      </tr>`
    )
    .join("");
}



