// Exercise 1 : Favorite Color
// Instructions
let sentence = ["my", "favorite", "color", "is", "blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
console.log(sentence.join(" "));
// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// 2. Slice out and swap the first 2 characters of the two strings from part 1.
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4. Finally console.log the new concatenated string.
let str1 = "mix";
let str2 = "pod";
console.log(str1.slice(-1));
console.log(str2.slice(-1));
// let newWord should be equal to 'pox mid'
let str = str1 + " " + str2;
console.log(str);
console.log(str.charAt(4) + str.slice(1, -3) + str.charAt(0) + str.slice(-2));

let firstWord = "Hello";
let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'
let newword2 =
  secondWord.charAt(0) +
  firstWord.slice(-4) +
  " " +
  firstWord.charAt(0) +
  secondWord.slice(-4);
console.log(newword2);

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:
// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!
let num1 = parseInt(prompt("Please enter a number", ""));
let contoler = (prompt("Please enter either + - * or /", ""));
let num2 = parseInt(prompt("Please enter a number", ""));
if (!isNaN(num1 && num2)) {
  // && contoler.includes("+" || "-" || "*" || "/"))
} else if (isNaN(num1 || num2)) {
  parseInt(prompt("It is not a number or the right symbal.", ""));
}
alert(`${num1}  ${contoler}  ${num2}`);
