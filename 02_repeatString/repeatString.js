const repeatString = function (string, num) {
    let finalStr = ''
    if (num >= 0) {
        for (let i = num; i > 0; i--) {
            finalStr += string
        }
    }
    else { return 'ERROR' }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
