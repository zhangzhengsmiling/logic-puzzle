// 1922. 统计好数字的数目
// 中等
// 相关标签
// 相关企业
// 提示
// 我们称一个数字字符串是 好数字 当它满足（下标从 0 开始）偶数 下标处的数字为 偶数 且 奇数 下标处的数字为 质数 （2，3，5 或 7）。
// 比方说，"2582" 是好数字，因为偶数下标处的数字（2 和 8）是偶数且奇数下标处的数字（5 和 2）为质数。但 "3245" 不是 好数字，因为 3 在偶数下标处但不是偶数。
// 给你一个整数 n ，请你返回长度为 n 且为好数字的数字字符串 总数 。由于答案可能会很大，请你将它对 109 + 7 取余后返回 。
// 一个 数字字符串 是每一位都由 0 到 9 组成的字符串，且可能包含前导 0 。
// 输入：n = 1
// 输出：5
// 解释：长度为 1 的好数字包括 "0"，"2"，"4"，"6"，"8" 。
/**
 * @param {number} n
 * @return {number}
 */


// 快速幂基于10e9 + 7取余
const fastPower = (m, n) => {
  let res = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      res = res * m % (Math.pow(10, 9)  + 7);
    }
    m = m * m % (Math.pow(10, 9)  + 7);
    n = Math.floor(n / 2);
  }
  return res;
}

var countGoodNumbers = function(n) {
  if (n % 2 === 0) return fastPower(4 * 5, n / 2) % (Math.pow(10, 9)  + 7) % (Math.pow(10, 9)  + 7);
  return fastPower(4 * 5, (n - 1) / 2) * 5 % (Math.pow(10, 9)  + 7) % (Math.pow(10, 9)  + 7);
};
// 805821919
const res = countGoodNumbers(1924)
console.log(res, 'res...')
