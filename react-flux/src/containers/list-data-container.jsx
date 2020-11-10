import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "../stores/WeatherDataListStore/index";
import ListData from "../components/list-data";

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherDataList.weatherData,
    loading: state.weatherDataList.loading,
    place: state.filter.place,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    onFetchData: () => dispatch(actions.fetchData()),
    onFetchDataForPlace: (place) => dispatch(actions.fetchDatForPlace(place)),
    onPlaceChange: (place) => dispatch(actions.changePlace(place)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
