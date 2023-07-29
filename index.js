const MochaMulti = require("mocha-multi");


function isPalindrome(word) {
if (word === word.split("").reverse().join("")){
  return true
} else{
  return false
}
}

/* 
  Add your pseudocode here

  Reverse the string
  if the reversed string is equal to the input string
  return true
  else return
  false
*/

/*
  Add written explanation of your solution here
  When on inputs the word, mom, or abba, when the string is reversed, 
  it should read the same.
  If one inputs the word 'laptop' it should return false
  since laptop reversed is 'potpal'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
