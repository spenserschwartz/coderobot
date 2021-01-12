// https://edabit.com/challenge/7vowiHDR5oYksAjqQ

const maxPossible = (n1, n2) => {
  n2 = n2.toString().split('').sort((a,b) => b - a);
  
  n1 = n1.toString().split('')

  let j = 0;

  for (let i = 0; i < n1.length; i++) {
    if (n1[i] < n2[j]) {
      n1[i] = n2[j];
      j++;
    }
  }
  return Number(n1.join(''));
}

console.log(maxPossible(18, 475))