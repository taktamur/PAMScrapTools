const _ = require("./lib");
const program = require("commander");

program.parse(process.argv);

var today = new Date();
if (program.args.length > 0) {
  today = new Date(program.args[0]);
}

const days = _.lines(today.getFullYear(), today.getMonth() + 1);

console.log(days.join("\n"));
