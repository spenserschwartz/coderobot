// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

const concat = (...args) => {
  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      result.push(args[i][j]);
    }
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]))