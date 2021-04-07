let playgrond = [];

const TYPE_COLORS = {
  'L': 'red',
  'T': 'purple',
  'I': 'green'
};

// OOP - Cube x/y
// figure - some amount of Cubes

const INITIAL_POSITIONS = [
  {
    type: 'L',
    state: 'falling', // static / falling
    position: [[9, 1], [8, 1], [8, 2], [8, 3]],
  }, {
    type: 'I',
    state: 'static',
    position: [[2,2], [1, 2], [0, 2]],
  }, {
    type: 'I',
    state: 'static',
    position: [[2, 3], [1, 3], [0, 3]],
  }
];

const DONW = 40;
const RIGHT = 39;
const LEFT = 37;
const PAUSE = 32;
