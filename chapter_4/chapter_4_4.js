/*
  DEEP COMPARISON
  The == operator compares objects by identity.
  But sometimes you’d prefer to compare the values of their actual properties.
  Write a function deepEqual that takes two values and returns true only if
  they are the same value or are objects with the same properties,
  where the values of the properties are equal when compared with a recursive call to deepEqual.
  To find out whether values should be compared directly (use the === operator for that)
  or have their properties compared,
  You can use the typeof operator. If it produces "object" for both values,
  you should do a deep comparison.
  But you have to take one silly exception into account:
  because of a historical accident, typeof null also produces "object".
  The Object.keys function will be useful when you need to go over the
  properties of objects to compare them.
*/

const deepEqual = (obj1, obj2) => {
  let result = false;
  if (
    typeof obj1 === 'object'
    && typeof obj2 === 'object'
    && Object.keys(obj1).length === Object.keys(obj2).length
  ) {
    result = Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
  }
  return result;
};

console.log(deepEqual({ one: 1, two: 2 }, { one: 1, two: 2 }));
