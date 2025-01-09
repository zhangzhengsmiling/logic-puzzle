/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const results = [];
  const put = (ch, i, j) => {
    results.push({
      char: ch,
      i,
      j,
    });
  };
  let flag = 0;
  s.split("").forEach((char) => {
    if (!results.length) {
      put(char, 0, 0);
      flag = 0;
      return;
    }
    if (flag === 0) {
      const prev = results[results.length - 1];
      put(char, prev.i, prev.j + 1);
      if (prev.j + 1 === numRows - 1) {
        flag = 1;
      }
    } else if (flag === 1) {
      const prev = results[results.length - 1];
      put(char, prev.i + 1, prev.j - 1);
      if (prev.j - 1 === 0) {
        flag = 0;
      }
    }
  });

  const collection = [];
  results.forEach((item) => {
    if (!collection[item.j]) collection[item.j] = [];
    collection[item.j].push(item.char);
  });

  return collection.map((item) => item.join("")).join("");
};

// console.log(
//   convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR",
//   convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI",
//   convert("A", 1) === "A"
// );

const myAtoi = (s) => {
  const chars = s.split("");
  let sign;
  let str = "";
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === " ") {
      if (!sign) continue;
      break;
    }
    if ((chars[i] === "-" || chars[i] === "+") && !sign) {
      sign = chars[i];
      continue;
    }
    if (/[0-9]/.test(chars[i])) {
      if (!sign) sign = "+";
      str += chars[i];
    } else {
      break;
    }
  }
  sign = sign === "-" ? -1 : 1;
  str = Number(str);
  const num = sign * str;
  if (num < 2 ** 31 * -1) return 2 ** 31 * -1;
  if (num > 2 ** 31 - 1) return 2 ** 31 - 1;
  return num;
};

// console.log(myAtoi("words and 987"));
// console.log(myAtoi("0-1"));
// console.log(myAtoi("-1234567823412412356723456723456734567856c0d3"));
// console.log(myAtoi("1234567823412412356723456723456734567856c0d3"));
// console.log(myAtoi("+ 1234567823412412356723456723456734567856c0d3"));
// console.log(myAtoi(" -042"));
// console.log(myAtoi("42"));

const a = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["x", "y", "z"],
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitArr = digits.split("");
  const arrays = digitArr.map((digit) => a[digit]);
  const result = [];
  const transversal = (currentStr, arr, restArr) => {
    arr.forEach((s) => {
      const str = currentStr + s;
      if (str.length === digits.length) {
        result.push(str);
      }
      if (restArr.length) {
        transversal(currentStr + s, restArr[0], restArr.slice(1));
      }
    });
  };
  transversal("", arrays[0], arrays.slice(1));
  return result;
};

// const results = letterCombinations("222");
// console.log(results);

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

// dp[n] = dp[n-1] + 将一对括号插入到dp[n-1]的每一个可能位置

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];
  const put = (result, lCount, rCount) => {
    let range = [];
    if (lCount < n) {
      range.push("(");
    }
    if (rCount < lCount && rCount < n) {
      range.push(")");
    }
    if (range.length === 0) results.push(result.join(""));
    range.forEach((item) => {
      let nextLCount = item === "(" ? lCount + 1 : lCount;
      let nextRCount = item === ")" ? rCount + 1 : rCount;
      put([...result, item], nextLCount, nextRCount);
    });
  };
  put([], 0, 0);
  return results;
};

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。
// 示例 1：
// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)。
// 示例 2：
// 输入：nums = [0,0,0], target = 1
// 输出：0
// 解释：与 target 最接近的和是 0（0 + 0 + 0 = 0）。
// 提示：
// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104
//双指针扫描
const threeSumClosest = (nums, target) => {
  const _nums = nums.sort((a, b) => a - b);
  let closest = Infinity;
  nums.forEach((num, index) => {
    let ptr_left = index + 1;
    let ptr_right = _nums.length - 1;
    while (ptr_left < ptr_right) {
      const distance = num + _nums[ptr_left] + _nums[ptr_right] - target;
      if (Math.abs(closest) > Math.abs(distance)) {
        closest = distance;
      }
      if (distance === 0) return target;
      if (distance > 0) {
        ptr_right--;
      } else {
        ptr_left++;
      }
    }
  });
  return closest + target;
};

// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。
// 示例 1：
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：
// 输入：nums = [2,2,2,2,2], target = 8
// 输出：[[2,2,2,2]]
// 提示：
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

const cartesianProduct = (array1, array2) => {
  const results = [];
  array1.forEach((item1) => {
    array2.forEach((item2) => {
      results.push([item1, item2]);
    });
  });
  return results;
};

const reduceNums = (nums) => {
  const obj = {};
  nums.forEach((num) => {
    if (obj[num] === undefined) obj[num] = 0;
    obj[num]++;
  });
  return Object.keys(obj)
    .reduce((acc, cur) => {
      if (obj[cur] > 4) {
        return [...acc, ...new Array(4).fill(cur)];
      } else {
        return [...acc, ...new Array(obj[cur]).fill(cur)];
      }
    }, [])
    .map(Number);
};

const fourSum = (nums, target) => {
  const _nums = reduceNums(nums);
  const obj = {};
  const add = (num, from) => {
    if (!obj[num]) obj[num] = [];
    obj[num].push(from);
  };
  for (let i = 0; i < _nums.length; i++) {
    for (let j = i + 1; j < _nums.length; j++) {
      add(_nums[i] + _nums[j], [i, j]);
    }
  }
  const twoSums = Object.entries(obj).map(([key, froms]) => {
    return {
      sum: Number(key),
      froms,
    };
  });

  twoSums.sort((a, b) => a.sum - b.sum);
  let ptr_left = 0;
  let ptr_right = twoSums.length - 1;
  const results = [];

  while (ptr_left <= ptr_right) {
    console.log(ptr_left, ptr_right);
    const sums = twoSums[ptr_left].sum + twoSums[ptr_right].sum;
    if (sums === target) {
      results.push(
        ...cartesianProduct(twoSums[ptr_left].froms, twoSums[ptr_right].froms)
          .map((item) => item.reduce((acc, cur) => [...acc, ...cur], []))
          .map((item) => {
            return [...new Set(item)];
          })
          .filter((item) => item.length === 4)
          .map((items) => items.map((item) => _nums[item]))
          .map((item) => item.sort((a, b) => a - b))
      );
      ptr_left++;
      ptr_right--;
      continue;
    }
    if (sums > target) {
      ptr_right--;
    } else {
      ptr_left++;
    }
  }
  return [...new Set(results.map((item) => item.join(",")))].map((item) =>
    item.split(",").map(Number)
  );
};

// console.log(fourSum([2, 2, 2, 2, 2], 8));
// console.log(reduceNums([10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20]));

// 3285. 找到稳定山的下标
// 简单
// 相关标签
// 相关企业
// 有 n 座山排成一列，每座山都有一个高度。给你一个整数数组 height ，其中 height[i] 表示第 i 座山的高度，再给你一个整数 threshold 。
// 对于下标不为 0 的一座山，如果它左侧相邻的山的高度 严格大于 threshold ，那么我们称它是 稳定 的。我们定义下标为 0 的山 不是 稳定的。
// 请你返回一个数组，包含所有 稳定 山的下标，你可以以 任意 顺序返回下标数组。
// 示例 1：
// 输入：height = [1,2,3,4,5], threshold = 2
// 输出：[3,4]
// 解释：
// 下标为 3 的山是稳定的，因为 height[2] == 3 大于 threshold == 2 。
// 下标为 4 的山是稳定的，因为 height[3] == 4 大于 threshold == 2.
// 示例 2：
// 输入：height = [10,1,10,1,10], threshold = 3
// 输出：[1,3]
// 示例 3：
// 输入：height = [10,1,10,1,10], threshold = 10
// 输出：[]
// 提示：
// 2 <= n == height.length <= 100
// 1 <= height[i] <= 100
// 1 <= threshold <= 100

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  let results = [];
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      results.push(i);
    }
  }
  return results;
};

// console.log(stableMountains([10, 1, 10, 1, 10], 3));
// console.log(stableMountains([1, 2, 3, 4, 5], 2));
// console.log(stableMountains([10, 1, 10, 1, 10], 10));

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：
// 输入：root = []
// 输出：[]
// 示例 3：
// 输入：root = [1]
// 输出：[1]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const results = [];
  const stack = [];
  let ptr = root;
  while (ptr) {
    stack.push(ptr);
    ptr = ptr.left;
  }

  while (stack.length) {
    const node = stack.pop();
    results.push(node.val);
    if (node.right) {
      let ptr = node.right;
      while (ptr) {
        stack.push(ptr);
        ptr = ptr.left;
      }
    }
  }

  return results;
};

