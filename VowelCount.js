function countVowels(string){
    let counter = 0;

    for(let i = 0; i < string.length; i++ ){
        switch(string[i]){
            case 'a': 
                counter += 1;
                break;
            case 'e': 
                counter += 1;
                break;
            case 'i': 
                counter += 1;
                break;
            case 'o': 
                counter += 1;
                break;
            case 'u': 
                counter += 1;
                break;
            default:
                break;
        }
    }

    return counter;
}


console.log(countVowels('Hola Pepe'));
console.log(countVowels('This is a test that should return 9'));