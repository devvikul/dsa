// 22. Generate Parentheses
// Medium
// Topics
// premium lock icon
// Companies
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

var generateParenthesis = function(n) {

    let result = [];

    function backtrack(current, open, close) {

        // Base case
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add opening bracket
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Add closing bracket
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};

console.log(generateParenthesis(2))