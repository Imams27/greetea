const chalk = require("chalk")

function runHello() {
    console.log(chalk.blue("Hello World"));
    console.error();
}

module.exports = runHello