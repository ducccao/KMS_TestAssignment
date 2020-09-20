import React from "react";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";
import { useState } from "react";
import cn from "classnames";
let log = console.log;

// cannot use this way - find how to later
function HandleMonthClicked() {
  log("month has been clicked!");
}
function HandleWeekClicked() {
  log("week has been clicked!");
}
function HandleDayClicked() {
  log("day has been clicked!");
}
function isTimeFocus(value) {
  return value;
}

function ControlNewArrivals({ setTime }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={UtilStyles.card_header}>
      <div className={UtilStyles.card_hd_left}>
        <div className={UtilStyles.card_hd_l_top}>New Arrivals</div>
        <div className={UtilStyles.card_hd_l_bottom}>
          More than 400+ new members
        </div>
      </div>
      <div className={UtilStyles.card_hd_right}>
        <div
          onClick={() => {
            setTime("Month");
            setFocus(true);
          }}
          className={cn(
            UtilStyles.btn,
            UtilStyles.month,
            ([UtilStyles.time_on_focus], { focus: true })
          )}
        >
          month
        </div>
        <div
          onClick={() => {
            setTime("Week");
            setFocus(true);
          }}
          className={`${UtilStyles.btn} ${UtilStyles.week}`}
        >
          week
        </div>
        <div
          onClick={() => {
            setTime("Day");
            setFocus(true);
          }}
          className={`${UtilStyles.btn} ` + UtilStyles.day}
        >
          day
        </div>
      </div>
    </div>
  );
}

export default ControlNewArrivals;
