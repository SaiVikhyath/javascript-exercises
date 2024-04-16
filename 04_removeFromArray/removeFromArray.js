const removeFromArray = function(array, ...args) {
    
    const result = [];

    for (const element of array) {
        if (! args.includes(element)) {
            result.push(element);
        }
    }

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
