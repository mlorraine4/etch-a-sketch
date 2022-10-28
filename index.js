
var container = document.querySelector('.container');
var button = document.getElementById('rangeSelect');
var gridSizeLabel = document.getElementById('label');
var value = document.getElementById('range').value;
var cells = document.getElementsByClassName('c');
console.log(cells);

console.log(value);
createRows();
selectRows();
colorBackground();

function createRows() {
  for (var i=0; i<value; i++) {
    var div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('row');
    div.classList.add('r'+i);
  }
}

function selectRows() {
  for (var i=0; i<value; i++) {
    var row = document.querySelector('.r'+i);
    fillRow(row);
  }
}

function fillRow(nRow) {
  for (var i=0; i<value; i++) {
    var cell = document.createElement('div');
    cell.classList.add('c');
    nRow.appendChild(cell);
  }
}

function colorBackground() {
var pixels = document.getElementsByClassName('c');
for (const pixel of pixels) {
  pixel.addEventListener('mouseover', function () {
    pixel.setAttribute('id', 'cColored');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    pixel.style.backgroundColor = "#" + randomColor;
    });
  }
}

button.addEventListener('click', function () {
  var newValue = document.getElementById('range').value;
  gridSizeLabel.innerHTML = newValue + ' x ' + newValue;
  console.log(newValue);
  emptyContainer();
  newGrid(newValue);
});

function newGrid(newValue) {
  value = newValue;
  createRows();
  selectRows();
  var cellSize = 598/value + 'px'
  for (let i = 0; i < cells.length; i++) {
    const e = cells[i];
    if (e instanceof HTMLElement) {
        e.style.height = cellSize;
        e.style.width = cellSize;
    }
  }
  colorBackground();
}

function emptyContainer() {
  var child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}
