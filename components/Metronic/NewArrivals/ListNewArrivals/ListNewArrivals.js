import React from "react";
import ItemNewArrivals from "./ItemNewArrivals/ItemNewArrivals";
import UtilStyles from "./../../../../sass/NewArrivals.module.css";

function ListNewArrivals() {
  return (
    <div className={UtilStyles.card_main}>
      <ItemNewArrivals></ItemNewArrivals>
      <ItemNewArrivals></ItemNewArrivals>
      <ItemNewArrivals></ItemNewArrivals>
      <ItemNewArrivals></ItemNewArrivals>
      <ItemNewArrivals></ItemNewArrivals>
    </div>
  );
}

export default ListNewArrivals;
