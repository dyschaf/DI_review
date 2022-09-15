// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate",
// and your favorite meal of the day is "dinner",
// you will console.log
// I eat chocolate at every dinner
const favorite_food = "pizza";
const favorite_meal = "lunch";
console.log(`I eat ${favorite_food} at every ${favorite_meal} `);

// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log(
  `I watch ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
);
myWatchedSeries.splice(2, 1, "Freinds");
console.log(myWatchedSeries);
myWatchedSeries.splice(3, 0, "Prison Break");
console.log(myWatchedSeries);
myWatchedSeries.splice(0, 0, "24");
console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1);
// myWatchedSeries.splice(3, 0, "Prison Break");
console.log(myWatchedSeries);
console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);
// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
let celsius = 0;
let fahrenheit = (celsius / 5) * 9 + 32;
