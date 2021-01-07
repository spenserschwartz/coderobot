// https://edabit.com/challenge/tkcK3M5kaDHozTZPx

// NO 'IF' STATEMENTS

// ! Ternary
// const swap = (a,b,c) => {
//   return a === c ? b : a;
// }

const swap = (a,b,c) => {
  const arr = [a, b, c];

  let sum = a + b - c;
  return arr[arr.indexOf(sum)];
}

console.log(swap(27, 31, 31))