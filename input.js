const { connect } = require("http2");
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGE_BIG, MESSAGE_COME} = require("./constants");

let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key ==="\u0003")  {
    process.exit();
  } else if (key === MOVE_UP_KEY)  {
    connection.write("Move: up"); 
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right")
  } else if (key === MESSAGE_BIG) {
    connection.write("Say: Go big or go home!");
  } else if (key === MESSAGE_COME) {
    connection.write ("Say: Come here!");
  }
}

module.exports=setupInput;
