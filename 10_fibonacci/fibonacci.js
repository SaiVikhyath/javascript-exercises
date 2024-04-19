const fibonacci = function(number) {

    if (number < 0) {
        return "OOPS"
    }
    
    if (number == 0) {
        return 0;
    }

    if (number == 1 || number == 2) {
        return 1;
    }

    let number1 = 1;
    let number2 = 1;

    let idx = 2;

    do {
        let temp = number1 + number2;
        number1 = number2;
        number2 = temp;
        idx = idx + 1;
    } while(idx != number);

    return number2;

};

// Do not edit below this line
module.exports = fibonacci;
