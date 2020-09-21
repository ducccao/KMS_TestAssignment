import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UtilStyles from "./../../../../sass/Statistical.module.css";

// custom css
const useStyles = makeStyles((theme) => ({
  root: {},
  WeeklySalesStats: {
    width: "100%",
  },
}));

// WeeklySalesStats component
function WeeklySalesStats({ total_sales }) {
  const classes = useStyles();
  return (
    <div className={UtilStyles.card_header}>
      <div className={UtilStyles.card_hd_left}>
        <div className={UtilStyles.card_hd_title}>weekly sales stats</div>
        <div className={UtilStyles.card_hd_statistical}>{total_sales}</div>
      </div>
      <div className={UtilStyles.card_hd_right}>
        <div className={UtilStyles.three_dot_wrapper}>
          <img src="http://localhost:3000/image/threedot.svg" />
        </div>
      </div>
    </div>
  );
}

export default WeeklySalesStats;
