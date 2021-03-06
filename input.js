let connection;
console.log(connection);

const handleUserInput = function (data) {
  if (data === "\u0003") {
    console.log("exiting...");
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  if (data === "h") {
    connection.write("Say: Hello");
  }
  if (data === "z") {
    connection.write("Say: Gotta catch them all!");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
