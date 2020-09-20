import React from "react";
import WeeklySalesStats from "./WeeklySalesStats/WeeklySalesStats";
import ListStatistical from "./ListStatistical/ListStatistical";
import Chart from "./Chart/Chart";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import cn from "classnames";
import Paper from "@material-ui/core/Paper";
import UtilStyles from "./../../../sass/Statistical.module.css";

let log = console.log;
// custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  Statistical: {
    minHeight: 300,
    backgroundColor: "cornflowerblue",
  },
}));
// statistical cpn
function Statistical({ weeklySalesStatsDatas }) {
  const classes = useStyles();
  const { total_sales, types } = weeklySalesStatsDatas;
  // log(total_sales, types);
  return (
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <Paper>
        <Grid container className={cn(classes.paper, UtilStyles.card)}>
          {/* WeeklyScalesStats */}
          {/* WeeklyScalesStats */}
          {/* WeeklyScalesStats */}
          <WeeklySalesStats total_sales={total_sales}></WeeklySalesStats>

          {/* chart */}
          {/* chart */}
          {/* chart */}
          <Chart></Chart>

          {/*ListStatistical */}
          {/*ListStatistical */}
          {/*ListStatistical */}
          <ListStatistical types={types}></ListStatistical>
        </Grid>
      </Paper>
    </Grid>
  );
}
export default Statistical;
