import React from "react";
import ItemCustomer from "./ItemCustomer/ItemCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ListCustomer: {
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

function ListCustomer() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      ListCustomer cpn
      <Grid container spacing={3}>
        <ItemCustomer></ItemCustomer>
        <ItemCustomer></ItemCustomer>
        <ItemCustomer></ItemCustomer>
      </Grid>
    </Grid>
  );
}

export default ListCustomer;
