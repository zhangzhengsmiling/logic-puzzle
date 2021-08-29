const str = '000333333333234509760';

const frequence = (str) => {
  const list = [...str];
  const temp = {};
  list.forEach(ch => {
    if (!temp[ch]) temp[ch] = 0;
    temp[ch]++;
  });
  let freqCh = '';
  Object.keys(temp)
    .forEach(key => {
      if ((temp[freqCh] || 0) < temp[key])
        freqCh = key;
    });
  return freqCh;
}

const ch = frequence(str);
console.log(ch);

