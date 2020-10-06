window.addEventListener(load, () => {
    adjustScreen();
    window.addEventListener(resize, adjustScreen);
});

//a function for adjusting the dimensions of the screen where the memory game will be placed
function adjustScreen() {
    let gameScreen = document.getElementById(game_screen);
    
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    if (height < width) {
        gameScreen.style.width = width* 0.8 + pixel;
        gameScreen.style.height = height * 0.8 + pixel;
        gameScreen.style.marginTop = height * 0.1 + pixel;
    } else {
        gameScreen.style.width = width + pixel;
        gameScreen.style.height = height + pixel;
        gameScreen.style.marginTop = 0;
    }
}

//game termination event function
function gameTerminate() {

}