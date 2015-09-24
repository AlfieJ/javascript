// Takes a dictionary A and returns a new dictionary B
// that is the inverse of A.
// It remaps the values to the keys, and handles the
// case where there are duplicate values in A by putting
// the duplicates in an array.
//
// var a = {a:1, b:2, c:2, d:1, e:3};
// var b = invertDictionary(a);
// b == {1:[a,d], 2:[b,c], 3:[e]}
// 
function invertDictionary(dict) {
    var newDict = {};
    for (var key in dict) {
        if (dict.hasOwnProperty(key)) {
            var value = dict[key];
            var newValue = newDict[value];
            if (newValue === undefined) {
                newDict[value] = [key];
            }
            else {
                newValue.push(key);
            }
        }
    }
    return newDict;
}
