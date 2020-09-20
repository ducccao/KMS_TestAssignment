import React, { useState } from "react";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";
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
// how to set background of each time elements when it's all have been focus ?
// -> Depend on it's type ['month','week','day'] and useState to set it!
// default time = 'day'
// great!
function ControlNewArrivals({ time, setTime, setAppear, green, setGreen }) {
  const [default_time, setDefaultTime] = useState("Day");
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
            // clear default time
            setDefaultTime("");

            setTime("Month");
            setAppear(true);
            // after that few sec clear appear
            setTimeout(() => {
              setAppear(false);
            }, 500);

            setGreen(true);
          }}
          className={cn(UtilStyles.btn, UtilStyles.month, {
            [UtilStyles.green]:
              green === true && time === "Month" && default_time === "",
          })}
        >
          {/* nice su!! great!! */}
          month
        </div>
        <div
          onClick={() => {
            // clear default time
            setDefaultTime("");

            setTime("Week");
            setAppear(true);
            // after that clear appear
            setTimeout(() => {
              setAppear(false);
            }, 500);
            setGreen(true);
          }}
          className={cn(UtilStyles.btn, UtilStyles.week, {
            [UtilStyles.green]:
              green === true && time === "Week" && default_time === "",
          })}
        >
          week
        </div>
        <div
          onClick={() => {
            setTime("Day");
            setAppear(true);
            // after that clear it
            setTimeout(() => {
              setAppear(false);
            }, 500);
            setGreen(true);
          }}
          className={cn(
            UtilStyles.btn,
            UtilStyles.day,
            {
              [UtilStyles.green]: green === true && time === "Day",
            },
            {
              [UtilStyles.green]: default_time === "Day",
            }
          )}
        >
          day
        </div>
      </div>
    </div>
  );
}

export default ControlNewArrivals;
