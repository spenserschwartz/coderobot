// https://edabit.com/challenge/AP4hnF97anRc2mAZ6

const keysAndValues = obj => {
  return [Object.keys(obj), Object.values(obj)]
}

const input = { a: 1, b: 2, c: 3 };
console.log(keysAndValues(input));