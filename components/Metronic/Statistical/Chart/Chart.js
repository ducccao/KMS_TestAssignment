import React from "react";
import cn from "classnames";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  chart_container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    textAlign: "center",
    transform: "translate(-50%,-50%)",
    backgroundColor: "red",
  },
  ui_widget: {
    position: "relative",
    display: "inline-block",
    width: "10rem",
    height: "10rem",
    margin: "1.5rem",
    border: "1.2rem solid coral",
    textAlign: "center",
    borderRadius: "50%",
    boxShadow: "0 0 7px rgba(0,0,0,0.3)",
    borderLeftColor: "#fff",
    borderTopColor: "#fff",
    borderBottomColor: "#fff",
  },
  ui_value: {
     
  },
  ui_label: {
    borderLeftColor: "blue",
  },
}));

function Chart() {
  const classes = useStyles();
  return (
    <div className={cn(UtilStyles.card_main)}>
      <div className={UtilStyles.chart}>
        <div className={classes.chart_container}>
          <div className={classes.ui_widget}>
            <div className={classes.ui_value}>20%</div>
            <div className={classes.ui_label}>javascript</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
