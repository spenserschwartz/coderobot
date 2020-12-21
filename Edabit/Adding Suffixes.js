// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

// Example of Closure

const add_suffix = suffix => {
  return function(str) {
    return str + suffix;
  }
}