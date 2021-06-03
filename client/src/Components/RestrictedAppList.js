import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ListSubheader } from "@material-ui/core";
import AppListItem from "./AppListItem";
import TimeCard from "./TimeCard";
import { useStateProviderValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RestrictedAppList() {
  const classes = useStyles();
  return (
    <>
      <TimeCard />
      <List
        subheader={<ListSubheader>Block Apps</ListSubheader>}
        className={classes.root}
      >
        <AppListItem app={"Facebook"} />
        <AppListItem app={"Twitter"} />
        <AppListItem app={"Instagram"} />
        <AppListItem app={"Youtube"} />
        <AppListItem app={"Eterno"} />
      </List>
    </>
  );
}
