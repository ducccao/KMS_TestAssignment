import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cn from "classnames";
import Paper from "@material-ui/core/Paper";
import UtilStyles from "./../../../../sass/ItemMonthlySubscription.module.css";

let log = console.log;
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),

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
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

function ItemMonthlySubscription() {
  const classes = useStyles();
  // log(UtilStyles);

  return (
    <Grid xs={4} item>
      <Paper
        className={cn(
          classes.paper,
          classes.ItemMonthlySubscription,
          classes.d_center
        )}
      >
        <div className={`${UtilStyles.card}`}>
          {/* card header */}
          {/* card header */}
          {/* card header */}
          <div className={`${UtilStyles.card_header}`}>
            <div className={`${UtilStyles.card_hd_left}`}></div>
            <div className={`${UtilStyles.card_hd_right}`}>
              <div className={`${UtilStyles.card_hd_title}`}>
                Monthly Subscription Based SaaS
              </div>
              <div className={`${UtilStyles.card_hd_date}`}>
                Due: 27 Apr 2020
              </div>
            </div>
          </div>
          {/* card main */}
          {/* card main */}
          {/* card main */}
          <div className={`${UtilStyles.card_main}`}>
            <div className={`${UtilStyles.card_m_title}`}>progess</div>
            <div className={`${UtilStyles.card_m_progress}`}></div>
          </div>
          {/* card footer */}
          {/* card footer */}
          {/* card footer */}
          <div className={`${UtilStyles.card_footer}`}>
            <div className={`${UtilStyles.card_ft_team}`}></div>
            <div className={`${UtilStyles.card_ft_user}`}>
              <div className={`${UtilStyles.virtual_user}`}></div>
              <div className={`${UtilStyles.virtual_user}`}></div>
              <div className={`${UtilStyles.virtual_user}`}></div>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default ItemMonthlySubscription;
