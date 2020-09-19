import React from "react";
import ItemStatistical from "./ItemStatistical/ItemStatistical";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import cn from "classnames";

function ListStatistical() {
  return (
    <div className={cn(UtilStyles.card_footer)}>
      <ItemStatistical></ItemStatistical>
      <ItemStatistical></ItemStatistical>
      <ItemStatistical></ItemStatistical>
      <ItemStatistical></ItemStatistical>
    </div>
  );
}

export default ListStatistical;
