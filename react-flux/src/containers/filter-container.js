import { connect } from "react-redux";
import FiltersComponent from "../components/filters";
import * as filterActions from "../stores/FilterStore/action-creators";
import * as actions from "../stores/WeatherDataListStore/index";

const mapStateToProps = (state) => {
  return {
    place: state.filter.place,
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePlace: (place) => dispatch(filterActions.changePlace(place)),
    onChangeStartDate: (startDate) =>
      dispatch(filterActions.changeStartDate(startDate)),
    onChangeEndDate: (endDate) =>
      dispatch(filterActions.changeEndDate(endDate)),
  };
};

const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);

export default Filters;
