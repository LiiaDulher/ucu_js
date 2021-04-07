const getCurrentObject = () => objects.find( el => el.state === 'falling');
const createPlayground = () =>
  playgrond = new Array(10).fill().map(() => new Array(5).fill());

const renderPositions = () => {
  objects.forEach( obj => {
    obj.position.forEach( ([rowIndex, cellIndex]) => {
      playgrond[rowIndex][cellIndex] = TYPE_COLORS[obj.type]
    })
  });
};

// - virtual playground
// - in js object + playground
// - DOM -> render playground on the pageXOffset
