// model to acces and map weather data/forecast
// data and forecast are arrays
const model = (data, forecast) => {
  const weatherData = () => data.map((d) => ({ ...d }));

  const forecastData = () => forecast.map((f) => ({ ...f }));

  const addWeatherData = (d) => {
    data.push(d);
  };

  return {
    weatherData,
    forecastData,
    addWeatherData,
  };
};

export default model;
