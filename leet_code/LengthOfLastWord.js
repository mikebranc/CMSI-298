/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s === ' '){
        return 0
    }
    var trimmed = s.trim();
    console.log(trimmed);
    var wordList = trimmed.split(" ");
    var lastWord = wordList[wordList.length-1];
    var result = lastWord.length;
    return result;
};