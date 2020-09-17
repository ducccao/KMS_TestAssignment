import React from "react";
import WeeklyScalesStats from "./WeeklySalesStats/WeeklySalesStats";
import ListStatistical from "./ListStatistical/ListStatistical";
import Chart from "./Chart/Chart";
const Statistical = () => {
  return (
    <div>
      statistical component
      <WeeklyScalesStats></WeeklyScalesStats>
      <Chart></Chart>
      <ListStatistical></ListStatistical>
    </div>
  );
};

export default Statistical;
