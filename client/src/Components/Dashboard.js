import React, { useEffect, useState } from "react";
import ScheduleCard from "./ScheduleCard";
import "../Stylesheets/Dashboard.css";
import axios from "../axios";
import { useStateProviderValue } from "../StateProvider";
export default function Dashboard() {
  const [timing, setTiming] = useState();
  const [{ dbData }, dispatch] = useStateProviderValue();

  useEffect(() => {
    axios.get("/getschedule").then((response) => {
      console.log(response.data);
      setTiming(response.data);
    });
  }, []);
  return (
    <div className="dashboard">
      <div className="title">
        <h2>Dashboard</h2>
      </div>
      <div className="cards">
        {timing?.map((item) => (
          // console.log(item.data)
          <ScheduleCard item={item} />
        ))}
      </div>
    </div>
  );
}
