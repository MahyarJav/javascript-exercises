const removeFromArray = function (arr, ...rem) {
    let finalArr = [];

    arr.forEach(item => !rem.includes(item) && finalArr.push(item))
    return finalArr
}


// Do not edit below this line
module.exports = removeFromArray;
