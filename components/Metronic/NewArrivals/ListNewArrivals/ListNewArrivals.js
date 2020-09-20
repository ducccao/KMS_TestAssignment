import React from "react";
import ItemNewArrivals from "./ItemNewArrivals/ItemNewArrivals";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";
import cn from "classnames";

let log = console.log;
function ListNewArrivals({ arrivalsDatas, time, appear, setAppear }) {
  // handle animation - how ?
  // log(appear);
  // got it!!

  // debug
  // log(time);
  // log(arrivalsDatas);

  // classify it
  let ItemNewArrivalsDataByType = arrivalsDatas.filter((data) => {
    return data.type === time;
  });

  // then map
  // debug
  //log(ItemNewArrivalsDataByType);

  let ItemNewArrivalsComponents = ItemNewArrivalsDataByType[0].datas.map(
    (data, index) => {
      return (
        <ItemNewArrivals
          key={index}
          id={data.id}
          logo={data.logo}
          title={data.title}
          sub_title={data.sub_title}
          content={data.content}
          total_users={data.total_users}
        ></ItemNewArrivals>
      );
    }
  );

  //  log(ItemNewArrivalsTrueData);
  return (
    <div
      className={cn(UtilStyles.card_main, {
        [UtilStyles.appear_1]: appear === true,
      })}
    >
      {/* if no data then loading else print it */}
      {ItemNewArrivalsDataByType === null ||
      ItemNewArrivalsDataByType === undefined
        ? "Loading"
        : ItemNewArrivalsComponents}

      {/* set appear false after the animation has just concluded */}
      <div className={UtilStyles.d_none}></div>
    </div>
  );
}

export default ListNewArrivals;
