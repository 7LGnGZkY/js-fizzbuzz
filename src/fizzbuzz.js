// TODO: Write your function in this file
function fizzBuzz(lower, upper) {
    const numbers = [];

    for (let i = lower; i <= upper; i++) {
        if ((i % 3 === 0) && (i % 5 === 0))
        numbers.push('FizzBuzz')
        else if (i % 3 === 0)
        numbers.push('Fizz')
        else if (i % 5 === 0)
        numbers.push('Buzz')
        else
        numbers.push(i)
    }
     return numbers;   
}

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz