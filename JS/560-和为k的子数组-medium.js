/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * 自己--暴力
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (nums.length === 0) return 0
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let count = nums[i]
    if (count === k) {
      res++
    }
    let index = i
    while (index < nums.length - 1) {
      index++
      count += nums[index]
      if (count === k) {
        res++
      }
    }
  }
  return res
}
// @lc code=end

subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)
