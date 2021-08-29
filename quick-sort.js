
const swap = (array, idx1, idx2) => {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const partition = (array, left, right) => {
  const rand = random(left, right);
  swap(array, rand, left);
  const pivot = array[left];
  let ptr_left = left;
  let ptr_right = right;
  while(ptr_left < ptr_right) {
    while(ptr_left < ptr_right && array[ptr_right] >= pivot) ptr_right--;
    array[ptr_left] = array[ptr_right];
    while(ptr_left < ptr_right && array[ptr_left] < pivot) ptr_left++;
    array[ptr_right] = array[ptr_left];
  }
  array[ptr_left] = pivot;
  return ptr_left;
}

const quickSort = (array, left, right) => {
  left = left || 0;
  right = right || (array.length - 1);
  if (left >= right) return;
  const mid =  partition(array, left, right);
  quickSort(array, left, mid - 1);
  quickSort(array, mid + 1, right);
}

const input = [1, 100, 3, 4, 54, 67, 7];
quickSort(input);
console.log(input);

