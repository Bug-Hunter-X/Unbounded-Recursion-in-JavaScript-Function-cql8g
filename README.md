# Unbounded Recursion Bug in JavaScript

This repository demonstrates a common coding error in JavaScript: unbounded recursion. The `foo` function recursively calls itself without a proper base case for large inputs, leading to a stack overflow error.  The solution shows how to modify the function to add appropriate base cases, preventing the error.