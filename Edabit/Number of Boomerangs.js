// https://edabit.com/challenge/b7iHQDw72zzkmgCun

const countBoomerangs = arr => {
  if (arr.length < 3) return 0;
  let count = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i -1] === arr[i + 1] && arr[i] !== arr[i + 1]) count++;
  }
  return count;
}