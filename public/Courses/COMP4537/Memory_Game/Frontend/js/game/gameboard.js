class Gameboard {
    constructor() {
        this.gameScreen = document.getElementById(game_screen);
        this.tileSize = 0;
        this.maxBoardSize = 0;
        this.height = 0;
        this.width = 0;

        this.board = document.createElement(div);
        this.board.id = idBoard;
        this.gameScreen.append(this.board);
    }

    setBoardDimension(tiles) {
        let maxwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let maxheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        if (maxheight < maxwidth) {
            this.maxBoardSize = maxheight * 0.8;
            this.tileSize = this.maxBoardSize * 0.1;
            this.board.style.width = this.maxBoardSize * (0.1 + (0.1 * tiles[0].length)) + pixel;
            this.board.style.height = this.maxBoardSize * (0.1 + (0.1 * tiles.length)) + pixel;
        } else {
            this.maxBoardSize = maxwidth * 0.9;
            this.tileSize = this.maxBoardSize * 0.12;
            this.board.style.width = this.maxBoardSize * (0.1 + (0.12 * tiles[0].length)) + pixel;
            this.board.style.height = this.maxBoardSize * (0.1 + (0.12 * tiles.length)) + pixel;
        }
    }

    rotateBoard() {
        this.board.style.transform = rotate90;
    }

    rotateBack() {
        this.board.style.transform = rotateBack;
    }
    resetBoard() {
        if(this.board != null) {
            this.gameScreen.removeChild(this.board);
            this.rotateBack();
            this.gameScreen.append(this.board);
        }
    }
    loseBoard() {
        this.board.remove();
        this.board = null;
    }

    setTiles(tiles) {
        this.setTileDimension(tiles);
        for(let i = 0; i < tiles.length; i++) {
            for(let j = 0; j < tiles[i].length; j++) {
                tiles[i][j].getDom().style.width = this.tileSize + pixel;
                tiles[i][j].getDom().style.height = this.tileSize + pixel;
                this.board.append(tiles[i][j].getDom());
            }
        }
    }

    setTileDimension(tiles) {
        let size = this.tileSize + pixel;
        this.board.innerHTML = "";
        this.board.style.gridTemplateRows = tileRepeat + tiles.length + comma + size + closingBracket;
        this.board.style.gridTemplateColumns = tileRepeat + tiles[0].length + comma + size + closingBracket;
    }
}