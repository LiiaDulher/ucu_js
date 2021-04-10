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
    // TODO
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
tetris.play()
