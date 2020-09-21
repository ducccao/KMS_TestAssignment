import React, { useState } from "react";
import cn from "classnames";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import { makeStyles } from "@material-ui/core";

let log = console.log;

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function handlePC80MouseOver(event) {
  log("PC80 is overed!");
}
function handlePC80MouseOut(event) {
  log("PC80 is out!");
}

// Chart component
function Chart() {
  const classes = useStyles();
  // state - pc - percent
  const [pc, setPC] = useState(60);
  return (
    <div className={cn(UtilStyles.card_main)}>
      <div className={UtilStyles.chart}>
        <div className={UtilStyles.box}>
          <div className={UtilStyles.percent}>
            <svg>
              <g className={UtilStyles.pc_60}>
                <circle cx="80" cy="80" r="80"></circle>
                <circle
                  cx="80"
                  cy="80"
                  r="80"
                  onMouseOver={() => {
                    setPC(60);
                  }}
                  onMouseLeave={() => {
                    setPC(60);
                  }}
                ></circle>

                <g className={UtilStyles.pc_50}>
                  <circle cx="80" cy="80" r="65"></circle>
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    onMouseOver={() => {
                      setPC(50);
                    }}
                    onMouseLeave={() => {
                      setPC(60);
                    }}
                  ></circle>

                  <g className={UtilStyles.pc_75}>
                    <circle cx="80" cy="80" r="50"></circle>
                    <circle
                      cx="80"
                      cy="80"
                      r="50"
                      onMouseOver={() => {
                        setPC(75);
                      }}
                      onMouseLeave={() => {
                        setPC(60);
                      }}
                    ></circle>

                    <g className={UtilStyles.pc_80}>
                      <circle cx="80" cy="80" r="35"></circle>
                      <circle
                        onMouseOver={() => {
                          handlePC80MouseOver();
                          setPC(80);
                          // got it !!!
                        }}
                        onMouseLeave={() => {
                          setPC(60);
                        }}
                        cx="80"
                        cy="80"
                        r="35"
                      ></circle>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <div className="number">
              <h2>
                {pc}
                <span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
