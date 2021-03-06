/*
 * @lc app=leetcode.cn id=923 lang=typescript
 *
 * [923] 三数之和的多种可能
 */
//[]
//[],[1]
//[][1][1][1,1]
//[][1][1][1,1][2][1,2][1,2]
//1-2-3

//自己--超时
//i < j < k
//只需要3个下标不同

// @lc code=start

// function threeSumMulti(A: number[], target: number): number {
//   let all = new Map()
//   all.set('', 1)
//   let res = 0
//   for (const num of A) {
//     const temp = new Map()
//     for (const [item, v] of all) {
//       let floor: string
//       if (item.length > 0) {
//         floor = item + '-' + num
//       } else {
//         floor = item + num
//       }
//       const split = floor.split('-')
//       if (split.length === 3) {
//         res += check(split, target, v)
//         res %= 1000000007
//       } else {

//         temp.set(floor, temp.has(floor) ? temp.get(floor) + 1 : v)

//       }
//     }

//     for (const [k, v] of temp) {
//       all.set(k, all.has(k) ? all.get(k) + v : v)
//     }
//   }

//   return res

// };
// function check(list: string[], target: number, value: number): number {
//   return parseInt(list[0]) + parseInt(list[1]) + parseInt(list[2])
//     === target ? value : 0
// }


// @lc code=end


// function threeSumMulti(A: number[], target: number): number {

// };
//copy--排列组合

function threeSumMulti(A: number[], target: number): number {
  const Mod = 1000000007
  const list = new Int32Array(101)
  for (const a of A) {
    list[a]++
  }
  let res = 0

  // All different
  for (let x = 0; x <= 100; ++x)
    for (let y = x + 1; y <= 100; ++y) {
      let z = target - x - y;
      if (y < z && z <= 100) {
        res += list[x] * list[y] * list[z];
        res %= Mod;
      }
    }

  // x == y != z
  for (let x = 0; x <= 100; ++x) {
    let z = target - 2 * x;
    if (x < z && z <= 100) {
      res += list[x] * (list[x] - 1) / 2 * list[z];
      res %= Mod;
    }
  }

  // x != y == z
  for (let x = 0; x <= 100; ++x) {
    if (target % 2 == x % 2) {
      let y = (target - x) / 2;
      if (x < y && y <= 100) {
        res += list[x] * list[y] * (list[y] - 1) / 2;
        res %= Mod;
      }
    }
  }

  // x == y == z
  if (target % 3 == 0) {
    let x = target / 3;
    if (0 <= x && x <= 100) {
      res += list[x] * (list[x] - 1) * (list[x] - 2) / 6;
      res %= Mod;
    }
  }


  return res
};

threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  , 8)

