let log = console.log;
const pure_url = "https://preview.keenthemes.com/";

function virtualRandomData() {
  const data = [
    {
      id: 0,
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/006-plurk.svg`,
      title: "Top Authors",
      sub_title: "Successful Fellas",
      content: "ReactJs, HTML",
      total_users: "4600 Users",
    },
    {
      id: 1,
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/014-kickstarter.svg`,
      title: "Bestseller Theme",
      sub_title: "Amazing Templates",
      content: "ReactJS, Ruby",
      total_users: "354 Users",
    },
    {
      id: 2,
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/015-telegram.svg`,
      title: "Popular Authors",
      sub_title: "Most Successful",
      content: "Python, MySQL",
      total_users: "7200 Users",
    },
    {
      id: 3,
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/003-puzzle.svg`,
      title: "Popular Authors",
      sub_title: "Most Successful",
      content: "Laravel, Metronic",
      total_users: "890 Users",
    },
    {
      id: 4,
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/005-bebo.svg`,
      title: "Active Customers",
      sub_title: "Best Customers",
      content: "AngularJS, C#",
      total_users: "6370 Users",
    },
  ];

  log("22");
  for (let i = 0; i < data.length; i++) {
    log(i);
  }
}
