/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = []
    var xstring = x.toString()
    if (xstring.charAt(0) == "-"){
        result.push("-")
    }
    for (var i = xstring.length-1; i >=0; i--){
        if (xstring.charAt(i) == "-"){
            break
        }
        result.push(xstring.charAt(i))
        console.log(i)
    }
    console.log(result.join(""))
    outpu
    return result.join("")
};