import React, { useState } from "react";
import cn from "classnames";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import { makeStyles } from "@material-ui/core";

let log = console.log;

const useStyles = makeStyles((theme) => ({
  root: {},
  pc60_hover_color: {
    stroke: " rgba(137, 80, 252, 0.55)!important;",
  },
  pc60_click_color: {
    stroke: "#845bd6!important",
  },
  pc50_hover_color: {
    stroke: "rgba(246, 78, 96, 0.55)!important;",
  },
  pc50_click_color: {
    stroke: "#d15966!important",
  },
  pc75_hover_color: {
    stroke: " rgba(27, 197, 189, 0.55)!important;",
  },
  pc75_click_color: {
    stroke: "#31afa9!important",
  },
  pc80_hover_color: {
    stroke: "rgba(11, 183, 131, 0.55)!important;",
  },
  pc80_click_color: {
    stroke: "#25a57f!important",
  },
}));

function handlePC80MouseOver(event) {
  log("PC80 is overed!");
}
function handlePC80MouseOut(event) {
  log("PC80 is out!");
}

// Chart component
// Chart component
// Chart component
function Chart() {
  const classes = useStyles();
  // state - pc - percent - this state is used to handle the number represent for percent in the middle
  const [pc, setPC] = useState(60);

  // pc hover - specify those pc when it was hovered  - used to handle color
  const [pc_hover, setPCHover] = useState("");

  // pc click - used to handle color when each of them was clicked !
  const [pc_click, setPCClick] = useState("");

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
                  className={cn({
                    [classes.pc60_hover_color]: pc_hover === "pc60",
                    [classes.pc60_click_color]: pc_click === "pc60",
                  })}
                  onClick={() => {
                    setPCClick("pc60");
                  }}
                  onMouseOver={() => {
                    setPC(60);
                    setPCHover("pc60");
                    // log(pc_hover);
                  }}
                  onMouseLeave={() => {
                    // pc default is 60
                    setPC(60);
                    // set state pc is none
                    setPCHover("");
                  }}
                ></circle>

                <g className={UtilStyles.pc_50}>
                  <circle cx="80" cy="80" r="65"></circle>
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    className={cn({
                      [classes.pc50_hover_color]: pc_hover === "pc50",
                      [classes.pc50_click_color]: pc_click === "pc50",
                    })}
                    onClick={() => {
                      setPCClick("pc50");
                    }}
                    onMouseOver={() => {
                      setPC(50);
                      setPCHover("pc50");
                    }}
                    onMouseLeave={() => {
                      setPC(60);
                      setPCHover("");
                    }}
                  ></circle>

                  <g className={UtilStyles.pc_75}>
                    <circle cx="80" cy="80" r="50"></circle>
                    <circle
                      cx="80"
                      cy="80"
                      r="50"
                      className={cn({
                        [classes.pc75_hover_color]: pc_hover === "pc75",
                        [classes.pc75_click_color]: pc_click === "pc75",
                      })}
                      onClick={() => {
                        setPCClick("pc75");
                      }}
                      onMouseOver={() => {
                        setPC(75);
                        setPCHover("pc75");
                      }}
                      onMouseLeave={() => {
                        setPC(60);
                        setPCHover("");
                      }}
                    ></circle>

                    <g className={UtilStyles.pc_80}>
                      <circle cx="80" cy="80" r="35"></circle>
                      <circle
                        className={cn({
                          [classes.pc80_hover_color]: pc_hover === "pc80",
                          [classes.pc80_click_color]: pc_click === "pc80",
                        })}
                        onClick={() => {
                          setPCClick("pc80");
                        }}
                        onMouseOver={() => {
                          setPC(80);
                          setPCHover("pc80");
                          // got it !!!
                        }}
                        onMouseLeave={() => {
                          setPC(60);
                          setPCHover("");
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
