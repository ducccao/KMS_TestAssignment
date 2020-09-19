import React from "react";
import Statistical from "./Statistical/Statistical";
import NewArrivals from "./NewArrivals/NewArrivals";
import ListMonthlySubscription from "./ListMonthlySubscription/ListMonthlySubscription";
import ListCustomer from "./ListCustomer/ListCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cn from "classnames";

let log = console.log;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  nav: {
    backgroundColor: theme.color.nav,
    height: 80,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    padding: theme.wrap_spacing.pd,
  },

  main: {
    minHeight: "100vh",
    padding: theme.wrap_spacing.pd,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "lightskyblue",
  },
  mb_20: {
    marginBottom: 20,
  },
  mt_20: {
    marginTop: 20,
  },
  do_not_required: {
    height: 500,
    backgroundColor: theme.color.bg,
    color: "red",
  },

  footer: {
    backgroundColor: "white",
    height: 60,
    padding: theme.wrap_spacing.pd,
  },
}));

function Metronic() {
  const classes = useStyles();

  return (
    <Grid container>
      {/* header */}
      {/* header */}
      {/* header */}
      <Grid item xs={12} className={cn(classes.nav)}>
        header here
      </Grid>

      <Grid item xs={12} className={cn(classes.do_not_required)}>
        do_not_required
      </Grid>

      {/* main */}
      {/* main */}
      {/* main */}
      <Grid item xs={12} className={cn(classes.main)}>
        {/* wrap it to spacing*/}
        {/* wrap it to spacing*/}
        {/* wrap it to spacing*/}
        <Grid container spacing={3}>
          {/* ListMonthlySubscription */}
          {/* ListMonthlySubscription */}
          {/* ListMonthlySubscription */}
          <ListMonthlySubscription></ListMonthlySubscription>

          {/* ListCustomer */}
          {/* ListCustomer */}
          {/* ListCustomer */}
          <ListCustomer></ListCustomer>

          {/* Statistical */}
          {/* Statistical */}
          {/* Statistical */}
          <Statistical></Statistical>

          {/* NewArrivals */}
          {/* NewArrivals */}
          {/* NewArrivals */}
          <NewArrivals></NewArrivals>
        </Grid>
      </Grid>
      {/* footer */}
      {/* footer */}
      {/* footer */}
      <Grid item xs={12} className={cn(classes.footer)}>
        <footer>
          {/* <div className={GlobalCSS.foot_left}></div>
          <div className={GlobalCSS.foot_right}></div> */}
        </footer>
      </Grid>
    </Grid>
  );
}

export default Metronic;
