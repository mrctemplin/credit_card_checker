// All valid credit card numbers
const valid1 = toArray('4539677908016808');
const valid2 = toArray('5535766768751439');
const valid3 = toArray('371612019985236');
const valid4 = toArray('6011144340682905');
const valid5 = toArray('4539404967869666');

// All invalid credit card numbers
const invalid1 = toArray('4532778771091795');
const invalid2 = toArray('5795593392134643');
const invalid3 = toArray('375796084459914');
const invalid4 = toArray('6011127961777935');
const invalid5 = toArray('5382019772883854');

// Can be either valid or invalid
const mystery1 = toArray('344801968305414');
const mystery2 = toArray('5466100861620239');
const mystery3 = toArray('6011377020962656203');
const mystery4 = toArray('4929877169217093');
const mystery5 = toArray('4913540463072523');

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

function validateCred(arr) {
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


function findInvalidCards(arr) {
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


function idInvalidCardCompanies(arr) {
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
console.log(idInvalidCardCompanies([invalid1])); // Should print['Visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['Mastercard']
console.log(idInvalidCardCompanies(batch)); // Should print ['Visa', 'Mastercard', 'Amex', 'Discover']


function toArray(cardNumbers) {
  const cardNumbersArray = [];

  for(let i = 0; i < cardNumbers.length; i++) {
    let cardDigit = parseInt(cardNumbers[i]);
    cardNumbersArray.push(cardDigit);
  }

  return cardNumbersArray;

}
