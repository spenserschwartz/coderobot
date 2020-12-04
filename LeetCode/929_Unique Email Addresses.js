// https://leetcode.com/problems/unique-email-addresses/


//! Brute Force 

const numUniqueEmails = emails => {
  const memo = {};
  let count = 0;

  for (let email of emails) {
    let period = /./gi;
    email = email.split('@')    //   .map(el => el.replace(/\./gi, ''));
    if (email[0].includes('+'))email[0] = email[0].substring(0, email[0].indexOf('+'));
    email[0] = email[0].replace(/\./gi, '');
    email = email.join('@');
    console.log(email);

    if (!memo[email]) {
      memo[email] = true;
      count++;
    }
  }
  return count;
}

const input = ["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]
console.log(numUniqueEmails(input));