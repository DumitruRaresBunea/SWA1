import "bootstrap/dist/css/bootstrap.css";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./ListData.module.css";
import {
  Box,
  Grid,
  Paper,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableRow,
  TableBody,
  Typography,
  Switch,
} from "@material-ui/core";
import Filters from "../containers/filter-container";
import { DataGrid } from "@material-ui/data-grid";

function ListData(props) {
  const [dispalyedData, setDisplayedData] = useState(props.weatherData || []);

  const columns = [
    { field: "value", headerName: "Value", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "unit", headerName: "Unit", width: 130 },
    { field: "time", headerName: "Time", width: 130 },
    { field: "place", headerName: "Place", width: 130 },
  ];

  const filterDataOnDate = (data) => {
    let i = 0;
    let toReturn = data;

    if (data.length > 0) {
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
    }
    toReturn = toReturn.map((x) => {
      return { id: i++, ...x };
    });
    return toReturn;
  };

  useEffect(() => {
    props.place === "None"
      ? props.onFetchData()
      : props.onFetchDataForPlace(props.place);
  }, [props.place]);

  useEffect(() => {
    setDisplayedData(filterDataOnDate(props.weatherData));
  }, [props.weatherData, props.startDate, props.endDate]);

  return (
    <Fragment>
      <Box
        padding={5}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <div
          style={{
            height: 540,
            width: "100%",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <DataGrid pageSize={8} columns={columns} rows={dispalyedData} />
        </div>
      </Box>
    </Fragment>
  );
}

export default ListData;
