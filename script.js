// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const validateCred = arr => {
    // Initialize and store sum of all digits in 'arr'
    let cardSum = 0;
    
    // Reverse loop through 'arr'
    for (let i = arr.length - 1; i >= 0; i--) { 
    // Variable to hold current digit
      let cardDigit = arr[i]; 
      // Alternatively equate to false and true, respectively
      if((arr.length - i) % 2 === 0) {
        cardDigit *= 2; 
        if (cardDigit > 9) {
          cardDigit -= 9;
        }
      }
      // Add 'cardDigit' to 'cardSum'
      cardSum += cardDigit;
    }

    // If 'cardSum' % 10 === 0 return true, otherwise return false
    return cardSum % 10 === 0;

}


// Test functions:
// console.log(validateCred(valid1)); // Should print true
// console.log(validateCred(invalid1)); // Should print false


const findInvalidCards = arr => {
    // Declare empty array
    const invalidCards = [];

    // Loop through 'arr'
    for(let i = 0; i < arr.length; i++) {
      // Validate each card in 'arr'. If card is invalid, add current card to 'invalidCards'
      if(!validateCred(arr[i])) {
        invalidCards.push(arr[i]);
      }
    }

    // Return array of invalid cards
    return invalidCards;

}


// Test functions:
// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
// console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers


const idInvalidCardCompanies = arr => {
    // Declare empty array
    const cardCompanies = [];

    // Find invalid cards in 'arr' and store in variable
    const invalidCards = findInvalidCards(arr);
    // Loop through 'invalidCards' array
    for(let i = 0; i < invalidCards.length; i++) {
        // If first number in credit card matches a case, add string to cardCompanies array. Create if statement to restrict duplicates.
        switch (invalidCards[i][0]) {
            case 3:
            if(cardCompanies.indexOf('Amex') === -1) {
                cardCompanies.push('Amex');
            }
            break;
            case 4:
            if(cardCompanies.indexOf('Visa') === -1) {
                cardCompanies.push('Visa');
            }
            break;
            case 5:
            if(cardCompanies.indexOf('Mastercard') === -1) {
                cardCompanies.push('Mastercard');
            }
            break;
            case 6:
            if(cardCompanies.indexOf('Discover') === -1) {
                cardCompanies.push('Discover');
            }
            break;
            default:
            console.log('Company not found.');
      }
    }

    // Return array of card companies that sent out invalid cards
    return cardCompanies;

}


// Test functions:
// console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
// console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
// console.log(idInvalidCardCompanies(batch)); // Should print ['Visa', 'Mastercard', 'Amex', 'Discover']

// Next steps:
// 1. Use different credit card numbers from a credit card number generator and validator site and test if your functions work for all types of credit cards.
// 2. To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function)
// 3. Create a function that will convert invalid numbers into valid numbers.

const toArray = cardNumbers => {
  const cardNumbersArray = [];

  for(let i = 0; i < cardNumbers.length; i++) {
    let cardDigit = parseInt(cardNumbers[i]);
    cardNumbersArray.push(cardDigit);
    
  }

  return cardNumbersArray;

}

  
