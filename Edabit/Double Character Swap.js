// https://edabit.com/challenge/NfBqxaDu4KoxAysWF

const doubleSwap = (str, c1, c2) => {
  const arr = [];
  let result = ''

  for (let i = 0; i < str.length; i++) {
    str[i] === c1 ? result += c2 
                  : str[i] === c2 ? result += c1 
                                  : result += str[i];
  }
  return result;
}

console.log(doubleSwap( "aabbccc", "a", "b"))