// 给你一个整数数组 nums 。请你创建一个满足以下条件的二维数组：
//
// 二维数组应该 只 包含数组 nums 中的元素。
// 二维数组中的每一行都包含 不同 的整数。
// 二维数组的行数应尽可能 少 。
// 返回结果数组。如果存在多种答案，则返回其中任何一种。
//
// 请注意，二维数组的每一行上可以存在不同数量的元素。
//
//
//
// 示例 1：
//
// 输入：nums = [1,3,4,1,2,3,1]
// 输出：[[1,3,4,2],[1,3],[1]]
// 解释：根据题目要求可以创建包含以下几行元素的二维数组：
// - 1,3,4,2
// - 1,3
// - 1
// nums 中的所有元素都有用到，并且每一行都由不同的整数组成，所以这是一个符合题目要求的答案。
// 可以证明无法创建少于三行且符合题目要求的二维数组。
// 示例 2：
//
// 输入：nums = [1,2,3,4]
// 输出：[[4,3,2,1]]
// 解释：nums 中的所有元素都不同，所以我们可以将其全部保存在二维数组中的第一行。
//
//
// 提示：
//
// 1 <= nums.length <= 200
// 1 <= nums[i] <= nums.length

const func = (nums) => {
  const res = [];
  const check = (num) => {
    for (let i = 0; i < res.length; i++) {
      const row = res[i];
      if (row.find((item) => item === num)) continue;
      row.push(num);
      return;
    }
    res.push([num]);
  };
  for (let i = 0; i < nums.length; i++) {
    check(nums[i]);
  }
  return res;
};
console.log(func([1, 3, 4, 1, 2, 3, 1]));

// 2255. 统计是给定字符串前缀的字符串数目
// 提示
// 给你一个字符串数组 words 和一个字符串 s ，其中 words[i] 和 s 只包含 小写英文字母 。
// 请你返回 words 中是字符串 s 前缀 的 字符串数目 。
// 一个字符串的 前缀 是出现在字符串开头的子字符串。子字符串 是一个字符串中的连续一段字符序列。
// 示例 1：
// 输入：words = ["a","b","c","ab","bc","abc"], s = "abc"
// 输出：3
// 解释：
// words 中是 s = "abc" 前缀的字符串为：
// "a" ，"ab" 和 "abc" 。
// 所以 words 中是字符串 s 前缀的字符串数目为 3 。
// 示例 2：
// 输入：words = ["a","a"], s = "aa"
// 输出：2
// 解释：
// 两个字符串都是 s 的前缀。
// 注意，相同的字符串可能在 words 中出现多次，它们应该被计数多次。
// https://leetcode.cn/problems/count-prefixes-of-a-given-string/description/
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return words.filter((word) => s.startsWith(S)).length;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {};

// https://leetcode.cn/problems/partition-equal-subset-sum/?envType=daily-question&envId=2025-04-07
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
// 示例 1：
// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  // 总和为奇数时无法分割
  if (sum % 2 !== 0) return false;

  const target = sum / 2;
  // 初始化动态规划数组，dp[j]表示能否选出和为j的子集
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // 空集的和为0

  for (const num of nums) {
    // 从后往前遍历，避免重复使用同一元素
    for (let j = target; j >= num; j--) {
      if (dp[j - num]) {
        dp[j] = true;
        // 提前返回优化：当找到目标值时直接返回
        if (j === target) return true;
      }
    }
  }

  return dp[target];
}

// 7
// 3   8
// 8   1   0
// 2   7   4   4
// 4   5   2   6   5
const list = [[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]];
// dp[i, j] = max{dp[i-1, j - 1] + list[i][j], dp[i-1, j] + list[i][j]}
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length)
    .fill(0)
    .map((_, i) => new Array(i + 1).fill(0));
  for (let i = 0; i <= 0; i++) {
    dp[0][i] = triangle[0][i];
  }
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + triangle[i][j],
          dp[i - 1][j] + triangle[i][j]
        );
      }
    }
  }
  console.log(dp);
  return Math.min(...dp[dp.length - 1]);
};

console.log(minimumTotal(list));


console.log('最大公共子序列')

// dp[i, j] = max{dp[i-1, j-1] + 1, dp[i-1, j], dp[i, j - 1]}
// 给定一个长度为 n 的序列 A 和一个 长度为 m 的序列 B（n,m \leq 5000），求出一个最长的序列，使得该序列既是 A 的子序列，也是 B 的子序列。
const commonLongestSeq = (text1, text2) => {
  const dp = new Array(text1.length).fill('').map(() => new Array(text2.length).fill(0));
  for(let i = 0; i < text1.length; i++) {
    dp[i][0] = text1.slice(0, i + 1).includes(text2[0]) ? 1 : 0
  }
  for(let i =0; i < text2.length; i++) {
    dp[0][i] = text2.slice(0, i + 1).includes(text1[0]) ? 1 : 0
  }
  for(let i = 1; i < text1.length; i++) {
    for(let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i -1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  return dp[text1.length - 1][text2.length - 1]
}

commonLongestSeq('abcde', 'bacde') === 4

// 给定一个长度为 n 的序列 A（n \leq 5000），求出一个最长的 A 的子序列，满足该子序列的后一个元素不小于前一个元素。

// dp[n] 以n结尾的不降子序列长度

const fn = (nums) => {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  for(let i = 1; i < nums.length; i++) {
    let max = 1;
    for(let j = i - 1; j >= 0; j--) {
      if (nums[j] <= nums[i]) {
        max = Math.max(max, dp[j] + 1);
      }
    }
    dp[i] = max;
  }
  console.log(dp, 'dp...')
}

fn([1, 2, 4, 3 , 5]);
