/*
  A LIST

  Write a function arrayToList that builds up a list structure like
  the one shown when given [1, 2, 3] as argument.
  Also write a listToArray function that produces an array from a list.
  Then add a helper function prepend, which takes an element and a list and
  creates a new list that adds the element to the front of the input list,
  and nth, which takes a list and a number and returns the element at
  the given position in the list (with zero referring to the first element)
  or undefined when there is no such element.
*/

const arrayToList = (array) => {
  const obj = {};
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    obj.value = element;
    if (index === array.length - 1) {
      obj.rest = null;
    } else {
      obj.rest = arrayToList(array.splice(index + 1, array.length));
    }
  }
  return obj;
};

const listToArray = (list) => {
  const array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (element, list) => {
  for (let node = element; node; node = node.rest) {
    if (node.rest === null) {
      node.rest = list;
      break;
    }
  }
  return element;
};

const nth = (list, number) => {
  let result = list;

  if (list.value !== number) {
    result = nth(list.rest, number);
  }

  return result;
};
// TESTS

// const pre = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
const obj = { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } };

// const util = require("util");
// console.log(
//   util.inspect(prepend(pre, obj), { showHidden: false, depth: null })
// );

// // eslint-disable-next-line no-console
// console.log("arrayToList:", arrayToList([1, 2, 3]));

// // eslint-disable-next-line no-console
// console.log("ListToArray:", listToArray(obj));

// eslint-disable-next-line no-console
console.log("nth:", nth(obj, 4));
