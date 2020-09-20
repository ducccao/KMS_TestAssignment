import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";
import UtilStyles from "./../../../../less/ItemCustomer.module.css";
import Button from "@material-ui/core/Button";

let log = console.log;
// custom Styles
const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(4),

    color: theme.palette.text.secondary,
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

function ItemCustomer({ time, logo, title, content, user }) {
  const classes = useStyles();
  // log(user);

  let userAvatars = user.map((us) => {
    return (
      <a href="#" key={us.id} className={`${UtilStyles.virtual_user}`}>
        <img src={us.img} />
      </a>
    );
  });

  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
      <Paper className={classnames(classes.paper)}>
        <div className={`${UtilStyles.card}`}>
          {/* card header */}
          {/* card header */}
          {/* card header */}
          <div className={`${UtilStyles.card_header}`}>
            <div className={`${UtilStyles.card_hd_left}`}>{time}</div>
            <div className={`${UtilStyles.card_hd_right}`}>
              <div className={`${UtilStyles.logo}`}>
                <img src={logo} />
              </div>
            </div>
          </div>
          {/* card main */}
          {/* card main */}
          {/* card main */}
          <div className={`${UtilStyles.card_main}`}>
            <a href="#" className={`${UtilStyles.card_m_title}`}>
              {title}
            </a>
            <div className={`${UtilStyles.card_m_content}`}>{content}</div>
          </div>
          {/* card footer */}
          {/* card footer */}
          {/* card footer */}
          <div className={`${UtilStyles.card_footer}`}>
            <div className={`${UtilStyles.card_ft_user}`}>{userAvatars}</div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default ItemCustomer;
