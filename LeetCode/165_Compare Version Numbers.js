// https://leetcode.com/problems/compare-version-numbers/

const compareVersion = (v1, v2) => {
  v1 = v1.split('.');
  v2 = v2.split('.');
  let maxLength = Math.max(v1.length, v2.length);

  while (v1.length < maxLength) v1.push('0');
  while (v2.length < maxLength) v2.push('0');
  
  v1.forEach((el, i) => {
    console.log(el);
    console.log(v2[i])
    if (el === '1') return 3;
  })
}

const version1 = "1.02", version2 = "1.001"
console.log(compareVersion(version1, version2))

// const version3 = "1.0", version4 = "1.0.0"
// console.log(compareVersion(version3, version4));