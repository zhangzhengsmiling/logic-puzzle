// 1534. 统计好三元组
// 简单
// 相关标签
// 相关企业
// 提示
// 给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
// 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// 其中 |x| 表示 x 的绝对值。
// 返回 好三元组的数量 。
// 示例 1：
// 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// 输出：4
// 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
// 示例 2：
// 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// 输出：0
// 解释：不存在满足所有条件的三元组。

// 提示：
// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000

// [7,3,7,3,12,1,12,2,3] 5 8 1
const countGoodTriplets = (nums, a, b, c) => {
  const _nums = [...nums];
  const results = [];
  for(let i = 0; i < _nums.length; i++) {
    const rangeOfJ = [];
    const rangeOfK = [];
    for (let n = i + 1; n < _nums.length; n++) {
      if (Math.abs(_nums[n] - _nums[i]) <= a) rangeOfJ.push(n);
      if (Math.abs(_nums[n] - _nums[i]) <= c) rangeOfK.push(n);
    }
    if (rangeOfJ.length === 0 || rangeOfK.length === 0) continue;
    // 从j和k中pick出符合条件的
    rangeOfJ.forEach(jIndex => {
      rangeOfK.forEach(kIndex => {
        if (jIndex >= kIndex) return;
        if (Math.abs(_nums[kIndex] - _nums[jIndex]) <= b) results.push([_nums[i], _nums[jIndex], _nums[kIndex]]);
      })
    })
  }
  return results.length;
}

const length = countGoodTriplets([7,3,7,3,12,1,12,2,3], 5, 8, 1);
