function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative inputs
  } else if (a > 1000) { // Add a limit to prevent stack overflow
    return b; //Return if a is too large
  }
  return foo(a - 1, a + b);
}
//Example usage
console.log(foo(10, 5));
console.log(foo(1000,5));
console.log(foo(-10,5));