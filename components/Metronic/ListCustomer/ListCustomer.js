import React from "react";
import ItemCustomer from "./ItemCustomer/ItemCustomer";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import Axios from "axios";

let log = console.log;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  spacing: {
    padding: 20,
  },
  d_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// cannot create virtual data
let pureURL = "https://preview.keenthemes.com";
const datas = [
  {
    time: "7 Hours Ago",
    logo: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/misc/006-plurk.svg`,
    title: "PitStop - Multiple Email Generator",
    content: `Pitstop creates quick email campaigns.
  We help to strengthen your brand
  for your every purpose.`,
    user: [
      {
        id: 0,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
      },
      {
        id: 1,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
      },
      {
        id: 2,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
      },
    ],
  },

  {
    time: "7 Hours Ago",
    logo: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/misc/006-plurk.svg`,
    title: "PitStop - Multiple Email Generator",
    content: `Pitstop creates quick email campaigns.
  We help to strengthen your brand
  for your every purpose.`,
    user: [
      {
        id: 0,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
      },
      {
        id: 1,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
      },
      {
        id: 2,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
      },
    ],
  },
  {
    time: "7 Hours Ago",
    logo: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/misc/006-plurk.svg`,
    title: "PitStop - Multiple Email Generator",
    content: `Pitstop creates quick email campaigns.
  We help to strengthen your brand
  for your every purpose.`,
    user: [
      {
        id: 0,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
      },
      {
        id: 1,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
      },
      {
        id: 2,
        img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
      },
    ],
  },
];

function ListCustomer({ listCustomerDatas }) {
  const classes = useStyles();
  // got it !!
  // log(listCustomerDatas);
  let ListItemCusTomer = listCustomerDatas.map((data, index) => {
    return (
      <ItemCustomer
        key={index}
        time={data.time}
        logo={data.logo}
        title={data.title}
        content={data.content}
        user={data.user}
      ></ItemCustomer>
    );
  });

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.root}>
      <Grid container spacing={3}>
        {ListItemCusTomer}
      </Grid>
    </Grid>
  );
}

// cannot fetch data right there
export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/customer/pit-stop`);
  const datas = await res.json();

  return {
    props: {
      datas,
    },
  };
}

export default ListCustomer;
