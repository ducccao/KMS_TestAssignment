import Metronic from "../components/Metronic/Metronic";
import { GetStaticProps } from "next";
let log = console.log;

export default function Home({
  listCustomerDatas,
  saasDatas,
  arrivalsDatas,
  weeklySalesStatsDatas,
}) {
  return (
    <div>
      <Metronic
        listCustomerDatas={listCustomerDatas}
        saasDatas={saasDatas}
        arrivalsDatas={arrivalsDatas}
        weeklySalesStatsDatas={weeklySalesStatsDatas}
      ></Metronic>
    </div>
  );
}

//

export const getStaticProps: GetStaticProps = async (context) => {
  // monthly subscription api
  const saas_api = await fetch(
    "http://localhost:3000/api/monthly-subscription"
  );
  const saasDatas = await saas_api.json();

  // customer api
  const customer_api = await fetch(`http://localhost:3000/api/customer`);
  const listCustomerDatas = await customer_api.json();

  // arrivals api
  const arrivals_api = await fetch("http://localhost:3000/api/new-arrivals");
  const arrivalsDatas = await arrivals_api.json();

  // Weekly Sales Stats api
  const weekly_sales_stats_api = await fetch(
    "http://localhost:3000/api/weekly-sales-stats"
  );
  const weeklySalesStatsDatas = await weekly_sales_stats_api.json();

  return {
    props: {
      listCustomerDatas,
      saasDatas,
      arrivalsDatas,
      weeklySalesStatsDatas,
    },
  };
};
