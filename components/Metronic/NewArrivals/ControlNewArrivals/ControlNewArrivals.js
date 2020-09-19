import React from "react";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";

function ControlNewArrivals() {
  return (
    <div className={UtilStyles.card_header}>
      <div className={UtilStyles.card_hd_left}>
        <div className={UtilStyles.card_hd_l_top}>New Arrivals</div>
        <div className={UtilStyles.card_hd_l_bottom}>
          More than 400+ new members
        </div>
      </div>
      <div className={UtilStyles.card_hd_right}>
        <div className={`${UtilStyles.btn} ` + UtilStyles.month}>month</div>
        <div className={`${UtilStyles.btn} ` + UtilStyles.week}>week</div>
        <div className={`${UtilStyles.btn} ` + UtilStyles.day}>day</div>
      </div>
    </div>
  );
}

export default ControlNewArrivals;
