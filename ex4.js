function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const prompt = require("prompt-sync")({ sigint: true })
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);