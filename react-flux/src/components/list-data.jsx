import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import classes from "./ListData.module.css";
import { Box, Grid } from "@material-ui/core";
import Filters from "../containers/filter-container";

function ListData(props) {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  const [dispalyedData, setDisplayedData] = useState(props.weatherData || []);

  const filterDataOnDate = (data) => {
    let toReturn = data;
    if (props.startDate === null && props.endDate === null) {
      return toReturn;
    } else if (data.length > 0) {
      debugger;
      if (props.startDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) >= new Date(props.startDate)
        );
      }
      if (props.endDate !== null) {
        toReturn = toReturn?.filter(
          (x) => new Date(x.time) <= new Date(props.endDate)
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
  }, [props.weatherData, props.startDate, props.endDate]);

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
    <Box>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <h1>Latest measured data</h1>
        </Grid>
        <Grid item>
          <Filters />
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

export default ListData;
