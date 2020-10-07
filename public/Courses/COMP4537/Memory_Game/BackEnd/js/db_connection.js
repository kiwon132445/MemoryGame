// const http = require('http');

// http.createServer(function (req, res) {
//     console.log("server has received a request");
//     res.writeHead(200, {'Content-Type': 'text'});
//     res.end('Hello <b>World!</b>');
// }).listen(8080);

let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "kiwon132445@gmail.com",
    password:"I>rXS3yusDZUHq<U589X",
    socketPath: '/var/run/mysqld/mysqld.sock'
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  };
  console.log("Connected!");
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });