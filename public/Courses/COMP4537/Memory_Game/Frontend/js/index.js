window.addEventListener(load, () => {
    adjustScreen();
    window.addEventListener(resize, adjustScreen);
});

let game;

//initiates the game
function startGame() {
    document.getElementById(start_screen).remove();
    game = new Game()
    game.setup();
    addTerminate();
    window.addEventListener(resize, gameboardResizeEvent);
}

//adds terminate function
function addTerminate() {
    let divElement = document.createElement(div);
    divElement.id = terminate;
    let h2 = document.createElement(button);
    divElement.addEventListener(mouseClick, gameTerminate);

    h2.innerHTML = terminate;
    h2.className = buttonClass;

    divElement.append(h2);
    document.getElementById(game_screen).append(divElement);
}