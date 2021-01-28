// https://edabit.com/challenge/tWEsR6BY3qRFP3L8r

const strMatchBy2char = (a, b) => {
  let count = 0;

  for (let i = 0; i < Math.min(a.length, b.length) - 1; i++) {
    if (a[i] === b[i] && a[i + 1] === b[i + 1]) count++;
  }
  return count;
}