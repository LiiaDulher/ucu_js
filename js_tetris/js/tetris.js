function Tetris(state = GAME_STATES.PAUSED) {
  // Private properties
  const playground = PlaygroundFactory.getInstance();
  let gameInverval = null; // TODO: will need to use this for gameover event

  // public properties
  this.figures = []; // TODO: seems to not be accesable outside

  // Private methods
  const addFigure = () => {
    const newFigure = new Figure(this.figures);
    this.figures.push(newFigure);
    return newFigure;
  };

  const getCurrentFigure = () =>
    this.figures.find(figure => figure.state === STATES.FALLING) || addFigure();

  const events = (keyCode) => {
    if (keyCode === PAUSE){
      if (this.state === GAME_STATES.PAUSED){
        this.state = GAME_STATES.PLAYING;
        return;
      }
      this.state = GAME_STATES.PAUSED;
      return;
    }
    if (this.state === GAME_STATES.PLAYING){
      getCurrentFigure().move(keyCode);
    }
  }

  const destroyLine = () => {
    let rows = [];
    for (let rowIndex = playground.box.length - 1; rowIndex >= 0; rowIndex--){
      let fullRow = true;
      for (let cellIndex = 0; cellIndex < playground.box[rowIndex].length; cellIndex++){
        let color = helperMethods.getCell(cellIndex, rowIndex).getAttribute('class').split(' ');
        if (color.length === 1 || color[1] === DEFAULT_COLOR){
          fullRow = false;
        }
      }
      if (fullRow){
        rows.push(rowIndex);
        console.log(rowIndex);
      }
    }
    if (rows.length === 0){
      return;
    }
    const deleted_cell = (cell) => {return rows.includes(cell.y)};
    for (figure of this.figures){
      let destroyed_cells = [];
      for (let i=0; i< figure.cells.length; i++){
        if (deleted_cell(figure.cells[i])){
          figure.cells[i].destroy();
          destroyed_cells.push(i);
        }
      }
      destroyed_cells.sort()
      for (let i=0; i< destroyed_cells.length; i++){
        figure.cells.splice(destroyed_cells[i]-i, 1)
        console.log(figure.cells.length)
      }
    }
  };

  const checkForGameOver = () => {
    // TODO
  };

  // public methods
  this.play = () => {
    this.state = GAME_STATES.PLAYING;

    playground.render();
    document.addEventListener('keydown', ({keyCode}) =>  events(keyCode));

    gameInverval = setInterval(() => {
      if (this.state === GAME_STATES.PAUSED){
        return;
      }
      getCurrentFigure().move(DOWN);
      destroyLine(); // TODO: not sure where this method shoud be. Maybe in moveDown?
      checkForGameOver(); // TODO
    }, INTERVAL);
  };
}

const tetris = new Tetris();
tetris.play();
