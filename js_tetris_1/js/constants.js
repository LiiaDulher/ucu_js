const TYPE_COLORS = {
    'L': 'red',
    'T': 'purple',
    'I': 'green'
};
const INITIAL_POSITIONS = [{
    type: 'L',
    state: 'falling',
    position: [[9, 1], [8, 1], [8, 2], [8, 3]]
},
{
    type: 'I',
    state: 'static',
    position: [[2, 2], [1, 2], [1, 0]]
}
];

const DOWN = 40;
const RIGHT = 39;
const LEFT = 37;
const PAUSE = 32;
