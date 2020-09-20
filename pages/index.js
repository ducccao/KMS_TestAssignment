import Metronic from "./../components/Metronic/Metronic";
let log = console.log;

export default function Home({ listCustomerDatas, saasDatas }) {
  // got it !
  // log(datas);
  return (
    <div>
      <Metronic
        listCustomerDatas={listCustomerDatas}
        saasDatas={saasDatas}
      ></Metronic>
    </div>
  );
}

//
export async function getStaticProps() {
  // monthly subscription api
  const saas_api = await fetch(
    "http://localhost:3000/api/monthly-subscription"
  );
  const saasDatas = await saas_api.json();

  // customer api
  const customer_api = await fetch(`http://localhost:3000/api/customer`);
  const listCustomerDatas = await customer_api.json();

  return {
    props: {
      listCustomerDatas,
      saasDatas,
    },
  };
}
