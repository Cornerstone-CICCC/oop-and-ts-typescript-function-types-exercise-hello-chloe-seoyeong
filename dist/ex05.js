"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(...numArr) {
    let sum = 0;
    numArr.forEach(number => {
        sum += number;
    });
    return sum;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
