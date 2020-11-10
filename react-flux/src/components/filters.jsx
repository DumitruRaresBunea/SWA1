import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Select, Grid, InputLabel } from "@material-ui/core";
import DateRangePicker from "../components/date-range-picker";

const FiltersComponent = (props) => {
  return (
    <Grid container justify="space-between" spacing={1}>
      <Grid item>
        <InputLabel>Place</InputLabel>
        <Select
          label="Place"
          native
          value={props.place}
          onChange={(event) => {
            props.onChangePlace(event.target.value);
          }}
        >
          <option value="None">None</option>
          <option value="Aarhus">Aarhus</option>
          <option value="Copenhagen">Copenhagen</option>
          <option value="Horsens">Horsens</option>
        </Select>
      </Grid>
      <DateRangePicker
        startDate={props.startDate}
        endDate={props.endDate}
        setStartDate={props.onChangeStartDate}
        setEndDate={props.onChangeEndDate}
      />
    </Grid>
  );
};

export default FiltersComponent;
