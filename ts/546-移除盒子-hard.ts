/*
 * @lc app=leetcode.cn id=546 lang=typescript
 *
 * [546] 移除盒子
 */

// @lc code=start
//参考--3维dp--后缀
//每次都需要on^2的时间复杂度太高了
function removeBoxes(boxes: number[]): number {
  const n = boxes.length
  const memo = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(n).fill(0))
  )
  function getMax(l: any, r: any, k: any): number {
    if (l > r) return 0
    if (memo[l][r][k] !== 0) return memo[l][r][k]
    while (l < r && boxes[r] === boxes[r - 1]) {
      k++
      r--
    }
    let points = (k + 1) * (k + 1) + getMax(l, r - 1, 0)

    for (let i = l; i < r; i++) {
      if (boxes[i] === boxes[r]) {
        points = Math.max(points, getMax(i + 1, r - 1, 0) + getMax(l, i, k + 1))
      }
    }
    memo[l][r][k] = points
    return points
  }
  let res = getMax(0, boxes.length - 1, 0)

  return res
}
// @lc code=end
console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]))
