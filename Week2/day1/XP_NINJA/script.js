// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// Evaluate the comparisons found below:
// Look at this link for help

5 >= 1;
0 === 1;
4 <= 1;
1 != 1;
"A" > "B";
"B" < "C";
"a" > "A";
"b" < "A";
true === false;
true != true;

//     Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5

// const addString = prompt("give me a number with a comma between each number");
// const newnumber = addString.split(",");
// console.log(parseInt(newnumber[0]) + parseInt(newnumber[1]));
// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:
//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"
// const userinput = prompt("sentence containing the word “Nemo”");
// const arrayinput = userinput.toLowerCase().split(" ").indexOf("nemo");
// console.log("I found Nemo at " + arrayinput);

// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)
// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Examples
// 4 ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// 1 is lower than 2, so we return "boom"
let promtuser = parseInt(prompt("please put in a number"));
const b = "B";
const m = "m";
let outputBoom = "";
let newboom = b + outputBoom + m;
if (promtuser === !isNaN) {
  promtuser = parseInt(prompt("please put in a number"));
} else if (promtuser % 5 === 0 && promtuser % 2 === 0) {
  for (i = 0; i < promtuser; i++) {
    outputBoom = outputBoom + "o";
  }
  newboom = b + outputBoom + m + "!";
  console.log(newboom.toUpperCase());
} else if (promtuser % 5 === 0) {
  for (i = 0; i < promtuser; i++) {
    outputBoom += "o";
  }
  newboom = b + outputBoom + m + "!";
  console.log(newboom.toUpperCase());
} else if (promtuser % 2 === 0) {
  for (i = 0; i < promtuser; i++) {
    outputBoom += "o";
  }
  newboom = b + outputBoom + m;
  console.log(newboom.toUpperCase());
} else if (promtuser > 2) {
  for (i = 0; i < promtuser; i++) {
    outputBoom += "o";
    newboom = b + outputBoom + m;
  }
  console.log(newboom);
} else if (promtuser > 2) {
  console.log("boom");
}
