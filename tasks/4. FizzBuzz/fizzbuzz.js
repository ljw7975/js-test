export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  /*
    Implement a function that **returns an array** with the **numbers from 1 to n**, 
    but for **multiples of three add 'Fizz'** instead of the number and for the 
    **multiples of five add 'Buzz'** into the array. For numbers which are multiples of 
    **both three and five** add **'FizzBuzz'**.
  */
  const fizzBuzz = [];

  for (var i = 0; i < n; i++) {
    let index = i + 1;
    if (index % 3 == 0 && index % 5 == 0) {
      fizzBuzz[i] = "FizzBuzz";
    } else if (index % 3 == 0) {
      fizzBuzz[i] = "Fizz";
    } else if (index % 5 == 0) {
      fizzBuzz[i] = "Buzz";
    } else {
      fizzBuzz[i] = index;
    }
  }
  return fizzBuzz;
}
