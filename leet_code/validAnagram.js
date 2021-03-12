/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var letters = s.split("")
    if(s.length !=t.length){
        return false
    }
    let sortedS = s.split('').sort().toString()
    let sortedT = t.split('').sort().toString()
    return sortedT === sortedS
    
    
};