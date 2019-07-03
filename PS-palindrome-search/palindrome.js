export function findSecondBiggestPalindrome(input) {
    const len = input.length;

    if (len === 0) return 'No Palindrome exists';
    if (len === 1) return 'No Second Palindrome exists';

    const map = {};

    const currPart = [];
    allPartitions(map, currPart, 0, len, input);
    const lens = Object.keys(map);
    if (lens.length === 1) return 'No Second Palindrome exists';
    return `Found Palindrome: ${map[lens[lens.length-2]][0]}`;

}

function allPartitions(map, currPart, start, len, input) {
    // If 'start' has reached len
    if (start >= len) {
        currPart.forEach((cur) => {
            if (map.hasOwnProperty(cur.length))
                map[cur.length].push(cur);
            else
                map[cur.length] = [cur]
        });
        return;
    }
    for (let i = start; i < len; i++) {
        if (isPalindrome(input, start, i)) {
            currPart.push(input.substring(start, i + 1));
            allPartitions(map, currPart, i + 1, len, input);
            currPart.pop();
        }
    }
}

function isPalindrome(input, start, i) {
    while (start < i) {
        if (input.charAt(start++) !== input.charAt(i--))
            return false;
    }
    return true;
}