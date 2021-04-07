function renderPlayground() {
  let playgrondNode = document.getElementById('playgound');
  playgrondNode.innerHTML = '';

  for (let rowIndex = playgrond.length - 1; rowIndex >= 0; rowIndex--) {
    let rowNode = createRow(rowIndex);
    for (let cellIndex = 0; cellIndex < playgrond[rowIndex].length; cellIndex++) {
      rowNode.appendChild(createCell(cellIndex, playgrond[rowIndex][cellIndex]))
    }
    playgrondNode.appendChild(rowNode);
  }
}

// table layouts
const createRow = (rowIndex) => {
  let rowNode = document.createElement('div');
  rowNode.setAttribute('id', `row-${rowIndex}`)
  rowNode.setAttribute('class', 'row')
  return rowNode;
}

const createCell = (cellIndex, color) => {
  let cellNode = document.createElement('div');
  cellNode.setAttribute('class', `cell cell-${cellIndex} ${color}`)
  return cellNode;
}
