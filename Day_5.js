// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P A H N A P L S I I G Y I R
// nd then read line by line: "PAHNAPLSIIGYIR" Write the code that will take a string and make this conversion given a number of rows: string convert(string s, int numRows); Example 1: Input: s = "PAYPALISHIRING", numRows = 3 Output: "PAHNAPLSIIGYIR" Example 2: Input: s = "PAYPALISHIRING", numRows = 4 Output: "PINALSIGYAHRPI" Explanation: P I N A L S I G Y A H R P I Example 3: Input: s = "A", numRows = 1 Output: "A" Constraints: 1 <= s.length <= 1000 s consists of English letters (lower-case and upper-case), ',' and '.'. 1 <= numRows <= 1000
var convert = function (s, numRows) {

    // Edge case
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create rows
    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {

        rows[currentRow] += char;

        // Change direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move row pointer
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows
    return rows.join("");
};

console.log(convert("PAYPALISHIRING"))