threeSumMulti([38, 63, 46, 55, 80, 68, 42, 22, 37, 38, 35, 86, 68, 32, 35, 81, 50, 11, 84, 47, 64, 74, 95, 96, 89, 80, 87, 41, 97, 82, 56, 10, 97, 56, 98, 30, 28, 82, 20, 86, 24, 17, 62, 43, 83, 63, 52, 25, 23, 45, 80, 49, 86, 23, 88, 83, 98, 59, 72, 19, 60, 47, 9, 74, 99, 76, 75, 82, 24, 66, 33, 42, 66, 50, 86, 17, 97, 69, 94, 31, 47, 35, 33, 85, 83, 59, 37, 54, 80, 67, 43, 58, 23, 17, 18, 49, 12, 37, 56, 66, 60, 97, 4, 40, 5, 99, 7, 64, 96, 15, 87, 32, 27, 6, 80, 49, 57, 55, 24, 31, 7, 31, 68, 5, 72, 81, 11, 29, 46, 8, 29, 17, 64, 6, 67, 58, 77, 18, 3, 8, 63, 61, 91, 41, 53, 69, 93, 26, 98, 58, 98, 77, 7, 51, 55, 97, 53, 79, 14, 36, 49, 38, 4, 91, 85, 62, 50, 7, 70, 24, 56, 51, 62, 49, 60, 66, 17, 18, 45, 60, 6, 66, 23, 40, 23, 34, 28, 80, 16, 76, 61, 64, 69, 28, 29, 6, 27, 51, 95, 70, 37, 1, 37, 74, 33, 26, 81, 18, 30, 67, 57, 39, 77, 73, 74, 41, 77, 81, 12, 23, 97, 6, 99, 49, 18, 85, 50, 40, 100, 98, 5, 1, 91, 75, 6, 47, 8, 59, 7, 47, 57, 79, 5, 93, 56, 70, 8, 51, 4, 27, 2, 52, 43, 65, 3, 88, 70, 5, 88, 36, 2, 8, 0, 10, 49, 94, 22, 65, 3, 45, 71, 92, 100, 47, 58, 96, 31, 25, 80, 25, 76, 99, 99, 34, 18, 17, 49, 38, 27, 99, 88, 13, 80, 13, 42, 51, 6, 19, 42, 35, 0, 87, 65, 1, 10, 21, 26, 3, 31, 30, 4, 30, 58, 98, 36, 93, 89, 97, 49, 60, 15, 77, 77, 30, 45, 72, 34, 55, 56, 68, 78, 25, 3, 73, 79, 78, 89, 57, 87, 47, 27, 35, 28, 12, 49, 53, 64, 75, 90, 54, 9, 24, 17, 29, 46, 28, 20, 65, 54, 70, 74, 45, 67, 46, 8, 52, 50, 66, 72, 96, 68, 95, 20, 67, 96, 88, 80, 19, 4, 62, 29, 83, 89, 17, 87, 100, 50, 63, 34, 22, 70, 97, 11, 45, 6, 31, 41, 62, 19, 64, 8, 76, 85, 29, 39, 57, 5, 5, 93, 60, 82, 72, 91, 87, 45, 0, 81, 81, 58, 55, 67, 31, 5, 21, 87, 75, 71, 28, 59, 99, 10, 21, 59, 81, 71, 76, 21, 18, 10, 68, 20, 79, 63, 81, 29, 60, 0, 98, 53, 38, 1, 92, 75, 92, 8, 71, 54, 99, 70, 46, 0, 54, 30, 31, 43, 55, 92, 3, 58, 93, 32, 91, 4, 57, 93, 52, 66, 0, 38, 32, 10, 34, 49, 63, 16, 76, 48, 20, 82, 36, 63, 17, 29, 55, 68, 71, 46, 41, 60, 98, 59, 0, 83, 97, 59, 23, 75, 100, 54, 43, 50, 55, 9, 78, 98, 3, 53, 65, 86, 69, 86, 13, 71, 46, 4, 97, 100, 20, 22, 18, 66, 42, 46, 78, 36, 51, 34, 95, 99, 75, 50, 7, 93, 97, 24, 83, 55, 63, 95, 25, 11, 39, 67, 34, 39, 29, 70, 14, 19, 81, 61, 19, 86, 96, 91, 33, 37, 80, 60, 82, 97, 100, 86, 61, 30, 79, 77, 76, 44, 25, 8, 100, 20, 70, 61, 93, 23, 0, 44, 35, 40, 83, 1, 30, 85, 79, 33, 34, 82, 63, 5, 63, 67, 86, 69, 94, 14, 26, 51, 68, 79, 6, 9, 73, 96, 88, 36, 55, 13, 76, 52, 39, 95, 54, 41, 38, 11, 39, 65, 81, 68, 25, 77, 42, 16, 10, 12, 48, 4, 72, 30, 55, 75, 64, 6, 92, 36, 62, 26, 7, 54, 77, 51, 16, 74, 81, 67, 74, 85, 72, 80, 96, 20, 37, 52, 44, 68, 59, 55, 93, 96, 41, 62, 96, 67, 28, 7, 82, 8, 88, 84, 38, 43, 8, 74, 16, 17, 43, 43, 93, 25, 0, 17, 21, 34, 24, 17, 46, 52, 63, 62, 26, 40, 30, 88, 7, 23, 0, 70, 98, 2, 45, 13, 43, 70, 21, 77, 84, 51, 65, 54, 4, 32, 99, 20, 100, 66, 34, 36, 27, 56, 90, 16, 59, 38, 78, 14, 35, 56, 23, 68, 96, 35, 12, 29, 61, 94, 74, 64, 24, 41, 100, 84, 94, 64, 94, 98, 67, 78, 25, 45, 11, 80, 2, 92, 99, 10, 41, 85, 83, 29, 45, 100, 5, 92, 31, 57, 21, 49, 62, 19, 62, 45, 6, 69, 27, 81, 47, 24, 76, 64, 27, 75, 56, 21, 23, 42, 36, 67, 23, 51, 64, 73, 45, 47, 7, 56, 14, 97, 33, 32, 32, 81, 48, 15, 24, 8, 23, 37, 8, 39, 40, 43, 13, 89, 73, 87, 60, 3, 12, 69, 25, 24, 52, 6, 43, 76, 97, 81, 40, 58, 54, 20, 31, 3, 31, 32, 12, 10, 25, 7, 13, 73, 71, 40, 13, 66, 49, 66, 85, 83, 79, 25, 33, 89, 3, 62, 58, 48, 14, 30, 92, 49, 76, 96, 31, 59, 71, 86, 46, 6, 60, 68, 92, 46, 2, 8, 3, 2, 83, 57, 40, 8, 62, 25, 44, 53, 19, 18, 19, 5, 82, 89, 50, 20, 51, 35, 8, 10, 66, 63, 92, 17, 33, 83, 77, 51, 30, 86, 97, 88, 81, 89, 30, 93, 70, 7, 81, 13, 46, 49, 3, 78, 34, 98, 38, 59, 60, 43, 28, 71, 80, 92, 31, 25, 95, 14, 95, 91, 39, 33, 27, 32, 44, 38, 15, 71, 97, 68, 88, 71, 46, 4, 32, 69, 13, 99, 82, 75, 77, 99, 97, 17, 55, 83, 57, 65, 67, 22, 42, 100, 9, 89, 42, 1, 28, 78, 57, 5, 97, 39, 62, 17, 80, 12, 70, 45, 66, 68, 29]
  , 160)

threeSumMulti([0, 0, 0], 0)

