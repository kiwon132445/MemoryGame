class Summary {
    constructor(score) {
        document.getElementById(gameTitle).innerHTML = summaryTitle;
        this.score = score;
        this.gameScreen = document.getElementById(game_screen);
        
        this.placeScore();
        this.submission();
        this.placeRestart();
        
    }
    placeScore() {
        this.scorePanel = document.createElement(div);
        this.scorePanel.id = scorePanel;
        this.textDom = document.createElement(h1);
        this.textDom.innerHTML = scorePanelText;
        this.scoreText = document.createElement(h1);
        this.scoreText.id = userScore;
        this.scoreText.innerHTML = this.score;
        this.scoreText.className = textCenter;
        this.scorePanel.append(this.textDom);
        this.scorePanel.append(this.scoreText);
        this.gameScreen.append(this.scorePanel);
    }
    submission() {
        this.submissionContainer = document.createElement(form);
        this.submissionContainer.id = scoreSubmission;
        this.submissionContainer.addEventListener(submit, this.handleForm);


        this.username = document.createElement(input);
        this.username.id = usernameID;
        this.username.name = fusername;
        this.username.placeholder = anonymous;
        this.username.type = text;
        

        this.submit = document.createElement(input);
        this.submit.id = submitID;
        this.submit.type = submit;
        this.submit.className = buttonClass;

        this.usernameLabel = document.createElement(label);
        this.usernameLabel.for = usernameID;
        
        this.submissionContainer.append(this.usernameLabel);
        this.submissionContainer.append(this.username);
        this.submissionContainer.append(this.submit);
        this.gameScreen.append(this.submissionContainer);
    }
    placeRestart() {
        this.restartButton = document.createElement(input);
        this.restartButton.type = button;
        this.restartButton.value = restartText;
        this.restartButton.className = buttonClass;
        this.restartButton.id = restartID;
        this.restartButton.addEventListener(mouseClick, this.restart);
        this.gameScreen.append(this.restartButton);
    }
    restart() {
        document.getElementById(gameTitle).innerHTML = memoryGameTitle;
        document.getElementById(scorePanel).remove();
        document.getElementById(scoreSubmission).remove();
        document.getElementById(restartID).remove();
        startGame();
    }

    handleForm(event) {
        event.preventDefault();
        let username = document.getElementById(usernameID).value;
        if (username == "") {
             username = anonymous;
        }
        let score =parseInt(document.getElementById(userScore).innerHTML, 10);
        document.getElementById(scorePanel).remove();
        document.getElementById(scoreSubmission).remove();
        document.getElementById(restartID).remove();
        console.log(username, score);
        serverRequest(username, score);
    }
}