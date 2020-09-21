import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cn from "classnames";
import Paper from "@material-ui/core/Paper";
import UtilStyles from "./../../../../sass/ItemMonthlySubscription.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
let log = console.log;

// custom css
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(4),

    color: "white",
  },
  ItemMonthlySubscription: {
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
  },
  d_center: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },
}));

// ItemMonthlySubscription component
// ItemMonthlySubscription component
// ItemMonthlySubscription component
function ItemMonthlySubscription({ logo, bg, progress_bg, team }) {
  const classes = useStyles();
  // log(UtilStyles);
  let TeamComponents = team.map((t, index) => {
    return (
      <a
        href="#"
        key={index}
        style={{ backgroundColor: `${bg}` }}
        className={`${UtilStyles.virtual_user}`}
      >
        <img src={t.img} />
      </a>
    );
  });

  // custom LinearProgress
  // custom LinearProgress
  // custom LinearProgress
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 7,
      borderRadius: 5,
    },
    colorPrimary: {},
    bar: {
      borderRadius: 5,
      backgroundColor: progress_bg,
    },
  }))(LinearProgress);

  return (
    <Grid xs={12} sm={12} md={4} lg={4} xl={4} item>
      <Paper className={cn(classes.paper, classes.ItemMonthlySubscription)}>
        <div className={`${UtilStyles.card}`}>
          {/* card header */}
          {/* card header */}
          {/* card header */}
          <div className={`${UtilStyles.card_header}`}>
            {/* auto color */}
            <div
              className={`${UtilStyles.card_hd_left}`}
              style={{ backgroundColor: `${bg}` }}
            >
              <img src={logo} />
            </div>
            <div className={`${UtilStyles.card_hd_right}`}>
              <a href="#" className={`${UtilStyles.card_hd_title}`}>
                Monthly Subscription Based SaaS
              </a>
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
            <div className={`${UtilStyles.card_m_progress}`}>
              <BorderLinearProgress
                variant="determinate"
                value={70}
                style={{ backgroundColor: "#EBEDF3" }}
              />
            </div>
          </div>
          {/* card footer */}
          {/* card footer */}
          {/* card footer */}
          <div className={`${UtilStyles.card_footer}`}>
            <div className={`${UtilStyles.card_ft_team}`}>Team</div>
            {/* key bugs  */}
            <div className={`${UtilStyles.card_ft_user}`}>{TeamComponents}</div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default ItemMonthlySubscription;
