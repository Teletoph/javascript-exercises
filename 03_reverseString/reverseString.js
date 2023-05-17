const reverseString = function(string) {
    let arrayString = string.split("");
    let arrayReverse = [];
    for (let i = arrayString.length - 1; i > -1; i--)
    {
        arrayReverse.push(arrayString[i]);
    }
    return arrayReverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
