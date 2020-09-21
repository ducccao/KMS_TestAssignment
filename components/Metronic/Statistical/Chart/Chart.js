import React from "react";
import cn from "classnames";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Chart() {
  const classes = useStyles();
  return (
    <div className={cn(UtilStyles.card_main)}>
      <div className={UtilStyles.chart}>
        <div className={UtilStyles.box}>
          <div className={UtilStyles.percent}>
            <svg>
              <g id={UtilStyles.pc_60}>
                <circle cx="80" cy="80" r="80"></circle>
                <circle cx="80" cy="80" r="80"></circle>

                <g id={UtilStyles.pc_50}>
                  <circle cx="80" cy="80" r="65"></circle>
                  <circle cx="80" cy="80" r="65"></circle>

                  <g id={UtilStyles.pc_75}>
                    <circle cx="80" cy="80" r="50"></circle>
                    <circle cx="80" cy="80" r="50"></circle>

                    <g id={UtilStyles.pc_80}>
                      <circle cx="80" cy="80" r="35"></circle>
                      <circle cx="80" cy="80" r="35"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <div className="number">
              <h2>
                60<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
