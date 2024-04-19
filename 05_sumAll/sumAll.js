const sumAll = function(startNumber, endNumber) {

    if (typeof startNumber != "number" || typeof endNumber != "number") {
        return "ERROR";
    }

    let start = Math.min(startNumber, endNumber);
    let end = Math.max(startNumber, endNumber);

    let sum = 0;

    for(let counter = start; counter <= end; counter++) {
        if (counter < 0) {
            return "ERROR";
        }
        sum = sum + counter;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
