const { connect } = require("./client");

// establishes a connection with the game server
console.log("Connecting ...");
let connection = connect();

// setup interface to handle user input from stdin
const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("exiting...");
    process.exit();
  }
};

const setupInput = function (connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput(connection);
