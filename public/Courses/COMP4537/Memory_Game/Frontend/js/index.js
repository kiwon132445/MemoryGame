let game, summaryBoard, leaderBoard;

//initiates the game
function startGame() {
    if (document.getElementById(start_screen)!=null) {
        document.getElementById(start_screen).remove();
    }

    game = new Game()
    addTerminate();
    game.setup();    
    window.addEventListener(resize, game.resizeBoard());
}

//adds terminate function
function addTerminate() {
    let terminateButton = document.createElement(button);
    terminateButton.id = terminate;
    terminateButton.addEventListener(mouseClick, gameTerminate);

    terminateButton.innerHTML = terminate;
    terminateButton.className = buttonClass;
    document.getElementById(game_screen).append(terminateButton);
}

function serverRequest(username, score) {
    //document.getElementById(gameTitle).innerHTML = "Loading"
    let xhttp = new XMLHttpRequest();
    //xhttp.open("GET", "http://localhost:8080/?username=" + username + "&" + "score=" + score, true);
    xhttp.open("GET", "https://murmuring-earth-26989.herokuapp.com/?username=" + username + "&" + "score=" + score, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            leaderBoard = new Leaderboard(JSON.parse(this.responseText));
        }
    };
}

function restartGame() {
    location.reload();
}