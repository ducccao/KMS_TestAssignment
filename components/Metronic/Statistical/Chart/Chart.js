import React from "react";
import cn from "classnames";
import UtilStyles from "./../../../../sass/Statistical.module.css";
function Chart() {
  return (
    <div className={cn(UtilStyles.card_main)}>
      <div className={UtilStyles.chart}></div>
    </div>
  );
}

export default Chart;
