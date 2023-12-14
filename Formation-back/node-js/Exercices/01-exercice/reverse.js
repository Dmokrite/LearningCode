async function reverseWords(array) {
    return array.map((word) => word.split('').reverse().join(''));
}
  
module.exports = { reverseWords };
