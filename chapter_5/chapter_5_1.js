/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/*
  CHAPTER 5
  Use the reduce method in combination with the concat method to “flatten”
  An array of arrays into a single array that has all the elements of the original arrays.
  let arrays = [[1, 2, 3], [4, 5], [6]];
  // Your code here.
  // → [1, 2, 3, 4, 5, 6]
*/

const flatten = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  });
};

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
