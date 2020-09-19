import Metronic from "./../components/Metronic/Metronic";
let log = console.log;

export default function Home({ listCustomerDatas }) {
  // got it !
  // log(datas);
  return (
    <div>
      <Metronic listCustomerDatas={listCustomerDatas}></Metronic>
    </div>
  );
}

//
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/customer`);
  const listCustomerDatas = await res.json();

  return {
    props: {
      listCustomerDatas,
    },
  };
}
