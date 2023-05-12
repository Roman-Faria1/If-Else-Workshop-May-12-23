//Is Truthy Prompt
// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";


//funtion to hold if/else statements and pass argument through dynamicly
function isTruthy (arg1){
    //detection for true statment
    if (arg1){
        console.log(true)
    } 
    //corresponding else/if statements for the different "falsey" values
    else if (arg1 === ""){
        console.log("The empty string is falsy (the only falsy string)")
    } else if (arg1 === 0){
        console.log("The number 0 is falsy (the only falsy number)")
    } else if (arg1 === undefined){
        console.log("undefined is falsy")
    } else if (arg1 === null){
        console.log("The null value is falsy")
    } else if (arg1 === false){
        console.log("The boolean value false is falsy")
    }
}

//invoking function to pass each argument through
isTruthy("I am a string")
isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy(0)
isTruthy("")



// Number Line Prompt
// Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";


//funtion to hild if/else statements
function numSum(arg1, arg2){
    //helper variable
    let sum = arg1 + arg2
    //compare and look for negative and value
    if (sum < -1000){
        console.log(`${sum} is less than -1000.`)
        console.log(`${sum} is a negative number.`)
        //check for > 0
    } else if (sum < 0){
        console.log(`${sum} is a negative number.`)
        //check for equal to 0
    } else if (sum === 0){
        console.log(`${sum} is equal to 0.`)
        //check for greater than 100. needed to order this correctly or it would only print greater than 0
    } else if (sum > 100){
        console.log(`${sum} is greater than 100.`)
        //check for greater than 0
    } else if (sum > 0){
        console.log(`${sum} is greater than 0.`)
    } 
    
}

numSum(50,51)
numSum(99,-2)
numSum(0,101)
numSum(500,-500)
numSum(-1000,0)
numSum(-5,0)



//Greater than 5 prompt
//Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

//function to hold if/else statements
function greaterThanOrEqualTo(arg1, arg2){
    //helper variable
    let numbers = arg1 && arg2
    //check for greater than or equal to 5
    if (numbers >= 5){
        console.log(true)
    } else {
        console.log(false)
    }
}

greaterThanOrEqualTo(5,6)
greaterThanOrEqualTo(10,11)
greaterThanOrEqualTo(0,0)
greaterThanOrEqualTo(1000,-1000)
greaterThanOrEqualTo(6,4)
greaterThanOrEqualTo(5,5)



//Pair and Compare Prompt
//Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

function pairAndCompare(arg1, arg2, arg3, arg4){
    if (arg1 === arg2 || arg1 === arg3 || arg1 === arg4){
        console.log(true)
    } else if (arg2 === arg1 || arg2 === arg3 || arg2 === arg4){
        console.log(true)
    } else if (arg3 === arg1 || arg3 === arg2 || arg3 === arg4){
        console.log(true)
    } else if (arg4 === arg3 || arg4 === arg2 || arg4 === arg1){
        console.log(true)
    } else {
        console.log(false)
    }
}

pairAndCompare("cat", "cat", 6, "6")
pairAndCompare("five", 5, "dog", "dawg")
pairAndCompare(0, false, "horse", "horse")
pairAndCompare("eight", "eight", "ate", "ate")
pairAndCompare(11, "eleven", "four", "for")
pairAndCompare("cake", "cake", "pie", "pie")