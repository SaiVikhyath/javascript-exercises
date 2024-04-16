const reverseString = function(string) {
    let reverse = "";
    for(let idx = string.length - 1; idx >= 0; idx--) {
        reverse = reverse + string[idx];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
