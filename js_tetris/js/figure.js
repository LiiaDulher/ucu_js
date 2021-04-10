// falling - new figure is put on the playgound
// static - figure stoped moving. This happens when there are obsicles for any cells bellow
function Figure(obsticles, state = STATES.FALLING) {

  // Public properties
  this.cells = [];
  this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  this.id = helperMethods.idGenerator.next().value;
  this.state = state;
  this.obsticles = obsticles;

  const generateShape = () =>
    FIGURE_SHAPES[Math.floor(Math.random() * FIGURE_SHAPES.length)];

  this.shape = generateShape();

  const generateRotation = () => Math.floor(Math.random() * FIGURE_ROTATIONS[this.shape].length);

  this.rotaion_state = generateRotation();

  const generateCenter = () => {
    let y = FIGURE_CENTER[this.shape][this.rotaion_state][0];
    let x = Math.floor(Math.random() * FIGURE_CENTER[this.shape][this.rotaion_state][1][1]) +
              FIGURE_CENTER[this.shape][this.rotaion_state][1][0];
    return [y, x];
  };

  this.center = generateCenter();
  
  // Private methods
  const validFor = (direction) =>
    this.cells.every(cell => cell.validFor(direction));

  // initialise figure cells
  const addCell = (x, y) =>
    this.cells.push(new Cell(x, y, this.color, this.id, this.obsticles, this.state));
  
  const generateCoordinates = () => {
    return FIGURE_ROTATIONS[this.shape][this.rotaion_state]
  }

  generateCoordinates().forEach(([y, x]) =>
    addCell(x+this.center[1], y+this.center[0]));

  // Public methods
  this.move = (direction) => {
    if (direction === ROTATE_CLOCKWISE || direction === ROTATE_COUNTERCLOCKWISE){
      this.rotate(direction);
      return;
    }
    if (validFor(direction)){  
      this.cells.forEach(cell => cell.deRender());
      this.cells.forEach(cell => cell.move(direction));
      return;
    }
    if (direction === DOWN){
      this.state = STATES.STATIC;
    }
  }

  this.rotate = (direction) => {
    const rotation_direction = (direction === ROTATE_CLOCKWISE) ? 1 : -1;
    this.center = [this.cells[0].x, this.cells[0].y];
    console.log(this.center)
    this.rotaion_state = (this.rotaion_state + rotation_direction < 0) ?
                        (this.rotaion_state + rotation_direction+FIGURE_ROTATIONS[this.shape].length)%FIGURE_ROTATIONS[this.shape].length : 
                        (this.rotaion_state + rotation_direction)%FIGURE_ROTATIONS[this.shape].length;
    let cells = generateCoordinates();
    let validator = true;
    for (let i=0; i < cells.length; i++){
        validator &&= this.cells[i].validFor(direction, cells[i][1]+this.center[0], cells[i][0]+this.center[1])
    }
    if (validator){
      this.cells.forEach(cell => cell.deRender());
      for (let i=0; i < cells.length; i++){
        this.cells[i].move(direction, cells[i][1]+this.center[0], cells[i][0]+this.center[1])
      }
      return;
    }
    this.rotaion_state = (this.rotaion_state - rotation_direction)%FIGURE_ROTATIONS[this.shape].length;
  }
}
