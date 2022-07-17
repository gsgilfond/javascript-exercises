const sumAll = function(limit1, limit2) {
    let lowerLimit = 0;
    let upperLimit = 0;
    
    if (limit1 < 0 || limit2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(limit1) || !Number.isInteger(limit2)) {
        return "ERROR";
    }

    if (limit1 < limit2) {
        lowerLimit = limit1;
        upperLimit = limit2;
    }
    else {
        lowerLimit = limit2;
        upperLimit = limit1;
    }

    let sum = 0;

    for (let i = lowerLimit; i <= upperLimit; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
