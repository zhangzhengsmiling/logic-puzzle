/**
 * 滑动窗口解最长子串问题
 */

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

const lengthOfLongestSubstring = function(s) {
  if (s === '') return 0;
  const slidingWindow = {
    start: 0,
    end: 0,
    current: 1,
  }
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    for(let j = slidingWindow.start; j <= slidingWindow.end; j++) {
      if (s[i] === s[j]) {
        slidingWindow.start = j + 1;
        slidingWindow.current = slidingWindow.end - slidingWindow.start + 1;
        break;
      }
    }
    slidingWindow.end++;
    slidingWindow.current++;
    max = Math.max(slidingWindow.current, max);
  }
  return max;
};

const input = 'abcabcbb';
const res = lengthOfLongestSubstring(input);
console.log(res);