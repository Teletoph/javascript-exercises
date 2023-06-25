const palindromes = function (string) {
    let upperCaseString = string.toUpperCase();
    let flatStr = [];
    for(let i = 0; i < upperCaseString.length; i++)
    {
        if(upperCaseString[i].toUpperCase() != upperCaseString[i].toLowerCase())
        {
            flatStr.push(upperCaseString[i]);
        }
    }
    if (flatStr.length % 2 == 0)
    {
        let arrA = flatStr.slice(0, flatStr.length / 2);
        let arrB = flatStr.slice(flatStr / 2).reverse();
        let count = 0;
        for (let i = 0; i < arrA.length; i++)
        {
            if (arrA[i] == arrB[i]) {
                count++;
            }
        }
        if (count == arrA.length)
        {
            return true;
        }
        return false;
    }
    let divide = (flatStr.length - 1) / 2;
    let arrA = flatStr.slice(0, divide);
    let arrB = flatStr.slice(divide + 1).reverse();
    let count = 0;
    for (let i = 0; i < arrA.length; i++)
    {
        if (arrA[i] == arrB[i]) {
            count++;
        }
    }
    if (count == arrA.length)
    {
        return true;
    }
    return false;
};  
// Do not edit below this line
module.exports = palindromes;
