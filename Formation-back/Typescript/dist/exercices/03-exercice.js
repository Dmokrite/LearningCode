"use strict";
function extractValueOfKey(arr, key) {
    return arr.map(obj => obj[key]);
}
const user = {
    firstName: 'Romain',
    lastName: 'Verliefden',
};
const user2 = {
    firstName: 'Banano',
    lastName: 'Mango',
};
const extractedValues = extractValueOfKey([user, user2], "firstName");
console.log(extractedValues);
