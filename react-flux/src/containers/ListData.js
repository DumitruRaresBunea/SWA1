import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import * as actions from "../WeatherDataListStore/index";
import classes from "./ListData.module.css";
import { Box, Select, Grid, InputLabel } from "@material-ui/core";
import DateRangePicker from "../components/date-range-picker";

function ListData(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [dispalyedData, setDisplayedData] = useState(props.weatherData || []);

  const filterDataOnDate = (data) => {
    let toReturn = data;
    if (startDate === null && endDate === null) {
      return toReturn;
    } else if (data.length > 0) {
      debugger;
      if (startDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) >= new Date(startDate)
        );
      }
      if (endDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) <= new Date(endDate)
        );
      }
      return toReturn;
    } else return toReturn;
  };

  useEffect(() => {
    props.place === "None"
      ? props.onFetchData()
      : props.onFetchDataForPlace(props.place);
  }, [props.place]);

  useEffect(() => {
    setDisplayedData(filterDataOnDate(props.weatherData));
  }, [props.weatherData, startDate, endDate]);

  const renderTableData = () => {
    return dispalyedData.map((data, index) => {
      const { value, place, unit, type, time } = data; //destructuring
      return (
        <tr key={index}>
          <td>{value}</td>
          <td>{type}</td>
          <td>{unit}</td>
          <td>{time}</td>
          <td>{place}</td>
        </tr>
      );
    });
  };
  return (
    // <div className="col-sm-6 col-md-6 col-lg-6">
    <Box>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <h1>Latest measured data</h1>
        </Grid>
        <Grid item>
          <Grid container justify="space-between" spacing={1}>
            <Grid item>
              <InputLabel>Place</InputLabel>
              <Select
                label="Place"
                native
                value={props.place}
                placeholder="Monkey"
                onChange={(event) => {
                  props.onPlaceChange(event.target.value);
                }}
              >
                <option value="None">None</option>
                <option value="Aarhus">Aarhus</option>
                <option value="Copenhagen">Copenhagen</option>
                <option value="Horsens">Horsens</option>
              </Select>
            </Grid>
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </Grid>
        </Grid>
      </Grid>

      <table className={classes.table}>
        <thead className={classes.TableHeadColor}>
          <tr>
            <th scope="col">Value</th>
            <th scope="col">Type</th>
            <th scope="col">Unit</th>
            <th scope="col">Time</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherDataList.weatherData,
    loading: state.weatherDataList.loading,
    place: state.weatherDataList.place,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => dispatch(actions.fetchData()),
    onFetchDataForPlace: (place) => dispatch(actions.fetchDatForPlace(place)),
    onPlaceChange: (place) => dispatch(actions.changePlace(place)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData);
