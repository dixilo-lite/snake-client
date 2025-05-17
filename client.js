const net=require("net");
const connect = function() {
   const conn = net.createConnection({
    host:"localhost",
    port: 50541, // num
   });
   conn.setEncoding("utf8");

   conn.on("connect",() => {
    console.log("Connected!");
    conn.write("Name: J.C");
    conn.write("Move: left");
    conn.write("Move: up");
    /*setTimeout(() => {
      conn.write("Move: up");
    },50);
    setTimeout(() => {
      conn.write("Move: left");
    },100);
    
     setInterval(()=> {conn.write("Move: up")},1000);*/
   });

   //returns data from the server
   conn.on("data",(data) => {
    console.log(data);
   });

   return conn;

};

module.exports=connect;