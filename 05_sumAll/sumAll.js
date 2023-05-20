const sumAll = function(x,y) {
    if (Number.isInteger(x) == false || Number.isInteger(y) == false)
    {
        return "ERROR";
    }
    if (x < 0 || y < 0)
    {
        return "ERROR";
    }
    let sum = 0;
    let a = 0;
    let b = 0;
    if (x < y)
    {
        a = x;
        b = y;
    }
    else 
    {
        a = y;
        b = x;
    }
    for (let i = a; i < b + 1; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
