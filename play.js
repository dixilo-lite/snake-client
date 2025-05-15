const net = require("net");

const connect = function() {
   const conn = net.createConnection({
    host:"localhost",
    port: 50541, // num
   });
   conn.setEncoding("utf8");

   conn.on("connect",() => {
    console.log("Connected!");
   });

   conn.on("data",(data) => {
    console.log(data);
   });
   return conn;

};

console.log("Connecting ... ");
connect();