// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// !Slower
// const peakIndexInMountainArray = arr => {
//   for (let i = 1; i < arr.length - 1; i++) if (arr[i] > arr[i + 1]) return i
// }


const peakIndexInMountainArray = arr => {
  return arr.indexOf(Math.max(...arr));
}
