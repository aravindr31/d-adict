import React, { useState } from "react";
// import Navbar from "./Navbar";
import RestrictedAppList from "../RestrictedAppList";
import "../../Stylesheets/AddSchedule.css";
import { Button, ButtonGroup, ListSubheader } from "@material-ui/core";
import LimitedApps from "../LimitedApp";
import EditModal from "../EditModal";
import { useStateProviderValue } from "../../StateProvider";
import axios from "../../axios";
export default function EditSchedule() {
  const [worktime, setWorktime] = useState(true);
  const [{ from, to, blockedApps, selectedDays, dbData }] =
    useStateProviderValue();

  const handleClick = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value == "WT") setWorktime(true);
    else setWorktime(false);
  };

  const handleSubmit = () => {
    console.log("to backend", from, to, blockedApps, selectedDays);
    const newSchedule = {
      id: dbData._id,
      From: from,
      To: to,
      BlockedApps: blockedApps,
      selectedDays: selectedDays,
    };
    axios.post("/updateschedule", newSchedule).then((response) => {
      if (response) console.log("response received");
    });
  };
  return (
    <div className="addschedule">
      <div className="addschedule-wrapper">
        <div className="addschedule-heading">
          <h1>Edit Schedule</h1>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Save Schedule
          </Button>
        </div>
        <div className="addschedule-body">
          <div className="addschedule-restriction">
            <div className="restrictions">
              <div className="restriction-buttons">
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={handleClick} value="WT">
                    Work Time
                  </Button>
                  <Button onClick={handleClick} value="NWT">
                    Non Work Time
                  </Button>
                </ButtonGroup>
              </div>
              <br />
              <div className="restriction-body">
                <EditModal />
                {worktime ? <RestrictedAppList /> : <LimitedApps />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
