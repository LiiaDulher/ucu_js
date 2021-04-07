createPlayground();
renderPositions();
renderPlayground();

const gameInverval = setInterval(() => {
  events[DONW]();
}, 1000);
