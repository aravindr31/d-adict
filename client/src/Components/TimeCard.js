import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider, TextField } from "@material-ui/core";
import DayButton from "./DayButton";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
  },
  root: {
    width: "fit-content",
    border: "2px solid #ccc",
  },
  button: {
    margin: "0px 2px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimeCard() {
  const classes = useStyles();
  const [{ from, to, dbData }, dispatch] = useStateProviderValue();
  const [fromTime, setFromTime] = useState("00:00");
  const [toTime, setToTime] = useState("00:00");

  console.log(dbData?.data.From);
  useEffect(() => {
    if (dbData?.data) {
      console.log("heer")
      setFromTime(dbData.data.From);
      setToTime(dbData.data.To);
    }
  }, [dbData?.data]);
  const handleFrom = (e) => {
    dispatch({
      type: "SETFROM",
      from: e.target.value,
    });
  };
  const handleTo = (e) => {
    dispatch({
      type: "SETTO",
      to: e.target.value,
    });
  };
  // console.log(from, to);
  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>Add Work Time</h2>
        <Divider />
        <br />
        <h4>days active</h4>
        <div className="card-body-daybar">
          <DayButton day="Mon" />
          <DayButton day="Tue" />
          <DayButton day="Wed" />
          <DayButton day="Thu" />
          <DayButton day="Fri" />
          <DayButton day="Sat" />
          <DayButton day="Sun" />
        </div>
        <div className="card-body-timeSelector">
          <div className="card-body-timeSelector-from">
            <form className={classes.container} noValidate>
              <TextField
                id="from"
                label="From"
                type="time"
                value={fromTime}
                // defaultValue={fromTime ? dbData?.data.From : "00:00"}

                className={classes.textField}
                onChange={handleFrom}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900,
                }}
              />
              <TextField
                id="to"
                label="To"
                type="time"
                value={toTime}
                // defaultValue={toTime ? dbData?.data.To : "00:00"}

                onChange={handleTo}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 900,
                }}
              />
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
