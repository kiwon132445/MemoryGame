class Tile {
    constructor() {
        this.selected = false;
        this.isCorrectTile = false;
        this.index = null;
        this.nextTile = null;
        this.dom = document.createElement(div);
        this.dom.classList.add(classTile);

        this.inner = document.createElement(div);
        this.front = document.createElement(div);
        this.back = document.createElement(div);
        this.tilePrint = document.createElement(h1);
    }

    
    createTile() {
        this.inner.className = innerTile;
        this.front.className = tileFront;

        if (this.isCorrectTile) {
            this.back.className = correctTile;
            this.tilePrint.innerHTML = this.index + 1;
            this.tilePrint.style.cursor = pointer;
            this.back.append(this.tilePrint);
        } else {
            this.back.className = incorrectTile;
            this.back.innerHTML = space;
        }
        this.inner.append(this.front);
        this.inner.append(this.back);
        this.dom.append(this.inner);
    }

    setEvents() {
        this.dom.addEventListener(mouseenter, ()=> {
            if (!this.getSelected()) {
                this.front.style.backgroundColor = lightgrey;
                this.dom.style.cursor = pointer;
            }
        });
        this.dom.addEventListener(mouseleave, () => {
            if (!this.getSelected()) {
                this.front.style.backgroundColor = grey;
                this.dom.style.cursor = defaultCursor;
            }
        });

        this.dom.addEventListener(mouseClick, () => {
            if(!this.getSelected()) {
                document.getElementById(wrongtilesfx).play();
                
                this.setSelected();
                this.flipTileX();

                setTimeout(() => {
                    if(this.getIsCorrectTile()) {
                        if (game.gainScore(this) == 1) {
                            this.incorrectOrder();
                            
                            setTimeout(()=> {
                                game.revealCorrectTilesX();
                                setTimeout(()=>{
                                    game.lose();
                                }, 1000)
                            }, 1000);
                        }
                    } else {
                        game.loseScore();
                    }
                }, 1000);
            }
        });
    }

    incorrectOrder() {
        this.back.style.backgroundColor = red;
    }

    flipTileY() {
        this.inner.style.transform = flipY;
    }
    flipTileYBack() {
        this.inner.style.transform = flipY0;
    }
    flipTileX() {
        this.tilePrint.style.transform = rotate90;
        this.inner.style.transform = flipX;
    }

    getSelected() {
        return this.selected;
    }
    setSelected() {
        this.selected = true;
    }

    getIsCorrectTile() {
        return this.isCorrectTile;
    }
    setIsCorrectTile() {
        this.isCorrectTile = true;
    }

    getCorrectTileIndex() {
        return this.index;
    }
    setCorrectTileIndex(x) {
        this.index = x;
    }

    getDom() {
        return this.dom;
    }
}