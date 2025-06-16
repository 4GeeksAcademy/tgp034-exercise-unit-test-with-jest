// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//1 euro = 1.07 dollar
const fromEuroToDollar = (euro) => {
    return euro*1.07;
}

//1 dollar = 146,261682 yen
const fromDollarToYen = (dollar) => {
    return dollar/1.07*156.5;
}

//1000 yen = 5,5591054332 pound
const fromYenToPound = (yen) =>{
    return yen/156.5*0.87;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };