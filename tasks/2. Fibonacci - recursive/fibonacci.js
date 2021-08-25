export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  // Fibonacci = Fn-1 + Fn-2
  //Basecase
  var fib = [];
  for (let i = 0; i < n; i++) {
    fib[i] = getFibonacciNumber(i);
  }
  return fib;
}

function getFibonacciNumber(n) {
  if (n <= 1) return n;
  else return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}
