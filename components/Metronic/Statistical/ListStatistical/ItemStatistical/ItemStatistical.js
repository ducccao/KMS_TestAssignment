import React from "react";
import cn from "classnames";
import UtilStyles from "./../../../../../sass/Statistical.module.css";
function ItemStatistical() {
  return (
    <div className={cn(UtilStyles.card_ft_item)}>
      <div className={cn(UtilStyles.card_ft_item_left)}></div>
      <div className={cn(UtilStyles.card_ft_item_right)}>
        <div className={cn(UtilStyles.card_ft_item_r_top)}></div>
        <div className={cn(UtilStyles.card_ft_item_r_bottom)}></div>
      </div>
    </div>
  );
}

export default ItemStatistical;
