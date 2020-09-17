import React from "react";
import Statistical from "./Statistical/Statistical";
import NewArrivals from "./NewArrivals/NewArrivals";
import ListMonthlySubscription from "./ListMonthlySubscription/ListMonthlySubscription";
import ListCustomer from "./ListCustomer/ListCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {},
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

const Metronic = (props) => {
  const classes = useStyles();
  return (
    <div>
      {/* header */}
      {/* header */}
      {/* header */}
      <Grid xs={12} className={classnames(classes.header, classes.spacing)}>
        header here
      </Grid>
      {/* main */}
      {/* main */}
      {/* main */}
      <Grid xs={12} className={classnames(classes.main, classes.spacing)}>
        <ListMonthlySubscription></ListMonthlySubscription>
        <ListCustomer></ListCustomer>
        <Statistical></Statistical>
        <NewArrivals></NewArrivals>
      </Grid>
      {/* footer */}
      {/* footer */}
      {/* footer */}
      <Grid xs={12} className={classnames(classes.footer, classes.spacing)}>
        footer here
      </Grid>
    </div>
  );
};

export default Metronic;
