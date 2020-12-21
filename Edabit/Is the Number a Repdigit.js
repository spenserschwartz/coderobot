// https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

const isRepdigit = num => {
  let string = num.toString();
  if (string.length === 1) return true;
  return string[0] === string[1];
}

const num = 77;
console.log(isRepdigit(num));