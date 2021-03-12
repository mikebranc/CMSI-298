var removeVowels = function(s) {
    const s = 'little league baseball'
    const letters = [...s]
    const output = letters.filter(x => !'aeiou'.includes(x) ).join('')
    return output
};