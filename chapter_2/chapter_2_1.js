/*
LOOPING A TRIANGLE
Write a loop that makes seven calls to console.log to output
the following triangle: 
-------------------------
#
##
###
####
#####
######
#######
-------------------------
*/
pyramid = "#";
PyramidBase = 7;

for (let index = 0; index < PyramidBase; index++) {
  console.log(pyramid);
  pyramid += "#";
}
