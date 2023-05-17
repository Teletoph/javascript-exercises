const removeFromArray = function(array, ...variables) {
    let newArray = [];
    for (let variable of variables)
    {
        for (let i = 0; i < array.length; i ++)
        {
            if (array[i] === variable)
            {
                let arr1 = array.slice(0, i);
                let arr2 =  array.slice(i + 1, array.length);
                array = arr1.concat(arr2);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
