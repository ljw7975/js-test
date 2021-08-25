export function isPalindrome(inputString) {
  // TODO: write your code here
  //A **palindrome** is a word, phrase, number, or other sequence of characters which reads the **same backward as forward**, such as **madam** or **racecar**.
  //Basecase
  if (inputString == null) return false;
  if (inputString.length == 1) return true;

  //Initialization
  let result = true;
  let length = inputString.length;
  let j = length - 1;

  for (let i = 0; i < j; i++) {
    if (inputString.charAt(i) !== inputString.charAt(j)) {
      result = false;
      break;
    }
    j--;
  }
  return result;
}