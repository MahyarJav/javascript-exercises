const findTheOldest = function (arr) {
    let oldest = [];
    let newArr = arr
        .map(items => { return [items.name, (items.yearOfDeath ? items.yearOfDeath : new Date().getFullYear()) - items.yearOfBirth] })
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][1] > oldest[1] || oldest.length === 0) {
            oldest = newArr[i];
        }

    }
    return { "name": oldest[0] }
};

// Do not edit below this line
module.exports = findTheOldest;
