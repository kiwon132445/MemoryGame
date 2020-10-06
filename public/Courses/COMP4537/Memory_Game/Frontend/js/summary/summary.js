class Summary {
    constructor(score) {
        document.getElementById(gameTitle).innerHTML = summaryTitle;
        this.score = score;
        this.gameScreen = document.getElementById(game_screen);
        
        this.placeScore();
        this.submission();
    }
    placeScore() {
        this.scorePanel = document.createElement(div);
        this.textDom = document.createElement(h1);
        this.textDom.innerHTML = scorePanelText + this.score;
        this.scorePanel.append(this.textDom);
        this.gameScreen.append(this.scorePanel);
    }
    submission() {
        this.submissionContainer = document.createElement(form);

        this.username = document.createElement(input);
        this.username.id = usernameID;
        this.username.name = fusername;
        this.username.value = anonymous;
        this.username.type = text;
        

        this.submit = document.createElement(input);
        this.submit.id = submitID;
        this.submit.value = submitValue;
        this.submit.type = submit;
        this.submit.className = buttonClass;

        this.usernameLabel = document.createElement(label);
        this.usernameLabel.for = usernameID;
        
        this.submissionContainer.append(this.username);
        this.submissionContainer.append(this.submit);
        this.gameScreen.append(this.submissionContainer);
    }
    restart() {
        document.getElementById(gameTitle).innerHTML = memoryGameTitle;
    }

}