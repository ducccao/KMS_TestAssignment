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

  header: {
    backgroundColor: theme.status.danger,
  },

  footer: {
    backgroundColor: theme.status.danger,
  },
  main: {
    minHeight: "100vh",
    padding: "5vh 8vw",
    backgroundColor: "lightskyblue",
  },
  mb_10: {
    marginBottom: 10,
  },
}));

function Metronic() {
  const classes = useStyles();

  return (
    <Grid container>
      {/* header */}
      {/* header */}
      {/* header */}
      <Grid item xs={12} className={cn(classes.header)}>
        header here
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
        footer here
      </Grid>
    </Grid>
  );
}

export default Metronic;
