import React from "react";
import Statistical from "./Statistical/Statistical";
import NewArrivals from "./NewArrivals/NewArrivals";
import ListMonthlySubscription from "./ListMonthlySubscription/ListMonthlySubscription";
import ListCustomer from "./ListCustomer/ListCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import cn from "classnames";

let log = console.log;

// custom css
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  nav: {
    backgroundColor: "#0bb783",
    height: 80,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "0vh 8vw",
    zIndex: 1,
  },

  main: {
    minHeight: "100vh",
    padding: "0vh 8vw",
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "var(--color-bg)",
  },
  mb_20: {
    marginBottom: 20,
  },
  mt_20: {
    marginTop: 20,
  },
  do_not_required: {
    height: 500,
    backgroundColor: "var(--color-bg)",
    color: "red",
  },

  footer: {
    backgroundColor: "white",
    height: 80,
    padding: "0vh 8vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    color: "var(--color-title)",
    fontWeight: 500,
    transition: "0.13s",
    "&:hover": {
      color: "var(--color-nav)",
    },
  },
  f_left: {},
  f_right: {
    width: "15%",
  },
  f_link_wrap: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  f_link: {
    cursor: "pointer",
    textTransform: "capitalize",
    fontWeight: 500,
    color: "#7E8299",
    transition: "0.13s",
    "&:hover": {
      color: "var(--color-nav)",
    },
  },
}));

// Metronic component
function Metronic({
  listCustomerDatas,
  saasDatas,
  arrivalsDatas,
  weeklySalesStatsDatas,
}) {
  const classes = useStyles();
  // got it!
  // log(listCustomerDatas);
  return (
    <Grid container>
      {/* header */}
      {/* header */}
      {/* header */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={cn(classes.nav)}
      ></Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={cn(classes.do_not_required)}
      >
        do_not_required
      </Grid>

      {/* main */}
      {/* main */}
      {/* main */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={cn(classes.main)}
      >
        {/* wrap it to spacing*/}
        {/* wrap it to spacing*/}
        {/* wrap it to spacing*/}
        <Grid container spacing={3}>
          {/* ListMonthlySubscription */}
          {/* ListMonthlySubscription */}
          {/* ListMonthlySubscription */}
          <ListMonthlySubscription
            saasDatas={saasDatas}
          ></ListMonthlySubscription>

          {/* ListCustomer */}
          {/* ListCustomer */}
          {/* ListCustomer */}
          <ListCustomer listCustomerDatas={listCustomerDatas}></ListCustomer>

          {/* Statistical */}
          {/* Statistical */}
          {/* Statistical */}
          <Statistical
            weeklySalesStatsDatas={weeklySalesStatsDatas}
          ></Statistical>

          {/* NewArrivals */}
          {/* NewArrivals */}
          {/* NewArrivals */}
          <NewArrivals arrivalsDatas={arrivalsDatas}></NewArrivals>
        </Grid>
      </Grid>
      {/* footer */}
      {/* footer */}
      {/* footer */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <footer className={classes.footer}>
          <div className={classes.f_left}>
            2020©{"    "}
            <a
              className={classes.author}
              href="http://keenthemes.com/metronic"
              target="_blank"
            >
              Keenthemes
            </a>
          </div>
          <div className={classes.f_right}>
            <div className={classes.f_link_wrap}>
              <div className={classes.f_link}>
                <a target="_blank" href="http://keenthemes.com/metronic">
                  {" "}
                  about
                </a>
              </div>
              <div className={classes.f_link}>
                <a target="_blank" href="https://keenthemes.com/metronic/">
                  {" "}
                  team
                </a>
              </div>
              <div className={classes.f_link}>
                <a href="https://keenthemes.com/metronic/" target="_blank">
                  {" "}
                  contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Grid>
    </Grid>
  );
}

export default Metronic;
