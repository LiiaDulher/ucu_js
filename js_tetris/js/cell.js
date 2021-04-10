// x, y - dirrection
// color - the given color on create
// figureID - defines the relation on one figure
// state - will be used in the situation when distruction of cell(s) will free up space for figure movement
function Cell(x, y, color, figureId, obsticles, state = STATES.FALLING) {
  // Public properties
  this.x = x;
  this.y = y;
  this.color = color;
  this.state = state;
  this.figureId = figureId;
  this.obsticles = obsticles;

  // Private methods
  const hasObsticlesFor = (direction, rotate_x, rotate_y) => {
    const dirrections = {
      [DOWN]:  { x: this.x,     y: this.y - 1 },
      [RIGHT]: { x: this.x + 1, y: this.y },
      [LEFT]:  { x: this.x - 1, y: this.y },
      [ROTATE_CLOCKWISE]: {x: rotate_x, y: rotate_y},
      [ROTATE_COUNTERCLOCKWISE]: {x: rotate_x, y: rotate_y}
    };
    const {x, y} = dirrections[direction];

    return obsticles.some(({cells}) =>
      cells.some(cell => cell.figureId !== this.figureId && cell.x === x && cell.y === y)
    );
  }

  const willReachBoarders = (direction, rotate_x, rotate_y) => {
    const dirrections = {
      [DOWN]:  this.y - 1 < 0,
      [RIGHT]: this.x + 1 > PLAYGROUND_WIDTH - 1,
      [LEFT]:  this.x - 1 < 0,
      [ROTATE_CLOCKWISE]: (rotate_x > PLAYGROUND_WIDTH - 1) || (rotate_x < 0) || (rotate_y < 0),
      [ROTATE_COUNTERCLOCKWISE]: (rotate_x > PLAYGROUND_WIDTH - 1) || (rotate_x < 0) || (rotate_y < 0)
    };

    return dirrections[direction]
  }

  // Public methods
  this.validFor = (direction, rotate_x=null, rotate_y=null) =>
    !hasObsticlesFor(direction, rotate_x, rotate_y) && !willReachBoarders(direction, rotate_x, rotate_y);

  this.deRender = () =>
    rendering(DEFAULT_COLOR);

  this.render = () =>
    rendering(this.color);
  
  const rendering = (color) => helperMethods.styleCell(this.x, this.y, color);

  this.move = (direction, rotate_x=null, rotate_y=null) => {
    switch(direction){
      case DOWN:
        this.y--;
        break;
      case RIGHT:
        this.x++;
        break;
      case LEFT:
        this.x--;
        break;
      case ROTATE_CLOCKWISE:
      case ROTATE_COUNTERCLOCKWISE:
         this.x = rotate_x;
         this.y = rotate_y;
    }
    this.render();
  };

  this.destroy = () => {
    // TODO: make sure this object no longer exists in the memory.
    //       maybe it will be better to have this kind of function in Figure object
  }
}
