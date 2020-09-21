// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  let pureURL = "https://preview.keenthemes.com";
  // virtual api
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
      time: "2 Days Ago",
      logo: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/misc/015-telegram.svg`,
      title: `Craft - ReactJS Admin Theme`,
      content: `Craft uses the latest and greatest frameworks
      with ReactJS for complete modernization and
      future proofing your business operations
      and sales opportunities`,
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
        {
          id: 3,
          img: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/005-girl-2.svg`,
        },
      ],
    },
    {
      time: `5 Weeks Ago`,
      logo: `${pureURL}/metronic/theme/html/demo9/dist/assets/media/svg/misc/003-puzzle.svg`,
      title: `KT.com - High Quality
      Templates`,
      content: `Easy to use, incredibly flexible and secure
      with in-depth documentation that outlines
      everything for you`,
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
  res.json(datas);
};
