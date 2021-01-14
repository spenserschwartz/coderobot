// https://www.algoexpert.io/questions/First%20Duplicate%20Value

const firstDuplicateValue = array => {
  const memo = {};

  for (let el of array) {
    if (memo[el]) return el;
    else memo[el] = true;
  }
  return -1;
}