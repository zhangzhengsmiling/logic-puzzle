/**
 * 回溯法解全排列问题
 */

const input = '1234567890';

const temp = []
const res = [];
const display = (str) => {
  const list = [...str];
  if (list.length === 0) {
    // console.log(res.join(''));
    temp.push(res.join(''));
    return;
  }

  for(let i = 0; i < list.length; i++) {
    const s = list.splice(i, 1);
    res.push(s[0]);
    display(list.join(''));
    res.pop();
    list.splice(i, 0, s[0]);
  }
}

display(input);
console.log(temp.length);
console.log(10*9*8*7*6*5*4*3*2*1)


