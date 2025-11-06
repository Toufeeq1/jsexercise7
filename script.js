//@ts-check

// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. // TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers


/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
let multiply = (num1, num2, num3) => num1 * num2 * num3;

multiply(1,2,3)

/**
 * @param {number} minutes
 * @return {number}
 */
let convertToSeconds = (minutes) => minutes * 60;

console.log(convertToSeconds(1))

/**
 * @param {number} temperature
 * @return {number}
 */
let fahrenheitToCelsius = (temperature) => (temperature - 32) * (5 / 9);

console.log(fahrenheitToCelsius(100))

/**
 * @param {string} strings
 * @return {string}
 */
let reverseString = (strings) => strings.split("").reverse().join("");

console.log(reverseString("Javascript"))

/**
 * @param {string} string
 * @return {number} 
 */
let countVowels = (string) => {
    let count = 0
    let stringLowerCase = string.toLowerCase()
    let stringList = stringLowerCase.split("")
    for (let item in stringList){
        if (stringList[item] === "a" || stringList[item] === "e" || stringList[item] === "i" || stringList[item] === "o" || stringList[item] === "u"){
            count++
        }
    }
    return count
};

console.log(countVowels("Javascript"))


/**
 * @param {number} number
 * @return {boolean}
 */
let isPrime = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(1))
