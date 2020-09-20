import React from "react";
import cn from "classnames";
import UtilStyles from "./../../../../../sass/Statistical.module.css";
function ItemStatistical({ total, name, img, bg, fill }) {
  return (
    <div className={cn(UtilStyles.card_ft_item)}>
      <div
        style={{ backgroundColor: bg }}
        className={cn(UtilStyles.card_ft_item_left)}
      >
        <img color={fill} src={img} />
      </div>
      <div className={cn(UtilStyles.card_ft_item_right)}>
        <div className={cn(UtilStyles.card_ft_item_r_top)}>{total}</div>
        <div className={cn(UtilStyles.card_ft_item_r_bottom)}>{name}</div>
      </div>
    </div>
  );
}

export default ItemStatistical;
