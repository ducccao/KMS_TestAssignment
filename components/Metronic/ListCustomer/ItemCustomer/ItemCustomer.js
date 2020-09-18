import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";
import UtilStyles from "./../../../../less/ItemCustomer.module.css";
// custom Styles
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  ItemCustomer: {
    height: 300,
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
        <div className={`${UtilStyles.card}`}>
          {/* card header */}
          {/* card header */}
          {/* card header */}
          <div className={`${UtilStyles.card_header}`}>
            <div className={`${UtilStyles.card_hd_left}`}></div>
            <div className={`${UtilStyles.card_hd_right}`}></div>
          </div>
          {/* card main */}
          {/* card main */}
          {/* card main */}
          <div className={`${UtilStyles.card_main}`}>
            <div className={`${UtilStyles.card_m_title}`}></div>
            <div className={`${UtilStyles.card_m_content}`}></div>
          </div>
          {/* card footer */}
          {/* card footer */}
          {/* card footer */}
          <div className={`${UtilStyles.card_footer}`}>
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

export default ItemCustomer;
