/*
FIZZBUZZ
Write a program that uses console.log to print all the numbers from 1 to 100.
With 3 exceptions:
1. For numbers divisible by 3 print 'Fizz' instead of the number
2. For numbers divisible by 5 print 'Buzz' instead. 
3. For numbers that are divisible by both 3 and 5 print 'Fizzbuzz'
*/

let upperBound = 100;

for (let number = 1; number <= upperBound; number++) {
  if (number % 3 == 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
