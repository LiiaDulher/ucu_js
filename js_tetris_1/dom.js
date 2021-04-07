function renderPlayground() {
    let playgroundNode = document.getElementById('playground');
    playgroundNode.innerHTML = '';

    for (let rowIndex = playground.length-1; rowIndex >=0; rowIndex--) {
        let rowNode = createRow(rowIndex);
        for (let cellIndex = 0; cellIndex < playground[rowIndex].length; cellIndex++){
            rowNode.appendChild(createCell(cellIndex, playground[rowIndex][cellIndex]));
        }
        playgroundNode.appendChild(rowNode);
    }
};

const createRow = (rowIndex) => {
    let rowNode = document.createElement('div');
    rowNode.setAttribute('id', `row -${rowIndex}`);
    rowIndex.setAttribute('class', `row`);
    return rowNode;
}

const createCell = (cellIndex, color) => {
    let cellNode = document.createElement('div');
    cellNode.setAttribute('class', `cell cell-${cellIndex} ${color}`);
    return cellNode;
};
