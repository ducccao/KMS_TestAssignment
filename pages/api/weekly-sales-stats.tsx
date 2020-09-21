import { NextApiRequest, NextApiResponse } from "next";

function WeeklySalesStatsAPI(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;

  const datas = {
    total_sales: "890,344 Sales",
    types: [
      {
        id: 0,
        total: "$ 2,034",
        name: "Author Sales",
        img: "http://localhost:3000/image/author-sale.svg",
        bg: "#EEE5FF",
        fill: "#8950FC !important",
      },
      {
        id: 1,
        total: "$ 706",
        name: "Commission",
        img: "http://localhost:3000/image/Commission.svg    ",
        bg: "#FFE2E5",
        fill: "#F64E60",
      },
      {
        id: 2,
        total: "$ 49",
        name: "Average Bid",
        img: "http://localhost:3000/image/avg-bid.svg",
        bg: "#D7F9EF",
        fill: "#1BC5BD",
      },
      {
        id: 3,
        total: "$ 5.8M",
        name: "All Time Sales",
        img: "http://localhost:3000/image/all-time-sale.svg",
        bg: "#C9F7F5",
        fill: "#1BC5BD",
      },
    ],
  };

  res.json(datas);
}

export default WeeklySalesStatsAPI;
