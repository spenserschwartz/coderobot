// https://edabit.com/challenge/vHvu4Wis8RhmQbwXm

const additivePersistence = (n, count = 1) => {
  let sum = 0;

  while (n > 0) {
    const int = n % 10;
    sum += int;
    n = Math.floor(n / 10)
  }

  return sum < 10 ? count : additivePersistence(sum, count + 1)
}

console.log(additivePersistence(1679583));



const multiplicativePersistence = (n, count = 1) => {
  let product = 1;
  while (n > 0) {
    let int = n % 10;
    product *= int;
    n = Math.floor(n / 10);
  }

  return product < 10 ? count : multiplicativePersistence(product, count + 1);
}

console.log(multiplicativePersistence(123456));