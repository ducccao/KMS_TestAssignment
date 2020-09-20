export default (req, res) => {
  res.statusCode = 200;

  const datas = [
    {
      hi: "hiii",
    },
  ];
  res.json(datas);
};
