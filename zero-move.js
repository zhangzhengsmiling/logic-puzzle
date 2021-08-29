// array操作，把数据为0的数移到数组的末尾去, 要求：保持数组原来数字的相对位置，不开辟新的空间
// [0,0,0,2,3,4,5,0,9,7,6,0] => [2,3,4,5,9,7,6,0,0,0,0,0]
// console.log(fn([0,0,0,2,3,4,5,0,9,7,6,0] ))

const input = [0,0,0,2,3,4,5,0,9,7,6,0];

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const fn = (array) => {
  let ptr_zero = 0;
  let ptr_none_zero = array.length - 1;
  while(ptr_none_zero > ptr_zero) {
    while(ptr_none_zero > ptr_zero && array[ptr_zero] !== 0) ptr_zero++;
    while(ptr_none_zero > ptr_zero && array[ptr_none_zero] === 0) ptr_none_zero--;
    swap(array, ptr_zero, ptr_none_zero);
  }
  return array;
}

const res = fn(input);
console.log(res);

