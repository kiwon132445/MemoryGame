class Leaderboard {
    constructor(userList) {
        document.getElementById(gameTitle).innerHTML = leaderboardTitle;
        this.userList = userList;
        this.gameScreen = document.getElementById(game_screen);
        this.createRankBoard();
        this.placeRestart();
    }

    createRankBoard() {
        this.leaderboardDiv = document.createElement(div);
        this.scoreTable = document.createElement(table);
        this.scoreTable.id = tableID;

        let rankHeader = document.createElement(th);
        let usernameHeader = document.createElement(th);
        let scoreHeader = document.createElement(th);

        rankHeader.innerHTML = rank;
        usernameHeader.innerHTML = username;
        scoreHeader.innerHTML = score;

        let headrow = document.createElement(tr);
        headrow.id = tableHeadID;
        headrow.append(rankHeader);
        headrow.append(usernameHeader);
        headrow.append(scoreHeader);
        this.scoreTable.append(headrow);
        
        this.insertUser();
        this.insertTop5();
        this.leaderboardDiv.append(this.scoreTable);
        this.gameScreen.append(this.leaderboardDiv);
    }

    insertUser() {
        let row = document.createElement(tr);
        row.id = userRank;
        let user = this.userList[this.userList.length - 1];
        let rank = document.createElement(td);
        let username = document.createElement(td);
        let score = document.createElement(td);

        rank.innerHTML = user.Rank;
        username.innerHTML = user.Username;
        score.innerHTML = user.Score;

        row.append(rank)
        row.append(username)
        row.append(score);
        this.scoreTable.append(row);
    }
    insertTop5() {
        for(let i = 0; i < this.userList.length-1; i++) {
            let row = document.createElement(tr);

            let rank = document.createElement(td);
            let username = document.createElement(td);
            let score = document.createElement(td);

            rank.innerHTML = i + 1;
            username.innerHTML = this.userList[i].Username;
            score.innerHTML = this.userList[i].Score;

            row.append(rank)
            row.append(username)
            row.append(score);
            this.scoreTable.append(row);
        }
    }
    placeRestart() {
        this.restartButton = document.createElement(input);
        this.restartButton.type = button;
        this.restartButton.value = restartText;
        this.restartButton.className = buttonClass;
        //this.restartButton.id = restartID;
        this.restartButton.addEventListener(mouseClick, this.restart);
        this.gameScreen.append(this.restartButton);
    }
    restart() {
        // document.getElementById(gameTitle).innerHTML = memoryGameTitle;
        // document.getElementById(tableID).remove();
        // document.getElementById(restartID).remove();
        // startGame();
        restartGame();
    }
    
}