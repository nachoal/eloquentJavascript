/* BEAN COUNTING
 Write a function countBs that takes a string and returns a number that indicates
 how many uppercase B characters there are in the string

 Next write a function called countChar that behaves like countBs except it
 takes a second argument that indicates the character that is to be counted
 rather than counting only uppercase "B" characters rewrite count Bs to make
 use of this new function.
*/

const countChar = (string, char) => {
  const stringArray = [...string];

  return stringArray.reduce((accumulator, element) => {
    if (element === char) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
};

const countBs = (string) => countChar(string, 'B');

countBs('BaBasbotsB');
