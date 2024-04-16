const repeatString = function(string, number) {
    let result = "";
    while(number > 0) {
        result = result + string;
        number = number - 1;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
