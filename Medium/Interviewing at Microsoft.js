// https://medium.com/javascript-in-plain-english/microsoft-online-assessment-questions-js-f68ecdb6e927


// ! Brute Force
const noTripleLetters = s => {
  if (s.length < 3) return s;

  let newString = s[0] + s[1];
  for (let i = 2; i < s.length; i += 1) {
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) continue;
    else newString += s[i];
  }
  return newString;
}


let s = 'eedaaaad';
console.log(noTripleLetters(s));