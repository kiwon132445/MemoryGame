const http = require('http');
let url = require('url');
let dbCall = require('./db/db_connection');
let mysql = require('mysql');

http.createServer(function (req, res) {
  console.log("The server received a request ");
  let userdata = url.parse(req.url, true);
  let dpconfig = {
    host: "sql3.freemysqlhosting.net",
    user: "sql3370223",
    password: "yDTlHYaC4c",
    database: "sql3370223"
  }

  let mysqlConnectionReq = new Promise((resolve, reject) => {
    let con = mysql.createConnection(dpconfig);
    con.connect(function (err) {
      if (err) {
        reject(err);
      }
      console.log('Connected to database');
      resolve(con);
    });
  });
  
  let connection, userID, userList, userRank;

  mysqlConnectionReq.then(
    (con) => {
      connection = con;
      dbCall.uploadPlayerData(connection, userdata.query.username, userdata.query.score).then(
        (id) => {
          userID = id;
          dbCall.getTop5(connection).then(
            (list) => {
              userList = list;
              dbCall.getUserRank(connection, userID).then(
                (rank) => {
                  userRank = rank;
                  userList[userList.length] = {
                    "Username":userdata.query.username,
                    "Score": userdata.query.score,
                    "Rank" : userRank}
                  res.writeHead(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" });
                  res.write(userList);
                  res.end();
                }
              ).catch((err) => {
                console.log("There was an error", err);
              });
            }
          ).catch((err) => {
            console.log("There was an error", err);
          });
        }
      ).catch((err) => {
        console.log("There was an error", err);
      });
    }).catch((err) => {
      console.log("There was an error", err);
    });
}).listen(process.env.PORT || 8080);
console.log('Server is running and listening ...');