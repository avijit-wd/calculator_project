const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html");
});
app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send(`The result is ${result}`);
});
app.post("/bmiCalculator", (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  const bmi = weight / (height + height);
  res.send(`The bmi result is ${bmi}`);
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
