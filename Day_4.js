// Given a string s, return the longest palindromic substring in s. 

// Example 1: Input: s = "babad" 
// Output: "bab" 
// Explanation: "aba" is also a valid answer. 
// Example 2: Input: s = "cbbd" 
// Output: "bb" 
// Constraints: 1 <= s.length <= 1000 s consist of only digits and English letters.

const longestPalindrome = function(s) {

    if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    // Function to expand around center
    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length palindrome
        let len1 = expand(i, i);

        // Even length palindrome
        let len2 = expand(i, i + 1);

        let maxLen = Math.max(len1, len2);

        // Update longest palindrome
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
};

console.log(longestPalindrome("cbbd"))