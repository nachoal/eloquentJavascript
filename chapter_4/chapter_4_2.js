/*
  Reversing an Array

  For this exercise, write two functions, reverseArray and reverseArrayInPlace.
  The first, reverseArray, takes an array as argument and produces a new array
  that has the same elements in the inverse order.
  The second, reverseArrayInPlace, does what the reverse method does:
  it modifies the array given as argument by reversing its elements.
  Neither may use the standard reverse method.
  Thinking back to the notes about side effects and pure functions in the previous chapter
  which variant do you expect to be useful in more situations? Which one runs faster?
*/

const reverseArray = (array) => {
  const reversedArray = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    const element = array[index];
    reversedArray.push(element);
  }
  return reversedArray;
};

const reverseArrayInPlace = (array) => {
  const initialLength = array.length;

  for (let index = array.length - 1; index >= 0; index -= 1) {
    const element = array[index];
    array.push(element);
  }
  array.splice(0, initialLength);

  return array;
};

// eslint-disable-next-line no-console
console.log('reverseArray:', reverseArray([1, 2, 3, 4]));

const test = [1, 2, 3, 4];
reverseArrayInPlace(test);
// eslint-disable-next-line no-console
console.log('reverseArrayInPlace:', test);
