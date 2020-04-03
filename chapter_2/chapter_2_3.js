/*
CHESSBOARD
Write a program that creates a string that represents an 8x8 grid
using newline characters for separate lines.
At each position of the grid there is either a space or a # character.
The characters should form a chessboard.
Passing this string to console.log should show something like this:
-------------------------
 # # # #
# # # # #
 # # # #
# # # # #
 # # # #
# # # # #
 # # # #
# # # # #
-------------------------
*/
function rowBuilder(rowSize, rowIndex) {
  const black = "⬛";
  const white = "⬜";
  let row = "";
  for (let charIndex = 0; charIndex < rowSize; charIndex += 1) {
    if (row.charAt(row.length - 1) === "") {
      rowIndex % 2 === 0 ? (row += white) : (row += black);
    } else if (row.charAt(row.length - 1) === white) {
      row += black;
    } else if (row.charAt(row.length - 1) === black) {
      row += white;
    }
  }
  console.log(row);
}
function columnBuilder(columnSize) {
  for (let columnIndex = 0; columnIndex < columnSize; columnIndex += 1) {
    rowBuilder(8, columnIndex);
  }
}
columnBuilder(8);
