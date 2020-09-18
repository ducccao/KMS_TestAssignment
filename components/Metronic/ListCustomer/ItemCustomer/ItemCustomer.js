import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";

// custom Styles
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  ItemCustomer: {
    minHeight: 300,
  },
  spacing: {
    padding: 20,
  },
  d_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ItemCustomer() {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={4}>
      <Paper className={classnames(classes.paper, classes.ItemCustomer)}>
        ItemCustomer cpn
      </Paper>
    </Grid>
  );
}

export default ItemCustomer;
