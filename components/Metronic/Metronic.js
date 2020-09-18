import React from "react";
import Statistical from "./Statistical/Statistical";
import NewArrivals from "./NewArrivals/NewArrivals";
import ListMonthlySubscription from "./ListMonthlySubscription/ListMonthlySubscription";
import ListCustomer from "./ListCustomer/ListCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";

let log = console.log;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: theme.status.danger,
  },
  spacing: {
    padding: 20,
  },
  footer: {
    backgroundColor: theme.status.danger,
  },
  main: {
    minHeight: "100vh",
    padding: "5vh 8vw",

    backgroundColor: "lightskyblue",
  },
}));

function Metronic() {
  const classes = useStyles();

  return (
    <Grid container>
      {/* header */}
      {/* header */}
      {/* header */}
      <Grid
        item
        xs={12}
        className={classnames(classes.header, classes.spacing)}
      >
        header here
      </Grid>
      {/* main */}
      {/* main */}
      {/* main */}
      <Grid item xs={12} className={classnames(classes.main, classes.spacing)}>
        {/* ListMonthlySubscription */}
        {/* ListMonthlySubscription */}
        {/* ListMonthlySubscription */}
        <ListMonthlySubscription></ListMonthlySubscription>

        {/* ListCustomer */}
        {/* ListCustomer */}
        {/* ListCustomer */}
        <ListCustomer></ListCustomer>

        {/* wrap it */}
        <Grid spacing={3} container>
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
      <Grid
        item
        xs={12}
        className={classnames(classes.footer, classes.spacing)}
      >
        footer here
      </Grid>
    </Grid>
  );
}

export default Metronic;
