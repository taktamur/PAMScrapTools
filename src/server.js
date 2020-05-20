const _ = require("./lib");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  var today = new Date();
  // if (program.args.length > 0) {
  //   today = new Date(program.args[0]);
  // }
  const days = _.lines(today.getFullYear(), today.getMonth() + 1);
  res.header("Content-Type", "text/plain;charset=utf-8");
  res.end(days.join("\n"));
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
