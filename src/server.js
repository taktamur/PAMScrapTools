const _ = require("./lib");
const express = require("express");
const app = express();

function 月次ページ(today) {
  const days = _.lines(today.getFullYear(), today.getMonth() + 1);
  const ret = days.concat( ["----","https://github.com/taktamur/PAMScrapTools"]);
  return ret.join("\n");
}

app.get("/", (req, res) => {
  res.header("Content-Type", "text/plain;charset=utf-8");
  res.end(月次ページ(new Date()));
});
app.get("/:year", (req, res) => {
  res.header("Content-Type", "text/plain;charset=utf-8");
  res.end(月次ページ(new Date(req.params.year)));
});
app.get("/:year/:month", (req, res) => {
  res.header("Content-Type", "text/plain;charset=utf-8");
  res.end(月次ページ(new Date(req.params.year, req.params.month - 1)));
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
