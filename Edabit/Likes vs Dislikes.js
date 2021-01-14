// https://edabit.com/challenge/MNKfYEKghbKjxYbzb

const likeOrDislike = arr => {
  let string = "Nothing";

  arr.forEach(word => word === string ? string = 'Nothing'
                                      : string = word
             )

  return string
}