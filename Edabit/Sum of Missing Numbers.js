// https://edabit.com/challenge/257hD8dzvsyR4G839

const sumMissingNumbers = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let arrSum = 0;
  for (let i = min; i <= max; i++) arrSum += i;

  return arrSum - arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumMissingNumbers([4,3,8,1,2]))