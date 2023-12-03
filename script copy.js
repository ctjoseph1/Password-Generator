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
  do {
    var userResponse = prompt('How long should your password be? (Please put a number between 8 and 128)')
    userResponse = parseInt(userResponse);

    if(!userResponse) {
      console.log('Please enter a number')
    } else if (userResponse < 8 || userResponse > 128) {
      console.log("Please put a number between 8 and 128.") 
    }
  } while (!userResponse || userResponse < 8 || userResponse > 128)


  do {
    var upperCasedCharactersResponse = confirm("include uppercase characters?")
    var lowerCasedCharactersResponse = confirm('include lower case characters?')
    var numericCharactersResponse = confirm('include numeric characters?')
    var specialCharactersResponse = confirm('include special characters?')

    console.log("What is upperCasedCharactersResponse: ", upperCasedCharactersResponse)
    console.log("What is lowerCasedCharactersResponse: ", lowerCasedCharactersResponse)
    console.log("What is numericCharactersResponse: ", numericCharactersResponse)
    console.log("What is specialCharactersResponse: ", specialCharactersResponse)

    if(!upperCasedCharactersResponse && !lowerCasedCharactersResponse && !numericCharactersResponse && !specialCharactersResponse) {
      alert("Please select ok for at least one of the character type options!")
    }

  } while (!upperCasedCharactersResponse && !lowerCasedCharactersResponse && !numericCharactersResponse && !specialCharactersResponse) 
  //&& returns true if both statements (either sideof the &&) are true.


     /* Create a conditional block that checks to see if upperCasedCharactersResponse has 
    a true value If the value is true concatenate/join two strings upperCasedCharacters array 
    to a new array so we can use a randomized character function */

  var possibleCharacters = [];

   if(upperCasedCharactersResponse) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
   }

  if(lowerCasedCharactersResponse) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  }

  if(numericCharactersResponse) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    }

  if(specialCharactersResponse) {
      possibleCharacters = possibleCharacters.concat(numericCharacters)
      }

console.log(possibleCharacters)

 Math.random()

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
//return 'password generated text'

// If the user confirms one of these, then they will not receive a prompt to change option: 
//var specialCharacters, var numericCharacters, etc 