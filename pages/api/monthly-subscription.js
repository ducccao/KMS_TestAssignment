export default (req, res) => {
  let pure_url = "https://preview.keenthemes.com/";
  let datas = [
    {
      bg: "#FFE2E5",
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/008-infography.svg`,
      progress_bg: "#F64E60 !important",
      team: [
        {
          id: 0,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
        },
        {
          id: 1,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
        },
        {
          id: 2,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
        },
        {
          id: 3,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/005-girl-2.svg`,
        },
      ],
    },
    {
      bg: "#C9F7F5",
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/014-kickstarter.svg`,
      progress_bg: "#1BC5BD !important",
      team: [
        {
          id: 0,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
        },
        {
          id: 1,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
        },
        {
          id: 2,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
        },
      ],
    },
    {
      bg: "#D7F9EF",
      logo: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/misc/010-vimeo.svg`,
      progress_bg: "#0BB783 !important",
      team: [
        {
          id: 0,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/001-boy.svg`,
        },
        {
          id: 1,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/028-girl-16.svg`,
        },
        {
          id: 2,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/024-boy-9.svg`,
        },
        {
          id: 3,
          img: `${pure_url}/metronic/theme/html/demo9/dist/assets/media/svg/avatars/005-girl-2.svg`,
        },
      ],
    },
  ];
  res.statusCode = 200;
  res.json(datas);
};
