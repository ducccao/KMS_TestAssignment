import React from "react";
import ItemStatistical from "./ItemStatistical/ItemStatistical";
import UtilStyles from "./../../../../sass/Statistical.module.css";
import cn from "classnames";

function ListStatistical({ types }) {
  const ItemStatisTicalComponents = types.map((t) => {
    return (
      <ItemStatistical
        key={t.id}
        total={t.total}
        name={t.name}
        img={t.img}
        bg={t.bg}
        fill={t.fill}
      ></ItemStatistical>
    );
  });
  return (
    <div className={cn(UtilStyles.card_footer)}>
      {ItemStatisTicalComponents}
    </div>
  );
}

export default ListStatistical;
