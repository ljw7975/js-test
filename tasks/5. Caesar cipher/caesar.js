export function encryptCaesar(inputString, key) {
  // TODO: write your code here
  /**
   Implement a function **that takes a string** and a **numeric key**, and 
   **returns the caesar encrypted** version of that string **shifting** the 
   **english ABC** with the key. No whitespaces only **consecutive letters** in mind.
   */
  //Basecase
  if (inputString.length == 0) return inputString;

  // Initialize
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const initialAlphabet = inputString.charCodeAt(i);
    let rotated = String.fromCharCode(rotateAlphabet(initialAlphabet, key));
    result = result.concat(rotated);
  }
  return result;
}

//charcode of Captial alphabet is from 65 to 90 inclusive
function rotateAlphabet(charCode, key) {
  let code = charCode + key;
  if (code <= 90) return code;
  else {
    return (code % 90) + 64;
  }
}
