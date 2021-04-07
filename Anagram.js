function anagram (stringOne, stringTwo){
    
    return [...stringOne].sort().join('').trim() === [...stringTwo].sort().join('').trim();
}

console.log(anagram('listen','silent'))
console.log(anagram('dormitory','dirty room'))
console.log(anagram('the eyes','they see'))