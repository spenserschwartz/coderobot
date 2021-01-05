// https://edabit.com/challenge/eCPim4XcssdZdvs32

const numInStr = arr => {
  return arr.filter(string => {
    if (string.length === 0) return;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') continue;
      if (!isNaN(string[i])) return string;
    }
  })
}

console.log(numInStr(["1a", "a", "2b", "b"]))