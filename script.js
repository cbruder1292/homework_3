// Assignment Code
var upperLet = confirm("Do you want UPPERCASE letters in your password?");
var lowerLet = confirm("Do you want lowercase letters in your password?");
var nums = confirm ("Do you want numbers in your password?");
var specChars = confirm("Do you want special characters in your password?");
var passLength  = prompt("How many characters do you want your password to contain?");

if (upperLet !== true && lowerLet !== true && nums !== true && specChars !== true) {

alert("Choose at least one character type");

}
//If you are doing multiple checks in the same if statement, then you have to use && or ||
if (passLength < 8 || passLength > 128) {

  alert("Password must be more than 7 characters and less then 129 characters");

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var Ups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];    
  var Lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var Nums = [1, 2, 3, 4, 5, 6, 7 , 8 , 9 ,0];
  var Chars =["!", "@", "#", "$", "%", "^", "&", "*"];


  //push is a function on arrays
  var master = [];

  if (upperLet === true){
    master.push(Ups); 

  }
  if (lowerLet === true){
    master.push(Lows);

  }
  if (nums === true){
    master.push(Nums);
  }
  if (specChars === true){
    master.push(Chars);
  }
//console.log(master);

var pWord = "";

  for (var i =0; i < passLength; i++){
//console.log(i);

    var arraySelect = master[Math.floor(Math.random() * master.length)];
    //console.log(arraySelect);

    var passChars = arraySelect[Math.floor(Math.random() * arraySelect.length)];
    console.log(passChars);
  
    pWord = pWord+passChars;
    console.log(pWord);
  }
  console.log(pWord);
  return pWord;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
