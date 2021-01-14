// https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

const ascDesNone = (arr, str) => {
  if (str === 'Asc') return arr.sort((a,b) => a - b)
  else if (str === 'Des') return arr.sort((a,b) => b - a)
  else return arr;
}