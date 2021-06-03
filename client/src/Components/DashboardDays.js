import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles({
  button: {
    margin: "0px 2px",
  },
});

function DashboardDays({ day, data }) {
  const classes = useStyles();
  const [varient, setVarient] = useState(false);
  const [{ selectedDays }, dispatch] = useStateProviderValue();
  useEffect(() => {
    data.map((date) => {
      if (date == day) setVarient(true);
    });
  }, []);

  const handleDays = (e) => {
    setVarient(!varient);
  };
  useEffect(() => {
    if (varient == true)
      dispatch({
        type: "SETDAYS",
        selectedDays: [...selectedDays, day],
      });
    else if (varient == false) {
      selectedDays.splice(selectedDays.indexOf(day), 1);
      dispatch({
        type: "SETDAYS",
        selectedDays: selectedDays,
      });
    }
  }, [varient]);
  return (
    <Button
      className={classes.button}
      variant={varient ? "contained" : "outlined"}
      color="primary"
      id={day}
      onClick={handleDays}
    >
      {day}
    </Button>
  );
}

export default DashboardDays;
