// https://edabit.com/challenge/h7c3CTDzWge6SAzKT

const postfix = expr => {
  const arr = expr.split(' ');
  const nums = [];
  const ops = [];

  arr.forEach(el => isNaN(el) ? ops.push(el) : nums.push(Number(el)))

  let result = nums[0];

  for (let i = 0; i < ops.length; i++) {
    switch(ops[i]) {
      case '+': 
        result += nums[i + 1]
        break;
      case '-':
        result -= nums[i + 1]
        break;
      case '*':
        result *= nums[i + 1]
        break;
      case '/':
        result /= nums[i + 1]
        break;
    }
  }
  return result;
}

const expr = "8 4 / 9 * 3 1 * /";
console.log(postfix(expr));