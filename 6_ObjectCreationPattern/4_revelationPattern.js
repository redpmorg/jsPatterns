//it is about having private methods, which you also expose as public methods

// SAME AS REVEAL MODULE PATTERN /6_ObjectCreatinPattern/5_module.js

var myarray;
(function() {
    var astr = "[object Array]", // ??
        toString = Object.prototype.toString;

    function isArray(a) { // :)))
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;
        for (; i < max; i += 1) {
            if (haystack[i] === needle) {
                return i;
            }
        }
        return -1;
    }

    //expose here
    myarray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    };
}());

console.log(myarray.isArray([1, 2])); // true
console.log(myarray.isArray({
    0: 1
})); // false
console.log(myarray.indexOf(["a", "b", "z"], "z")); // 2
console.log(["a", "b", "z"].indexOf("z")); // 2; Not working in IE < 9
