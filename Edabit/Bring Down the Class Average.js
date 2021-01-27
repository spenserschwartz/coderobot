// https://edabit.com/challenge/JemYN797Zmqj98YEt

// Take down the class average by 5%
// Return a string

const takeDownAverage = scores => {
  let sum = 0;
  let totalScores = 0;

  for (let score of scores) {
    sum += numberize(score);
    totalScores ++;
  }

  const currAvg = sum / totalScores;
  let newScore = (currAvg - 5) * (totalScores + 1) - sum;

  return `${Math.round(newScore)}%`
}

const numberize = string => {
  return parseInt(string.substring(0, string.indexOf('%')))
}


const scores = ["95%", "83%", "90%", "87%", "88%", "93%"];
console.log(takeDownAverage(scores))