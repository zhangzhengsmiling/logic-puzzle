/**
 * 回溯法解N皇后问题
 */

let input = 8;

const init = (num) => {
  return new Array(num)
    .fill('')
    .map(
      item => new Array(num).fill('').map(item => 0)
    );
}

const test = (matrix, row, col) => {
  // 列检测
  for(let i = 0; i < row; i++) {
    if (matrix[i][col] === 1) {
      return false;
    }
  }
  // 左上对角检测
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (matrix[i][j] === 1) {
      return false;
    }
  }
  // 右上对角检测
  for(let i = row - 1, j = col + 1; i >= 0 && j < matrix[0].length; i--, j++) {
    if (matrix[i][j] === 1) {
      return false;
    }
  }
  return true;
}
const res = []
const display = (matrix, row) => {
  if (row === matrix.length) {
    // console.log(JSON.parse(JSON.stringify(matrix)));
    res.push(JSON.parse(JSON.stringify(matrix)));
    return;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (test(matrix, row, i)) {
      matrix[row][i] = 1;
      display(matrix, row + 1);
      matrix[row][i] = 0;
    }
  }
}

const queen = (num) => {
  const matrix = init(num);
  display(matrix, 0);
};

queen(input);
console.log(res.length);

