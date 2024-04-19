const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    string = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    let start = 0;
    let end = string.length - 1;

    while (start <= end) {
        if (string[start] != string[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
