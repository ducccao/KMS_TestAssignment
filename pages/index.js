import Metronic from "./../components/Metronic/Metronic";
let log = console.log;

export default function Home({ listCustomerDatas, saasDatas, arrivalsDatas }) {
  // got it !
  // log(datas);
  return (
    <div>
      <Metronic
        listCustomerDatas={listCustomerDatas}
        saasDatas={saasDatas}
        arrivalsDatas={arrivalsDatas}
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

  // arrivals api
  const arrivals_api = await fetch("http://localhost:3000/api/new-arrivals");
  const arrivalsDatas = await arrivals_api.json();

  // handle Time when it got clicked

  return {
    props: {
      listCustomerDatas,
      saasDatas,
      arrivalsDatas,
    },
  };
}
