// https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe

const derivative = (b, m) => {
  return b * Math.pow(m, b - 1);
}

console.log(derivative(4, -3))