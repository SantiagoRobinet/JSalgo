function fibonacci(number){
    const sumNumbers = [0,1];
    for(let i = 2; sumNumbers.length <= number; i++){
        sumNumbers.push(sumNumbers[i-2]+sumNumbers[i-1])
    }
    return sumNumbers[sumNumbers.length - 1];
}

console.log(fibonacci(10)) // 55
console.log(fibonacci(20)) // 6765
console.log(fibonacci(11)) // 89
