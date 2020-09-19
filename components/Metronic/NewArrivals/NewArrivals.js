import React from "react";
import ListNewArrivals from "./ListNewArrivals/ListNewArrivals";
import ControlNewArrivals from "./ControlNewArrivals/ControlNewArrivals";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
import UtilStyles from "./../../../sass/NewArrivals.module.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  NewArrivals: {},
}));

function NewArrivals() {
  const classes = useStyles();
  return (
    <Grid item xs={8} sm={8} md={8} lg={8}>
      <Paper className={classnames(classes.paper)}>
        <div className={UtilStyles.card}>
          <ControlNewArrivals></ControlNewArrivals>
          <ListNewArrivals></ListNewArrivals>
        </div>
      </Paper>
    </Grid>
  );
}

export default NewArrivals;
