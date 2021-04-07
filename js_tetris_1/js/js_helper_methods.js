const getCurrentObject = () => objects.find(el => el.state === 'falling');
const createPlayground = () => new Array(10).fill().map(() => new Array(5).fill());
const renderPositions = () => {
    objects.forEach(obj => obj.position.forEach( ([rowIndex, cellIndex]) => playground[rowIndex][cellIndex] = TYPE_COLORS [obj.type] ));
};
