const getNthFib = (n) => {
  const lastTwo = [0, 1]; // Hardcode the values of 0 and 1
  let counter = 2;  // Counter for Fibonacci
  let currFib; // declare global value of currFib
  if (n < 2) return lastTwo[n]; // Edge case for 0 and 1 of Fib

  while (counter <= n) {
    currFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = currFib;
    counter += 1;
  }
  return currFib;
}

console.log(getNthFib(6));