let data = {
  id: 0,
  name: "ca heo",
  age: 1,
};

function testAPI(req, res) {
  res.statusCode = 200;
  res.json(data);
}

export default testAPI;
