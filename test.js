// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe(expected); 
})

test("One dollar should be 146.261682 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(5).toFixed(5);

    // If 1 dollar is 146,261682 yens, then 5 dollars should be (5 * 146.261682)
    const expected = (5 * 146.261682).toFixed(5); 
    
    // This is the comparison for the unit test
    expect(yens).toBe(expected);
})

test("One thousand yens should be 5.5591054332 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(3000).toFixed(5);

    // If 1000 yens is 5.5591054332 pound, then 3000 yens should be (3 * 5.5591054332)
    const expected = (3 * 5.5591054332).toFixed(5); 
    
    // This is the comparison for the unit test
    expect(pounds).toBe(expected); 
})
