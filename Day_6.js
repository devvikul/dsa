// 7. Reverse Integer
// Medium
// Topics
// premium lock icon
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function(x) {
    const sign = Math.sign(x);

    // Convert to positive, reverse digits
    let reversed = parseInt(
        Math.abs(x).toString().split('').reverse().join('')
    );

    // Apply sign back
    reversed = reversed * sign;

    // 32-bit signed integer check
    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
        return 0;
    }

    return reversed;
};

console.log(reverse("123"))