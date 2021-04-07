const events = {
  [DONW]() {
    console.log('event DONW')

    const current = getCurrentObject();
    current.position.forEach( pos => (pos[0] > 0 && pos[0]-- ));

    createPlayground();
    renderPositions();
    renderPlayground();
  },
  [RIGHT]() {
    console.log('event RIGHT')
  },
  [LEFT]() {
    console.log('event LEFT')
  },
  [PAUSE]() {
    console.log('event PAUSE')
  },
}

document.addEventListener('keydown', ({keyCode}) =>  events[keyCode] && events[keyCode]())
