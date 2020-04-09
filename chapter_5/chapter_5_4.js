/* eslint-disable no-restricted-syntax */
require('./scripts.js');
/*
  DOMINANT WRITING DIRECTION

  Write a function that computes the dominant writing direction in a string of text.
  Remember that each script object has a direction property that
  can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

  The dominant direction is the direction of a
  majority of the characters that have a script associated with them.
  The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/
function dominantScript(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));

    return script ? script.name : 'none';
  }).filter(({ name }) => name != 'none');
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';
  return scripts
    .map(({ name, count }) => {
      return { name, percentage: Math.round((count * 100) / total) };
    })
    .reduce((a, b) => {
      return a.percentage > b.percentage ? a : b;
    });
}

const characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
};

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

const dominantDirection = (text) => {
  const dominant = dominantScript(text);
  return SCRIPTS.reduce((a, b) => (a.name === dominant.name ? a : b)).direction;
};

console.log(dominantDirection('Hey, مساء الخير'));
// console.log(dominantDirection('Hello!'));
// // → ltr
// console.log(dominantDirection('Hey, مساء الخير'));
// // → rtl
