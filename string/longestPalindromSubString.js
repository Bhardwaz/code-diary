function longestPalindrome(s) {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    // Helper function to expand around the center and return the length of the palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    }

    for (let i = 0; i < s.length; i++) {
        // Expand around a single character (odd-length palindrome)
        let len1 = expandAroundCenter(i, i);
        // Expand around two consecutive characters (even-length palindrome)
        let len2 = expandAroundCenter(i, i + 1);
        // Find the longer palindrome length
        let len = Math.max(len1, len2);

        // Update the start and end positions if the current palindrome is longer
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Extract and return the longest palindromic substring
    return s.substring(start, end + 1);
}

// Example usage 
const input = "babad";
//console.log(longestPalindrome(input)); // Output can be "bab" or "aba"



// Given an array
// make changes in such a way that ->
// a0<=a1>=a2<=a3>=a4<=a5>=a6......

// Time complexity should be O(n)
// and no extra space should be used

// 1,7,2,6,3,5,4





