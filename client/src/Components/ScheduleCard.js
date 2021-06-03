import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DashboardDays from "./DashboardDays";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStateProviderValue } from "../StateProvider";
import axios from "../axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    margin: "10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function ScheduleCard({ item }) {
  console.log(item);
  const [{ dbData,selectedDays }, dispatch] = useStateProviderValue();
  const classes = useStyles();
  const [response, setResponse] = useState();

  const handleClick = async () => {
    await axios.get(`/editschedule/${item._id}`).then((response) => {
      console.log(response);
      dispatch({
        type: "SETDATA",
        dbData: response?.data,
      });
    });
  };
    // console.log(selectedDays)  

  useEffect(() => {
    // console.log(response)
    dispatch({
      type: "SETDATA",
      dbData: response,
    });
  }, [response]);
  return (
    <Card className={classes.root} key={item._id}>
      <CardContent>
        <div className="title">
          <h2>Work-Time</h2>
          <Link
            to={`editschedule/${item._id}`}
            className={classes.link}
            onClick={handleClick}
          >
            <Button as variant="outlined" color="secondary">
              Edit
            </Button>
          </Link>
        </div>
        <div className="card-body-daybar">
          <DashboardDays day="Mon" data={item.data.selectedDays} />
          <DashboardDays day="Tue" data={item.data.selectedDays} />
          <DashboardDays day="Wed" data={item.data.selectedDays} />
          <DashboardDays day="Thu" data={item.data.selectedDays} />
          <DashboardDays day="Fri" data={item.data.selectedDays} />
          <DashboardDays day="Sat" data={item.data.selectedDays} />
          <DashboardDays day="Sun" data={item.data.selectedDays} />
        </div>
        <div className="card-body-timeSelector-from">
          <form className={classes.container} noValidate>
            <TextField
              disabled
              id="from"
              label="From"
              type="time"
              defaultValue={item.data?.From}
              className={classes.textField}
              // onChange={handleFrom}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 900,
              }}
            />
            <TextField
              disabled
              id="to"
              label="To"
              type="time"
              defaultValue={item.data?.To}
              // onChange={handleTo}
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
      </CardContent>
    </Card>
  );
}
