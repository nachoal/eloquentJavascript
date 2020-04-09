/* eslint-disable no-console */
/*
  EVERYTHING
  Analogous to the some method, arrays also have an every method.
  This one returns true when the given function returns true for every element in the array.
  In a way, some is a version of the || operator that acts on arrays,
  And every is like the && operator.
  Implement every as a function that takes an array and a predicate function as parameters.
  Write two versions, one using a loop and one using the some method.

  function every(array, test) {
    // Your code here.
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
*/

const everyWithLoop = (array, test) => {
  let result = null;
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index] || null;

      result = test(element);
      if (!result) {
        index = array.length + 1;
      }
    }
  } else {
    result = test(null);
  }

  return result;
};

const everyWithSome = (array, test) => !array.some((element) => !test(element));

console.log('everyWithLoop:');

console.log(everyWithLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyWithLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyWithLoop([], (n) => n < 10));
// → true

console.log('everyWithSome:');

console.log(everyWithSome([1, 3, 5], (n) => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], (n) => n < 10));
// → false
console.log(everyWithSome([], (n) => n < 10));
// → true
