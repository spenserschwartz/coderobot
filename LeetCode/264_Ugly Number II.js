// https://leetcode.com/problems/ugly-number-ii/

const nthUglyNumber = n => {
  let multiplicationList = [2, 3, 5];
  let answers = [1];
  let i2 = 0, i3 = 0, i5 = 0;

  while (answers.length < n) {
    let m2 = answers[i2] * 2;
    let m3 = answers[i3] * 3;
    let m5 = answers[i5] * 5;
    let newAnswer = Math.min(m2, m3, m5);

    if (newAnswer === m2) i2++;
    if (newAnswer === m3) i3++;
    if (newAnswer === m5) i5++;
    
    answers.push(newAnswer);
  }
  return answers[n - 1];
}

console.log(nthUglyNumber(10));