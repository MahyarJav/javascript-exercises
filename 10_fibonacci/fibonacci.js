const fibonacci = function (fib) {
    let num = parseInt(fib)
    let i = 0
    let currentNum = 1;
    let prevNum = 1;
    let result = 0;
    if (num > 0) {
        do {
            result += prevNum
            prevNum = currentNum
            currentNum = result
            i++
        } while (i < num - 1)
        return currentNum
    } return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
