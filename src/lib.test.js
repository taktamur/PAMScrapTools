var _ = require("./lib");

test("Dateオブジェクトのテスト", () => {
  const date = new Date("2020/10/02");
  expect(date.getFullYear()).toBe(2020);
  expect(date.getMonth()).toBe(9);
  expect(date.getDate()).toBe(2);
  const date2 = new Date(2020, 4, 0); // monthは0始まり
  expect(date2.getMonth()).toBe(3);
  expect(date2.getDate()).toBe(30);
});

test("dateformatのテスト", () => {
  // https://www.npmjs.com/package/dateformat
  const dateFormat = require("dateformat");
  const date = new Date("2020/5/18");
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
  expect(dateFormat(date, "[yyyy/mm/dd](ddd)")).toBe("[2020/05/18](月)");
});

test("該当月の最終日を取得する", () => {
  expect(_.endOfMonth(2020, 1)).toBe(31);
  expect(_.endOfMonth(2020, 2)).toBe(29);
  expect(_.endOfMonth(2020, 4)).toBe(30);
});

//
test("日付から、１行を生成する", () => {
  expect(_.line(2020, 5, 18)).toBe("[2020/05/18](月)");
});

test("日付から全体string[]を生成する", () => {
  expect(_.lines(2020, 2).length).toBe(29);
  expect(_.lines(2020, 5).length).toBe(31);
  expect(_.lines(2020, 5)[17]).toBe("[2020/05/18](月)");
});
