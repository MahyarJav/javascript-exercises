const palindromes = function (str) {
    return str.toLowerCase().replace(/\W/g, "") === str.toLowerCase().replace(/\W/g, "").split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
