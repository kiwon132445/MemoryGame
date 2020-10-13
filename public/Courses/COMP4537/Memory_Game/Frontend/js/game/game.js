class Game {
    constructor() {
        this.tiles = [];
        this.grid = [3,3];
        this.tileOrder = [];
        this.numberOfCorrectTile = 4;
        this.score = 0;
        this.incorrectTileFlipped = 0;
        this.correctTileFlipped = 0;
        this.gameboard = new Gameboard();
        this.scoreboard = new Scoreboard(this.score, this.numberOfCorrectTile);
    }
    setup() {
        Tile.allowFlip = true;
        this.terminateButton = document.getElementById(terminate);
        this.incorrectTileFlipped = 0;
        this.correctTileFlipped = 0;

        this.createTiles();
        this.resizeBoard();
        this.setTiles();
        this.resetBoard();
        this.resetScoreBoard();

        if (this.terminateButton != null) {
            document.getElementById(game_screen).removeChild(this.terminateButton);
            document.getElementById(game_screen).append(this.terminateButton);
        }
        
        this.start();
    }

    start() {
        setTimeout(() => {
            this.flipCorrectTiles();
            this.terminateButton.disabled = true;
            
            //this.canTerminate = false;
            setTimeout(() => {
                this.flipBackCorrectTiles();
                this.terminateButton.disabled = false;
                //this.canTerminate = true;
            }, 2500)
        }, 1000);
        
        
        setTimeout(() => {
            this.gameboard.rotateBoard();
            setTimeout(() => {
                this.setEventsToTiles();
            }, 1000)
        }, 5000);
        
    }
    checkOrder(tile) {
        console.log(tile);
        console.log(this.tileOrder[tile.getCorrectTileIndex()-1]);
        if(tile.getCorrectTileIndex() == 0) {
            return true;
        } else {
            if (this.tileOrder[tile.getCorrectTileIndex()-1].getSelected()) {
                return true;
            } else {
                return false;
            }
        }
    }
    gainScore(tile) {
        this.correctTileFlipped++;
        this.score += 1;
        this.scoreboard.setScore(this.score);
        if(tile.getCorrectTileIndex() == (this.correctTileFlipped - 1)) {
            if (this.correctTileFlipped == this.numberOfCorrectTile) {
                setTimeout(() => {
                    this.win();
                }, 1000)
            }
        } else {
            return 1;
        }
        return 0;
    }
    
    loseScore() {
        this.incorrectTileFlipped++;
        this.score -= 1;
        this.scoreboard.setScore(this.score);
        if (this.score <= 0) {
            this.revealCorrectTilesX();
            this.lose();
        }
        if (this.incorrectTileFlipped >= 4) {
            this.lose();
        }
    }

    win() {
        if (this.grid[0] < 7 || this.grid[1] < 7) {
            if (this.grid[0] > this.grid[1]) {
                this.grid[1] += 1;
            } else if(this.grid[0] == this.grid[1]) {
                this.grid[0] += 1;
                this.numberOfCorrectTile += 1;
                this.scoreboard.setNumberOfCorrectTiles(this.numberOfCorrectTile);
            }
        }
        this.score+=1;
        this.scoreboard.setScore(this.score);
        this.tiles = new Array();
        this.setup();
    }

    lose() {
        this.revealCorrectTilesX();
        setTimeout(() => {
            if (this.grid[0] > this.grid[1]) {
                if (this.grid[0] > 1) {
                    this.grid[0] -= 1;
                }
            } else if(this.grid[0] == this.grid[1]) {
                if (this.grid[1] > 1) {
                    this.grid[1] -= 1;
                }
                if (this.numberOfCorrectTile > 1) {
                    this.numberOfCorrectTile -= 1;
                    this.scoreboard.setNumberOfCorrectTiles(this.numberOfCorrectTile);
                }
            }
            this.score-=1;
            this.scoreboard.setScore(this.score);
            if (this.score > 0) {
                this.scoreboard.setScore(this.score);
                this.tiles = new Array();
                this.setup();
            } else {
                this.gameTerminate();
            }
        }, 2000);
    }

    gameTerminate() {
        game.gameboard.loseBoard();
        game.scoreboard.scoreboard.remove();
        this.terminateButton.remove();
        summaryBoard = new Summary(this.score);
    }

    flipCorrectTiles() {
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                if(this.tiles[i][j].getIsCorrectTile()) {
                    this.tiles[i][j].flipTileY();
                }
            }
        }
    }
    flipBackCorrectTiles() {
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                if(this.tiles[i][j].getIsCorrectTile()) {
                    this.tiles[i][j].flipTileYBack();
                }
            }
        }
    }
    revealCorrectTilesX() {
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                if(this.tiles[i][j].getIsCorrectTile()) {
                    this.tiles[i][j].flipTileX();
                }
            }
        }
    }

    createTiles() {
        //i is the rows
        //j is the columns
        for(let i = 0; i < this.grid[0]; i++) {
            this.tiles[i] = new Array();
        }
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                this.tiles[i][j] = new Tile();
            }
        }
        this.setCorrectTiles();
        this.createTilesFrontBack();
    }

    createTilesFrontBack() {
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                this.tiles[i][j].createTile();
            }
        }
    }

    setEventsToTiles() {
        for(let i = 0; i < this.grid[0]; i++) {
            for(let j = 0; j < this.grid[1]; j++) {
                this.tiles[i][j].setEvents();
            }
        }
    }
    
    setCorrectTiles() {
        let row;
        let column;
        for(let i = 0; i < this.numberOfCorrectTile; i++) {
            while(1) {
                row = Math.floor((Math.random() * this.grid[0]));
                column = Math.floor((Math.random() * this.grid[1]));
                if (!this.tiles[row][column].getIsCorrectTile()) {
                    this.tiles[row][column].setIsCorrectTile();
                    this.tiles[row][column].setCorrectTileIndex(i);
                    this.tileOrder[i] = this.tiles[row][column];
                    break;
                }
            }
        }
    }

    resizeBoard() {
        this.gameboard.setBoardDimension(this.tiles);
    }
    setTiles() {
        this.gameboard.setTiles(this.tiles);
    }

    resetBoard() {
        this.gameboard.resetBoard();
    }
    resetScoreBoard() {
        this.scoreboard.resetScoreboard();
    }
}