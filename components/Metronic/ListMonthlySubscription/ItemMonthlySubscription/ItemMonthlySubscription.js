import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  ItemMonthlySubscription: {
    backgroundColor: "coral",
    border: "1px solid black",
    height: "300px",
  },
  d_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ItemMonthlySubscription() {
  const classes = useStyles();
  return (
    <Grid xs={4} item>
      <Paper
        className={classnames(
          classes.paper,
          classes.ItemMonthlySubscription,
          classes.d_center
        )}
      >
        ItemMonthlySubscription cpn
      </Paper>
    </Grid>
  );
}

export default ItemMonthlySubscription;
