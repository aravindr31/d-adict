import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0h",
  },
  {
    value: 20,
    label: "1h",
  },
  {
    value: 40,
    label: "2h",
  },
  {
    value: 60,
    label: "3h",
  },
  {
    value: 80,
    label: "4h",
  },
  {
    value: 100,
    label: "5h",
  },
];

export default function ModalSlider() {
  const [{ selector }] = useStateProviderValue();
  const classes = useStyles();
  const handleSlider = ( value) => {
    console.log(value);
  };
  const handleChange = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className={classes.root}>
      <Slider
        id="WE"
        defaultValue={0}
        getAriaValueText={handleSlider}
        aria-labelledby="discrete-slider-custom"
        step={10}
        marks={marks}
        onChange={handleChange}
      />
    </div>
  );
}
