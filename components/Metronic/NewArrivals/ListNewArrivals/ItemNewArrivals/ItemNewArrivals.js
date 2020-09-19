import React from "react";
import UtilStyles from "./../../../../../sass/NewArrivals.module.css";
function ItemNewArrivals() {
  return (
    <div className={UtilStyles.item}>
      {/* item left */}
      {/* item left */}
      {/* item left */}
      <div className={UtilStyles.item_left}>
        <div className={UtilStyles.item_l_left}>img</div>
        <div className={UtilStyles.item_l_right}>
          <div className={UtilStyles.item_title}>title</div>
          <div className={UtilStyles.item_status}>status</div>
        </div>
      </div>
      {/* item mid */}
      {/* item mid */}
      {/* item mid */}
      <div className={UtilStyles.item_mid}>content</div>
      {/* item right */}
      {/* item right */}
      {/* item right */}
      <div className={UtilStyles.item_right}>
        <div className={UtilStyles.item_total_user}>total user</div>
        <div className={UtilStyles.item_btn}>arrow </div>
      </div>
    </div>
  );
}

export default ItemNewArrivals;
