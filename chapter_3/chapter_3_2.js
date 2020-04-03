/* RECURSION
  % (modulo/reminder) can be used to test wheter a number is even or odd
  by using % 2 to see if its divisible by 2.

  Here's another way to define if a number is even or odd:
  1. Zero is even
  2. One is odd
  3. For any number defined as N, that's not zero or one
  It's evenness is the same as N - 2 (until it gets to 1 or 0)

  Define a recursive function isEven corresponding to this description
  The function should accept a single paramenter (a positive whole number)
  and return a Boolean.
  Test it on 50 and 75. See how it behaves on -1. Why? can you think of a way to fix this?

*/

const isEven = (number) => {
  if (Math.sign(number) === -1) return false;

  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  return isEven(number - 2);
};

isEven(50);
