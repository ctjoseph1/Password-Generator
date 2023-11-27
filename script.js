/* PSEUDO CODE
Generate a password when the button is clicked = Function option
Present a series of promps for password criteria which is:

>Length of password (At least 8 characters but no more than 128)- I would prompt the user to select how long they want their password to be?
> Character types (probably true/false statements for these):
Need the user to select at least 1 of the below ()
  -Lowercase I would prompt the user to decide if they want this (Yes/No option)
  -Uppercase I would prompt the user to decide if they want this (Yes/No option)
  -Numeric I would prompt the user to decide if they want this (Yes/No option)

else if none of them are selected, add 'you need at least one character type' prompt message
   then loop them back to the beggining if they've not selected on of the required option
  
   Once all options are selected/ 'success' in the above criteria, password will be generated
   
*/ 


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];



// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let userResponse = prompt('How long should your password be? (Please put a number between 8 and 128)')
  userResponse = parseInt(userResponse); //parseInt is used in Java for converting a string value to an integer by using the method parseInt()
  console.log(userResponse) 
  if (!userResponse) {
  console.log('it is not a number') //can replace console.log with alert so it appears in the UI
  }
 else if (userResponse >= 8 && userResponse <= 128) {
  //ask question below
  console.log('success')
  
  } else {
  console.log('is not a number between range') 

  } return userResponse


}

/* Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length)
}
*/ 


// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  //if statement for Ok and cancel
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// If the user confirms one of these, then they will not receive a prompt to change option: var specialCharacters, var numericCharacters, etc 