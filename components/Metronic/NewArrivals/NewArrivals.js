import React from "react";
import ListNewArrivals from "./ListNewArrivals/ListNewArrivals";
import ControlNewArrivals from "./ControlNewArrivals/ControlNewArrivals";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
import UtilStyles from "./../../../sass/NewArrivals.module.css";
import { useState } from "react";

let log = console.log;
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(4),

    color: theme.palette.text.secondary,
  },
  NewArrivals: {},
}));

function NewArrivals({ arrivalsDatas }) {
  const classes = useStyles();
  const [time, setTime] = useState("Month");
  // got it!!
  //log(time);
  return (
    <Grid item xs={8} sm={8} md={8} lg={8}>
      <Paper className={classnames(classes.paper)}>
        <div className={UtilStyles.card}>
          {/* control time data right there */}
          <ControlNewArrivals setTime={setTime}></ControlNewArrivals>
          <ListNewArrivals
            arrivalsDatas={arrivalsDatas}
            time={time}
          ></ListNewArrivals>
        </div>
      </Paper>
    </Grid>
  );
}

export default NewArrivals;
