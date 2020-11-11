import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "../stores/WeatherDataListStore/index";
import * as filterActions from "../stores/FilterStore/index";

import ListData from "../components/list-data";

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherDataList.weatherData,
    place: state.filter.place,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
    dataType: state.filter.dataType,
    loading: state.weatherDataList.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: (dataType) => dispatch(actions.fetchData(dataType)),
    onFetchDataForPlace: (place, dataType) =>
      dispatch(actions.fetchDatForPlace(place, dataType)),
    onPlaceChange: (place) => dispatch(actions.changePlace(place)),
    reset: () => dispatch(actions.reset()),
    resetOnError: () => {
      dispatch(actions.reset());
      dispatch(filterActions.resetFilters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
