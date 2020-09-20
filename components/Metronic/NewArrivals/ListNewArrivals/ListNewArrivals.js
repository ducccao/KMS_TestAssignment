import React from "react";
import ItemNewArrivals from "./ItemNewArrivals/ItemNewArrivals";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";
let log = console.log;
function ListNewArrivals({ arrivalsDatas, time }) {
  // debug
  // log(time);
  // log(arrivalsDatas);
  let dataRender = null;

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
    <div className={UtilStyles.card_main}>
      {/* if no data then loading else print it */}
      {ItemNewArrivalsDataByType === null ||
      ItemNewArrivalsDataByType === undefined
        ? "Loading"
        : ItemNewArrivalsComponents}
    </div>
  );
}

export default ListNewArrivals;
