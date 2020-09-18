import React from "react";
import WeeklyScalesStats from "./WeeklySalesStats/WeeklySalesStats";
import ListStatistical from "./ListStatistical/ListStatistical";
import Chart from "./Chart/Chart";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  Statistical: {
    minHeight: 300,
    backgroundColor: "cornflowerblue",
  },
}));
// statistical cpn
function Statistical() {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper>
        statistical component
        <Grid container className={classnames(classes.paper)}>
          <Grid item xs={12}>
            <WeeklyScalesStats></WeeklyScalesStats>
          </Grid>
          <Grid item xs={12}>
            <Chart></Chart>
          </Grid>
          <Grid item xs={12}>
            <ListStatistical></ListStatistical>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default Statistical;
