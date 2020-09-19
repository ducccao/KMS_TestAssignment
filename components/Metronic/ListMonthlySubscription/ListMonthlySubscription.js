import React from "react";
import ItemMonthlySubscription from "./ItemMonthlySubscription/ItemMonthlySubscription";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UtilStyles from "./../../../sass/ItemMonthlySubscription.module.css";
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
      <Grid
        container
        spacing={3}
        className={UtilStyles.ListItemMonthlySubscription}
      >
        <ItemMonthlySubscription></ItemMonthlySubscription>
        <ItemMonthlySubscription></ItemMonthlySubscription>
        <ItemMonthlySubscription></ItemMonthlySubscription>
      </Grid>
    </Grid>
  );
}
export default ListMonthlySubscription;
