/* 
    THE SUM OF A RANGE
    Write a range function that takes two arguments(start, end)
    and returns an array containing all the numbers from start up to
    and including end.

    Write a sum function that takes an array of numbers
    and returns the sum of these numbers Run the example program
    and see wheter it does indeed return 55.

    As a bonus assignment modify your range function 
    to take an optional third argument that indicates the "step"
    value used when building the array.

    if no step is given the lements go up by increments of one
    corresponding to the old behavior. 
    The function call range(1, 10, 2) should return
    Array(1,3,5,7,9) make sure it also works with negative step values
    so that range(5,2,-1) produces [5,4,3,2].
*/

const range = (start, end, step = null) => {
  result = [];

  if (Math.sign(step) === -1) {
    for (; start >= end; step ? (start += step) : (start += -1)) {
      result.push(start);
    }
  } else {
    for (; start <= end; step ? (start += step) : (start += 1)) {
      result.push(start);
    }
  }
  return result;
};

const sum = numbers => {
  let total = 0;

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    total += number;
  }

  return total;
};

console.log(sum(range(1, 10)));
