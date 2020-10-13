//database table
    //Leaderboard(UserID(autoincrement int), Username, Score);

exports.uploadPlayerData = function(connection, username, score) {
  new Promise((resolve, reject) => {
    let sql = "INSERT INTO Leaderboard (Username, Score) VALUES (" + username + ", " + score + ");";
    connection.query(sql, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertID);
      }
    });
  });
  
}

exports.getTop5 = function(connection) {
  new Promise((resolve, reject) => {
    let sql = "SELECT * FROM Leaderboard ORDER BY Score LIMIT 5";
    connection.query(sql, function (err, result, fields) {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertID);
      }
    });
  });
  
}

exports.getUserRank = function(connection, id) {
  new Promise((resolve, reject) => {
    let sql = "SELECT * FROM Leaderboard ORDER BY Score";
    connection.query(sql, function (err, result, fields) {
      let rank = 0;
      for(let i = 0; i < result.length; i++) {
        if (result[i].UserID == id) {
          rank = (i+1);
        }
      }
      if (err) {
        reject(err);
      } else {
        resolve(rank);
      }
    });
  })
  
}
