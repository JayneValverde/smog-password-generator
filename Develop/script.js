// special characters 
var specialCharacters = ['!','#','$','%','(',')','*','+','-',':',';','<','>','?','@','[','/','{','}','|','`~'];
// numeric characters 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// lowercase characters 
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// uppercase characters
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Funciton to generate password with user input
function generatePassword() {
  var lengthPassword = parseInt(prompt("Whats the length of password?"));
  console.log(lengthPassword);
    if(lengthPassword < 8) {
      alert("choose number greater than 8");
    }
    if(lengthPassword > 128) {
      alert("choose number less than 128");
    }
    
  var hasSpecial = confirm("Do you want special characters to be included?");
  console.log(hasSpecial);

  var hasNumbers = confirm("Do you want numerical values to be included?");
  console.log(hasNumbers);

  var hasLowercase = confirm("Do you want to include lowercase characters?");
  console.log(hasLowercase);

  var hasUppercase = confirm("Do you want to include uppercased characters?");
  console.log(hasUppercase);


// FOR LOOP -------------------------------
for(let index = 0; index < Array.length; index++) {
  const element = Array[index];
}

  var pool =[]
  var password = [];


  if (hasSpecial === true) {
    for (let i = 0; i < lengthPassword; i++) {
      var randomIndex = getRandom(specialCharacters);
      var randomChar = specialCharacters[randomIndex];
      pool.push(randomChar)
    }
  }

  if (hasNumbers === true) {
    for (let i = 0; i < lengthPassword; i++) {
      var randomIndex = getRandom(numericCharacters);
      var randomChar = numericCharacters[randomIndex];
      pool.push(randomChar)
    }
  }

  if (hasLowercase === true) {
    for (let i = 0; i < lengthPassword; i++) {
      var randomIndex = getRandom(lowerCasedCharacters);
      var randomChar = lowerCasedCharacters[randomIndex];
      pool.push(randomChar)
    }
  }

  if (hasUppercase === true) {
    for (let i = 0; i < lengthPassword; i++) {
      var randomIndex = getRandom(upperCasedCharacters);
      var randomChar = upperCasedCharacters[randomIndex];
      pool.push(randomChar)
    }
  }  

  for (let i = 0; i < lengthPassword; i++) {
    var randomIndex = getRandom(pool);
    var randomChar = pool[randomIndex];
    password.push(randomChar)
  } 
    
  return password.join("");  
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);