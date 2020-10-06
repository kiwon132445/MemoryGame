let game, summaryBoard;

//initiates the game
function startGame() {
    document.getElementById(start_screen).remove();
    game = new Game()
    game.setup();
    addTerminate();
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