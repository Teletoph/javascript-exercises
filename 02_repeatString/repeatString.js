const repeatString = function(string, repetition) {
    if (repetition < 0)
    {
        return "ERROR";
    }
    let response = "";
    for (let i = 0; i < repetition; i++)
    {
        response += string;
    }
    return response;
};

// Do not edit below this line
module.exports = repeatString;
