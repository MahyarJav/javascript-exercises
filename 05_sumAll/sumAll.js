const sumAll = function (a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    result = 0;
    if ((Number.isInteger(a) && Number.isInteger(b)) && (a >= 0 && b >= 0)) {
        for (let i = min; i <= max; i++) {
            result += i
        }
    } else { result = "ERROR" }
    return result
};

// Do not edit below this line
module.exports = sumAll;
