import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles({
  button: {
    margin: "0px 2px",
  },
});

function DayButton({ day }) {
  const classes = useStyles();
  const [varient, setVarient] = useState(false);
  const [{ selectedDays, dbData }, dispatch] = useStateProviderValue();
  const handleDays = () => {
    setVarient(!varient);
  };
  useEffect(() => {
    if (selectedDays.indexOf(day) != -1) return;
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
  useEffect(() => {
    console.log(dbData?.data.selectedDays);
    dbData?.data.selectedDays.map((date) => {
      // dispatch({
      //   type: "SETDAYS",
      //   selectedDays: [...selectedDays, date],
      // });
      if (date == day) setVarient(!varient);
    });
  }, [dbData]);
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

export default DayButton;
