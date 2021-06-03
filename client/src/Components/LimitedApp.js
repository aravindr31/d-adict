import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListSubheader, Modal } from "@material-ui/core";
import "../Stylesheets/LimitedApp.css";
import LimitedAppList from "./LimitedAppList";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function LimitedApps() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListSubheader>Limit Apps</ListSubheader>
      <LimitedAppList
        name="Facebook"
        weekdays={"1h 00m"}
        weekends={"1h 30m"}
      />
            <LimitedAppList
        name="Instagram"
        weekdays={"1h 00m"}
        weekends={"1h 30m"}
      />
            <LimitedAppList
        name="Youtube"
        weekdays={"1h 00m"}
        weekends={"1h 30m"}
      />

      <LimitedAppList
        name="Twitter"
        weekdays={"1h 00m"}
        weekends={"1h 30m"}
      />
    </div>
  );
}
