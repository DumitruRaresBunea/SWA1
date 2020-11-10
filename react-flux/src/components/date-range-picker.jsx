import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { InputLabel, Grid } from "@material-ui/core";

const DateRangePicker = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid item>
        <InputLabel>Start date</InputLabel>
        <DatePicker
          autoOk
          // label="Start date"
          clearable
          value={props.startDate}
          onChange={props.setStartDate}
        />
      </Grid>
      <Grid item>
        <InputLabel>End date</InputLabel>
        <DatePicker
          autoOk
          // label="End date"
          clearable
          value={props.endDate}
          onChange={props.setEndDate}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DateRangePicker;
