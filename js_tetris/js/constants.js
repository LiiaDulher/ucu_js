// Playground
const PLAYGROUND_HEIGHT = 15;
const PLAYGROUND_WIDTH = 7;
const PLAYGROUND_NODE_ID = 'playgound';

// colors
const COLORS = ['red', 'purple', 'green', 'yellow', 'blue'];
const DEFAULT_COLOR = 'white';

// figures and cells states
const STATES = {
  FALLING: 'FALLING',
  STATIC: 'STATIC'
};

const FIGURE_SHAPES = ['L', 'T', 'I'];

const FIGURE_ROTATIONS = {
  'L':[ [[0,0], [1,-1],  [0,-1], [0,1]],
        [[0,0], [1,1],   [1,0],  [-1,0] ],
        [[0,0], [-1,1],  [0,1],  [0,-1]],
        [[0,0], [-1,-1], [-1,0], [1,0]] 
      ],
  'T':[ [[0,0], [0,-1], [-1,0], [0,1]],
        [[0,0], [1,0],  [0,-1], [-1,0]],
        [[0,0], [0,1],  [1,0],  [0,-1]],
        [[0,0], [-1,0], [0,1],  [1,0]]
      ],
  'I':[ [[0, 0], [-1, 0], [1, 0]],
        [[0, 0], [0, 1],  [0, -1]],
        [[0, 0], [1, 0],  [-1, 0]],
        [[0, 0], [0, -1], [0, 1]]
      ]
};

const FIGURE_CENTER = {
  'L': [[PLAYGROUND_HEIGHT, [1, PLAYGROUND_WIDTH-3]], 
        [PLAYGROUND_HEIGHT + 1, [0, PLAYGROUND_WIDTH-2]], 
        [PLAYGROUND_HEIGHT + 1, [1, PLAYGROUND_WIDTH-3]], 
        [PLAYGROUND_HEIGHT + 1, [1, PLAYGROUND_WIDTH-2]]
      ],
  'T': [[PLAYGROUND_HEIGHT + 1, [1, PLAYGROUND_WIDTH-3]],
        [PLAYGROUND_HEIGHT + 1, [1, PLAYGROUND_WIDTH-3]],
        [PLAYGROUND_HEIGHT, [1, PLAYGROUND_WIDTH-3]],
        [PLAYGROUND_HEIGHT + 1, [0, PLAYGROUND_WIDTH-2]]
      ],
  'I': [[PLAYGROUND_HEIGHT + 1, [0, PLAYGROUND_WIDTH-1]],
       [PLAYGROUND_HEIGHT, [1, PLAYGROUND_WIDTH-3]]
      ]
};

// key codes for keydown events
const DOWN = 40;
const RIGHT = 39;
const LEFT = 37;
const PAUSE = 32;
const ROTATE_CLOCKWISE = 68;
const ROTATE_COUNTERCLOCKWISE = 65;

// Game constants
const INTERVAL = 1000;
const GAME_STATES = {
  PAUSED: 'PAUSED',
  PLAYING: 'PLAYING',
  GAMEOVER: 'GAMEOVER' // TODO
};
