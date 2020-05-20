const dateFormat = require("dateformat");
dateFormat.i18n.dayNames = [
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土",
  "日曜日",
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
];

exports.endOfMonth = function (year, month) {
  return new Date(year, month, 0).getDate();
};

exports.line = function (year, month, day) {
  return dateFormat(new Date(year, month - 1, day), "[yyyy/mm/dd](ddd)");
};

exports.lines = function (year, month) {
  const ret = [];
  for (day = 1; day <= this.endOfMonth(year, month); day++) {
    ret.push(this.line(year, month, day));
  }
  return ret;
};
