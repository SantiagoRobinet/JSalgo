function palindrome(string){
    const compare = [...string.toUpperCase()].reverse().join('');
        
    if(string.toUpperCase() === compare){
        return true;
    } else {
        return false;
    } 
}


console.log(palindrome('Anna'))
