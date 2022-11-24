/**
 * Simplpe console calculator function.
 * @param a - 1st number.
 * @param b - 2nd number.
 * @param c - Operator.
 * @returns - The result of the operation.
 */
function calc(a: number, b: number, c: string): number {
  let result: number = 0;
  if (c === "+") {
    result = a + b;
  } else if (c == "-") {
    result = a - b;
  } else if (c == "*") {
    result = a * b;
  } else if (c == "/") {
    result = a / b;
  }
  return result;
}

console.log("2+4=" + calc(2, 4, "+"));
console.log("2-4=" + calc(2, 4, "-"));
console.log("2*4=" + calc(2, 4, "*"));
console.log("2/4=" + calc(2, 4, "/"));
