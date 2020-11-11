import React from "react";
import {
  Select,
  Box,
  TextField,
  Button,
  Grid,
  InputLabel,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
const CreateHisotricalData = (props) => {
  return (
    <>
      <Box
        paddingY={5}
        paddingX={5}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <h1>Create historical data</h1>
      </Box>
      <Box
        paddingY={5}
        paddingX={25}
        margin={5}
        bgcolor="white"
        borderRadius={15}
        boxShadow={5}
      >
        <Box padding={1}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <InputLabel>Type</InputLabel>
              <Select
                label="Type"
                native
                value={props.historyDataType}
                onChange={(event) => {
                  props.onChangeType(event.target.value);
                }}
              >
                <option value="Temperature">Temperature</option>
                <option value="Precipitation">Precipitation</option>
                <option value="WindSpeed">Wind Speed</option>
                <option value="CloudCoverage">Cloud Coverage</option>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel>Precipitation</InputLabel>

              <Select
                label="unit"
                native
                disabled={props.form.dataType !== "Precipitation"}
                value={props.precipitation_type}
                onChange={(event) =>
                  props.onChangePrecipitationType(event.target.value)
                }
              >
                <option value="null"></option>
                <option value="rain">Rain</option>
                <option value="sleet">Sleet</option>
                <option value="hail">Hail</option>
                <option value="snow">Snow</option>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel>Unit</InputLabel>
              <Select
                label="Wind Speed"
                native
                disabled={props.form.dataType !== "WindSpeed"}
                value={props.wind_direction}
                onChange={(event) =>
                  props.onChangeWindDirecton(event.target.value)
                }
              >
                <option value="null"></option>
                <option value="North">North</option>
                <option value="Northeast">Northeast</option>
                <option value="East">East</option>
                <option value="Southeast">Southeast</option>
                <option value="South">South</option>
                <option value="Southwest">Southwest</option>
                <option value="West">West</option>
                <option value="Northwest">Northwest</option>
              </Select>
            </Grid>
          </Grid>
        </Box>
        <Box padding={1}>
          <InputLabel>Place</InputLabel>
          <Select
            native
            value={props.form.place}
            onChange={(event) => {
              props.onChangePlace(event.target.value);
            }}
          >
            <option value="None">Place</option>
            <option value="Aarhus">Aarhus</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Horsens">Horsens</option>
          </Select>
        </Box>
        <Box padding={1}>
          <InputLabel>Value</InputLabel>
          <TextField
            type="number"
            value={props.value}
            onChange={(event) => props.onChangeValue(event.target.value)}
            // placeholder="Value"
          />
        </Box>
        <Box padding={1}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              ampm={false}
              disableFuture
              value={props.form.time}
              onChange={props.onChangeTime}
              label="Time"
            />
          </MuiPickersUtilsProvider>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => props.onCreate(props.form)}
            >
              Create
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => (window.location = "/data")}
            >
              Back to list
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CreateHisotricalData;