const node = {
  left: null,
  val: 3,
  right: {
    left: {
      val: 2,
      left: null,
      right: null,
    },
    val: 1,
    right: null,
  },
};

// console.log(inorderTraversal(node));

// 98. 验证二叉搜索树
// 已解答
// 中等
// 相关标签
// 相关企业
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
// 有效 二叉搜索树定义如下：
// 节点的左子树
// 只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const results = inorderTraversal(root);

  for (let i = 0; i < results.length; i++) {
    if (results[i] <= results[i - 1]) return false;
  }
  return true;
};

// 3138. 同位字符串连接的最小长度
// 中等
// 相关标签
// 相关企业
// 提示
// 给你一个字符串 s ，它由某个字符串 t 和若干 t  的 同位字符串 连接而成。
// 请你返回字符串 t 的 最小 可能长度。
// 同位字符串 指的是重新排列一个单词得到的另外一个字符串，原来字符串中的每个字符在新字符串中都恰好只使用一次。

const checkAnagram = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const map = {};
  s1.split("").forEach((c) => {
    if (!map[c]) map[c] = 0;
    map[c]++;
  });
  for (let i = 0; i < s2.length; i++) {
    if (!map[s2[i]]) return false;
    map[s2[i]]--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  for (let i = 0; i <= s.length / 2; i++) {
    // 剪枝
    if (s.length % (i + 1) !== 0) continue;
    const s0 = s.slice(0, i + 1);
    let ptr_left = i + 1;
    let ptr_right = ptr_left + i + 1;
    console.log(ptr_left, ptr_right);
    while (ptr_right <= s.length) {
      const s1 = s.slice(ptr_left, ptr_right);
      if (!checkAnagram(s0, s1)) break;
      if (ptr_right === s.length) return i + 1;
      ptr_left = ptr_left + i + 1;
      ptr_right = ptr_right + i + 1;
    }
  }
  return s.length;
};

// console.log(minAnagramLength("abba"));

// 给你一个字符串 num ，表示一个大整数。如果一个整数满足下述所有条件，则认为该整数是一个 优质整数 ：
// 该整数是 num 的一个长度为 3 的 子字符串 。
// 该整数由唯一一个数字重复 3 次组成。
// 以字符串形式返回 最大的优质整数 。如果不存在满足要求的整数，则返回一个空字符串 "" 。
// 注意：
// 子字符串 是字符串中的一个连续字符序列。
// num 或优质整数中可能存在 前导零 。
// 示例 1：
// 输入：num = "6777133339"
// 输出："777"
// 解释：num 中存在两个优质整数："777" 和 "333" 。
// "777" 是最大的那个，所以返回 "777" 。
// 示例 2：
// 输入：num = "2300019"
// 输出："000"
// 解释："000" 是唯一一个优质整数。
// 示例 3：
// 输入：num = "42352338"
// 输出：""
// 解释：不存在长度为 3 且仅由一个唯一数字组成的整数。因此，不存在优质整数。
// 提示：
// 3 <= num.length <= 1000
// num 仅由数字（0 - 9）组成

let check = (s, i) => {
  return s[i] === s[i + 1] && s[i] === s[i + 2];
};
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  if (num.length < 3) return "";
  let temp = -1;
  for (let i = 0; i < num.length - 2; i++) {
    if (check(num, i)) {
      if (temp < Number(num[i])) temp = Number(num[i]);
    }
  }
  if (temp === -1) return "";
  return new Array(3).fill(temp).join("");
};

// 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。
// 示例 1：
// 输入：root = [1,3,null,null,2]
// 输出：[3,1,null,null,2]
// 解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
// 示例 2：
// 输入：root = [3,1,4,null,null,2]
// 输出：[2,1,4,null,null,3]
// 解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
// 提示：
// 树上节点的数目在范围 [2, 1000] 内
// -231 <= Node.val <= 231 - 1
// 进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用 O(1) 空间的解决方案吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var recoverTree = function (root) {};
