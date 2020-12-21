// https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

const isRepdigit = num => {
  if (num === 0) return true;
  
  let string = num.toString();
  return string[0] === string[1];
}

const num = 77;
console.log(isRepdigit(num));