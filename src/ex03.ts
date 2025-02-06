// Create a function called combine that can accept two numbers OR two strings.
// Use function overloading to define two versions of this function.
// If two numbers are passed, return their sum.
// If two strings are passed, return their concatenated (combined) value.

function combine(a: number, b: number): number;
function combine(a: string, b: string): number;
function combine(a: any, b: any): any {
  return a + b
}

console.log(combine(10, 20));      // Expected output: 30
console.log(combine("Hello, ", "World!")); // Expected output: Hello, World!