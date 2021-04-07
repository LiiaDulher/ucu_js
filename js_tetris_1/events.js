const events = {
    [DOWN]() {
        console.log('event down')

        const current = getCurrentObject();
        current.position.forEach(pos => (pos[0] > 0 && pos[0]-- ))

        renderPositions;
        renderPlayground;
    },
    [RIGHT]() {
        console.log('event right')
    },
    [LEFT]() {
        console.log('event left')
    },
    [PAUSE]() {
        console.log('event pause')
    }
};

document.addEventListener('keydown', (keyCode) => events[keyCode] && events[keyCode]())