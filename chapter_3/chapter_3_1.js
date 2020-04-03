/* MINIMUM
  Write a function min that takes two arguments and returns their minimum
*/

// First way of writing a function
// function min(a, b) {
//   if (a > b) return b;
//   else return a;
// }

// Second way of writing a function
// const min = function(a, b) {
//   if (a > b) return b;
//   else return a;
// };

// Third way of writing a function
const min = (a, b) => {
  if (a > b) return b;

  return a;
};

min(2, 10);
