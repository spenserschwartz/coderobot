// https://www.algoexpert.io/questions/Array%20Of%20Products

const arrayOfProducts = array => {
  let zeroCount = 0;
  let soloZeroIndex = 0;
  const total = array.reduce((a, b, i) => {
    if (b === 0) {
      soloZeroIndex = i;
      zeroCount++;
      return a;
    }
    else return a * b;
  }, 1)

  const result = new Array(array.length).fill(0);

  if (zeroCount > 1) return result;
  if (zeroCount === 1) {
    result[soloZeroIndex] = total
    return result;
  }

  for (let i = 0; i < array.length; i++) result[i] = total / array[i];

  return result;
}

const array = [5, 1, 4, 2, 0];
console.log(arrayOfProducts(array));