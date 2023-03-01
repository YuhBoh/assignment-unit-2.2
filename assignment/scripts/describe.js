// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// assign variable "name" the value of 'Dane'
// 
// set conditional statement: if variable "name"'s value is strictly equal to that of 'Mary''s, 
//                            then log 'Hi, Mary!' into console.
// 
// else: if variable "name"'s value is NOT strictly equal to that of 'Mary''s, 
//       then Javascript will log the string 'How do you do?' into console.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// assign variable 'code' with value '123' and a variable called 'secret'.
// 
// set conditional statement: if variable 'code''s numerical value is exactly 123, 
//                            then variable 'secret' is now 'super AND
//                            'code''s value(123) is now multiplied by 2(123*2=246)
// 
// second conditional statement: if value of 'code'(246) is higher than 250, 
//                               then variable 'secret''s value is now 'duper'.
// 
// log the value of 'secret' into console. 
// Because the numerical value of 'code'(246) is NOT higher than 250, 
// the variable 'secret' will have a value of the string 'super' when logged into console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Variable 'isStudent' is assigned boolean value of 'true' 
// Variable 'age' is assigned number data of 34 
// Variable 'zip' is assigned number data of 55407
// 
// set conditional statement: if the variable 'isStudent''s boolean value is strictly equal to 'true' AND 
//                            if the variable 'zip''s number value is higher than 80000, 
//                            then Javascript will log, `You're a student on the West Coast!` into the console.
// 
//else if: given the previous conditional statement's boolean value is 'false',
//         if variable 'isStudent''s boolean value is strictly 'false' OR 
//         the numberical value of variable 'age' is less than 30,
//         the string, 'What are your hobbies?' will be logged into console.
// 
// else if: given the previous 'else if' conditional statement's boolean value is 'false',
//          if variable 'isStudent''s boolean value is strictly 'true',
//          the string, 'Welcome to Prime!' will be logged into console.
// 
// else: given the previous conditional statements' boolean value are all 'false',
//       the string, 'How about the weather?' will be logged into console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// PROBLEM #1 - variable 'colorOne' is assigned 'red' AND
//              variable 'colorTwo' is assigned 'blue
// 
// FIX #1 - assign variable 'colorOne' to 'blue' AND
//          assign variable 'colorTwo' to 'red'
// 
// PROBLEM #2 - variable 'colorTwo' is not assigned 'purple'
// 
// FIX #2 - assign variable 'colorTWO' to 'purple'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// PROBLEM - the operator '||' has a boolean value of 'or'
// 
// FIX - change operator '||' to '&&' 
//       ('&&' has a boolean value of 'and')

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
// PROBLEM #1 - the operator '<=' has a value of 'less than or equal to'
// 
// FIX #1 - change operator '<=' to '>='
//          ('>=' has a value of 'greater than or equal to')
// 
// PROBLEM #2 - the conditional statement 'else' means that 'given previous conditional statements are false/not true'
// 
// FIX #2 - delete 'else' statement and put 'console.log('enter');' into the 'if' statements code block AND
//          one line below 'console.log('no entry');'
//          (all code blocks in conditional statements are between curly brackets({}) )

let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

