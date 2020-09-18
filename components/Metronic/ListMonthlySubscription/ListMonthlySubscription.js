import React from "react";
import ItemMonthlySubscription from "./ItemMonthlySubscription/ItemMonthlySubscription";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    padding: 20,
  },
  ListMonthlySubscription: {
    minHeight: 300,
    backgroundColor: "cadetblue",

    flexWrap: "wrap",
  },
  d_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ListMonthlySubscription() {
  const classes = useStyles();
  return (
    <Grid xs={12} item>
      ListMonthlySubscription cpn
      <Grid container spacing={3}>
        <ItemMonthlySubscription></ItemMonthlySubscription>
        <ItemMonthlySubscription></ItemMonthlySubscription>
        <ItemMonthlySubscription></ItemMonthlySubscription>
      </Grid>
    </Grid>
  );
}
export default ListMonthlySubscription;
