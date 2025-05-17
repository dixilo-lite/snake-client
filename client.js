const net = require("net");
const {IP, PORT} = require("./constants");
const connect = function() {
   const conn = net.createConnection({
    host:IP,
    port:PORT, // num
   });
   conn.setEncoding("utf8");

   conn.on("connect",() => {
    console.log("Connected!");
    conn.write("Name: J.C");
   });

   //returns data from the server
   conn.on("data",(data) => {
    console.log(data);
   });

   return conn;

};

module.exports=connect;