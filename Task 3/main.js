const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
];

let row = 0;
let col = 0;
let direction = 1;

function printNextElement() {
  const output = document.getElementById('output');
  output.innerHTML += arr[row][col] + ' ';

  col += direction;
  if (col === arr[row].length || col < 0) {
    row = 1 - row;
    col -= direction;
    direction = -direction;
  }

  setTimeout(printNextElement, 1000);
}

printNextElement();
