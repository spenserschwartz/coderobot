


const sortByText = objectsArray => {
  const textContentArray = [];
  let numObjects = 0;
  let sumText = 0;

  for (let object of objectsArray) {
    const textContent = object.textContent
    textContentArray.push(textContent);
    sumText += textContent.length;
    numObjects ++;
  }

  let meanLength = sumText / numObjects;
  console.log(meanLength);

  textContentArray.sort((a,b) => Math.abs(a.length - meanLength) - Math.abs(b.length - meanLength))
  return textContentArray;
}


//console.log(productDetails([{textContent: 'abcd'}, {textContent: 'abb'}, {textContent: 'abcd'},{textContent: 'ab'}]))


const sortByReview = (objectsArray, option) => {
  if (option === 'descending') {
    return objectsArray.sort((a,b) => b.starRating - a.starRating);
  } else if (option === 'ascending') return objectsArray.sort((a,b) => a.starRating - b.starRating);
}

const details = [
  { textContent: "123456789", starRating: 1 },
  { textContent: "123", starRating: 5 },
  { textContent: "12345", starRating: 3 },
  { textContent: "123456789", starRating: 2 },
];

console.log(sortByReview(details, 'ascending'))