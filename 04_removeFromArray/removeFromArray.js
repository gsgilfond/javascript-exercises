const removeFromArray = function(array, ...values) {
    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
