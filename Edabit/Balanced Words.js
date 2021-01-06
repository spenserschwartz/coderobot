// https://edabit.com/challenge/8QTBwLzAdaM8wkrXu

const balanced = word => {
  let mid = Math.floor(word.length / 2);
  let sum = 0;
  
  for (let i = 0; i < mid; i++) {
    sum += word.charCodeAt(i);
  }

  for (let i = Math.ceil(word.length/2); i < word.length; i++) {
    sum -= word.charCodeAt(i)
  }

  return sum === 0;
}

console.log(balanced("zips"))
console.log('a'.charCodeAt(0))