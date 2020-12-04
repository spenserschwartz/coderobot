// https://leetcode.com/problems/compare-version-numbers/

const compareVersion = (v1, v2) => {
  v1 = v1.split('.');
  v2 = v2.split('.');
  let maxLength = Math.max(v1.length, v2.length);

  while (v1.length < maxLength) v1.push('0');
  while (v2.length < maxLength) v2.push('0');

  for (let i = 0; i < v1.length; i++) {
    const num1 = parseInt(v1[i]), num2 = parseInt(v2[i]);
    if (num1 !== num2) return num1 > num2 ? 1 : -1
  }

  return 0;
}

const version1 = "1.01", version2 = "1.001"
console.log(compareVersion(version1, version2))

// const version3 = "1.0", version4 = "1.0.0"
// console.log(compareVersion(version3, version4));