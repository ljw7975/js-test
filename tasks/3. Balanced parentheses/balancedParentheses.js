export function areParenthesesBalanced(inputString) {
  // TODO: write your code here

  /* 
    To be a balancedParentheses
    // Ignore characters other than parenthesis
    // left parenthesis >= right parenthesis
    // at the end, number of left and right parentheses must be equal
  */
  //Basecase
  if (inputString == null || inputString.length < 2) return false;
  if (inputString.indexOf("(") == -1 && inputString.indexOf(")") == 1) return false;

  //Initializing
  let result = true;
  let leftParentheses = 0;
  let rightParentheses = 0;
  let iterator = 0;

  while (leftParentheses >= rightParentheses || iterator < inputString.length) {
    if (inputString.charAt(iterator) == '(') {
      leftParentheses++;
    } else if (inputString.charAt(iterator) == ')') {
      rightParentheses++;
    }
  }

  if (leftParentheses !== rightParentheses) result = false;
  return result;
}