/* PSEUDO CODE
Generate a password when the button is clicked = Function option
Present a series of promps for password criteria which is:

>Length of password (At least 8 characters but no more than 128)- I would prompt the user to select how long they want their password to be?
THEN
> Character types (probably true/false statements for these):
Need the user to select at least 1 of the below (character options included in arrays)
  -Lowercase I would prompt the user to decide if they want this (Yes/No option- Boolean)
  -Uppercase I would prompt the user to decide if they want this (Yes/No option-Boolean)
  -Numeric I would prompt the user to decide if they want this (Yes/No option)

else if none of them are selected, add 'you need at least one character type' prompt message
   then loop them back to the beggining if they've not selected on of the required option
  
   Once all options are selected/ 'success' in the above criteria, password will be generated
   
>Code should validate for each input and at least one character type should be selected
prompt? somehting like 'your password will include Lowercase etc

>Once prompts are answered then the password should be generated and displayed in an alert or written to the page 
alert- 'your password has been generated below'
  -For the above, will need to code the extraction of a random element from the listed arrays
  -Will need to set a rule for password length
  -Have the password appear in the UI once all choices are selected
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
  console.log('Please enter a number') //can replace console.log with alert so it appears in the UI
  }
  else if (userResponse < 8 || userResponse > 128) { // Conditional logic to catch if a user inputs an invalid numeric range
  alert("Please put a number between 8 and 128.") // An alert to prompt the user of the valid input range
  getPasswordOptions() // After the alert we can invoke the function to start from the beginning
  }
 else if (userResponse >= 8 && userResponse <= 128) {
  console.log('success')
  //ask question below
  let upperCasedCharactersResponse = confirm("Include uppercase characters?") 
  let lowerCasedCharacters = confirm ('include lower case characters?')
  let numericCharacters = confirm ('include numeric characters?')
  let specialCharacters = confirm ('include special characters?')
  console.log("What is upperCasedCharactersResponse: ", upperCasedCharactersResponse)
  console.log("What is lowerCasedCharacters: ", lowerCasedCharacters)
  console.log("What is numericCharacters: ", numericCharacters)
  console.log("What is specialCharacters: ", specialCharacters)
//conditional statement for the above true/false values


 /*if (userResponse = upperCasedCharacters.length)
 console.log('success') << Not sure I need this */
} else {
  console.log('This number is not between range') 
 
} return userResponse

} 


// let userResponse = prompt('Do you want to include lowercase characters?')
  //let userResponse = prompt('Do you want to include Uppercase characters?')
  //let userResponse = prompt('Do you want to include Numeric characters?')
  //let userResponse = prompt('Do you want to include Special characters?')









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
  var password = generatePassword(); //length.specialCharacters ??
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
//return 'password generated text'

// If the user confirms one of these, then they will not receive a prompt to change option: var specialCharacters, var numericCharacters, etc 