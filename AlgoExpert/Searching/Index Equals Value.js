// https://www.algoexpert.io/questions/Index%20Equals%20Value

const indexEqualsValue = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) return i;
  }
  return -1;
}

const array = [-5, -3, 0, 3, 4, 5, 9];
console.log(indexEqualsValue(array));