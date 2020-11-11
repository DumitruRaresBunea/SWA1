import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { Box, Button, Fab, Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Filters from "../containers/filter-container";
import { Add } from "@material-ui/icons";

function ListData(props) {
  const [dispalyedData, setDisplayedData] = useState(props.weatherData || []);
  const [columns, setColumns] = useState([]);

  const valueCol = { field: "value", headerName: "Value", width: 130 };
  const fromCol = { field: "from", headerName: "Minimum value", width: 140 };
  const toCol = { field: "to", headerName: "Maximium value", width: 140 };

  const commonColumns = [
    { field: "type", headerName: "Type", width: 130 },
    { field: "unit", headerName: "Unit", width: 130 },
    { field: "time", headerName: "Time", width: 200 },
    { field: "place", headerName: "Place", width: 130 },
    {
      field: "extraDetails",
      headerName: "Extra details",
      width: 130,

      valueGetter: (params) =>
        `${
          params.getValue("precipitation_type") ||
          params.getValue("direction") ||
          ""
        }`,
    },
  ];

  const columnsChange = () => {
    let toReturn = commonColumns;
    if (props.dataType === "History") toReturn.push(valueCol);
    else toReturn.push(fromCol, toCol);
    return toReturn;
  };

  const filterDataOnDate = (data) => {
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
    toReturn = toReturn.map((x, index) => {
      return {
        id: index,
        key: index,
        ...x,
        time: new Date(x.time).toLocaleString(),
      };
    });
    return toReturn;
  };

  useEffect(() => {
    props.place === "None"
      ? props.onFetchData(props.dataType)
      : props.onFetchDataForPlace(props.place, props.dataType);
    setColumns(columnsChange());
  }, [props.place, props.dataType, props.loading]);

  useEffect(() => {
    setDisplayedData(filterDataOnDate(props.weatherData));
    setColumns(columnsChange());
  }, [props.weatherData, props.startDate, props.endDate, props.dataType]);

  return (
    <>
      <Filters />
      <Box
        paddingX={5}
        paddingTop={5}
        paddingBottom={15}
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
            padding: 3 + "px",
            backgroundColor: "white",
          }}
        >
          <Box paddingBottom={3}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => props.reset()}
                >
                  Refresh
                </Button>
              </Grid>
              <Grid item>
                <Fab
                  size="medium"
                  color="primary"
                  onClick={() => (window.location = "/create")}
                >
                  <Add />
                </Fab>
              </Grid>
            </Grid>
          </Box>
          {!props.loading && dispalyedData && (
            <Box paddingBottom={3} bgcolor="white">
              <DataGrid
                pageSize={8}
                columns={columns}
                rows={dispalyedData || []}
                autoHeight
                onError={() => "NO DATA FOR YOU"}
                pagination
              />
            </Box>
          )}
        </div>
      </Box>
    </>
  );
}

export default ListData;
