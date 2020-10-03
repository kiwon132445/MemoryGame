class Scoreboard {
    constructor(score, tiles) {
        this.scoreboard = document.createElement(ul);
        this.score = document.createElement(li);
        this.numberOfCorrectTiles = document.createElement(li);

        this.score.innerHTML = scorebar + score;
        this.numberOfCorrectTiles.innerHTML = tilebar + tiles;
        
        this.scoreboard.append(this.numberOfCorrectTiles);
        this.scoreboard.append(this.score);
    }
    setScore(x) {
        this.scoreboard.removeChild(this.score);
        this.score.innerHTML = scorebar + x;
        this.scoreboard.append(this.score);
    }
    setNumberOfCorrectTiles(x) {
        this.scoreboard.removeChild(this.numberOfCorrectTiles);
        this.numberOfCorrectTiles.innerHTML = tilebar + x;
        this.scoreboard.insertBefore(this.numberOfCorrectTiles, this.scoreboard.childNodes[0]);
    }
    resetScoreboard() {
        this.scoreboard.remove();
        document.getElementById(menubar).append(this.scoreboard);
    }
}