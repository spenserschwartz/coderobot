// https://edabit.com/challenge/6k2QepzApP5zHejWE

const productEqualTarget = (arr, target) => {
  return arr.map(el => {
    let count = 0;
    while (target % el === 0) {
      target /= el;
      count++;
    }
    return count;
  })
}

console.log(productEqualTarget([2, 3, 5], 720))