const reverseString = function(string) {
    let result = "";
    for (let i = string.length; i >= 0; i--) {
        result = result.concat(string.charAt(i));
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
