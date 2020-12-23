// https://edabit.com/challenge/ujzhzyvGoASKxSAib

const chosenWine = wines => {
  if (!wines.length) return null;
  if (!wines.length === 1) return wines[0].name;

  return wines.sort((a, b) => a.price - b.price)[1].name;
}

console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]))