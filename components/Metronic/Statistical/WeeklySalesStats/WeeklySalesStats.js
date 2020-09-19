import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import UtilStyles from "./../../../../sass/Statistical.module.css";
const useStyles = makeStyles((theme) => ({
  root: {},
  WeeklySalesStats: {
    width: "100%",
  },
}));
function WeeklySalesStats() {
  const classes = useStyles();
  return (
    <div className={UtilStyles.card_header}>
      <div className={UtilStyles.card_hd_left}>
        <div className={UtilStyles.card_hd_title}>weekly sales stats</div>
        <div className={UtilStyles.card_hd_statistical}>890,344 sales</div>
      </div>
      <div className={UtilStyles.card_hd_right}></div>
    </div>
  );
}

export default WeeklySalesStats;
