import React from "react";
import UtilStyles from "./../../../../../sass/NewArrivals.module.css";
let log = console.log;

function ItemNewArrivals({ id, logo, title, sub_title, content, total_users }) {
  return (
    <div className={UtilStyles.item}>
      {/* item left */}
      {/* item left */}
      {/* item left */}
      <div className={UtilStyles.item_left}>
        <div className={UtilStyles.item_logo}>
          <div className={UtilStyles.item_l_left}>
            <img src={logo} />
          </div>
        </div>
        <div className={UtilStyles.item_l_right}>
          <a href="#" className={UtilStyles.item_title}>
            {title}
          </a>
          <div className={UtilStyles.item_status}>{sub_title}</div>
        </div>
      </div>
      {/* item mid */}
      {/* item mid */}
      {/* item mid */}
      <div className={UtilStyles.item_mid}>{content}</div>
      {/* item right */}
      {/* item right */}
      {/* item right */}
      <div className={UtilStyles.item_right}>
        <div className={UtilStyles.item_total_user}>{total_users}</div>
        <div className={UtilStyles.btn_wrap}>
          <a href="#" className={UtilStyles.item_btn}>
            <img src="http://localhost:3000/image/arrow.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemNewArrivals;
