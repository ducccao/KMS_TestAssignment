import React from "react";
import ItemMonthlySubscription from "./ItemMonthlySubscription/ItemMonthlySubscription";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UtilStyles from "./../../../sass/ItemMonthlySubscription.module.css";

let log = console.log;
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

function ListMonthlySubscription({ saasDatas }) {
  const classes = useStyles();
  // got it!
  // log(saasDatas);
  let ItemSaasComponents = saasDatas.map((data, index) => {
    return (
      <ItemMonthlySubscription
        key={index}
        bg={data.bg}
        logo={data.logo}
        team={data.team}
        progress_bg={data.progress_bg}
      ></ItemMonthlySubscription>
    );
  });
  return (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
      <Grid
        container
        spacing={3}
        className={UtilStyles.ListItemMonthlySubscription}
      >
        {ItemSaasComponents}
      </Grid>
    </Grid>
  );
}
export default ListMonthlySubscription;
