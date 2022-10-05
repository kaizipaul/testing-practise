function strLength (str) {
 if (str.length >= 1 && str.length <= 10) {
    return true
 } else {
    return 'error'
 }
}

function reverseString (str) {
    return str.split('').reverse().join('')
}

export default class Calculator {
    static add = (a, b) => {
      return a + b;
    };
    static subtract = (a, b) => {
      return a - b;
    };
    static divide = (a, b) => {
      return a / b;
    };
    static multiply = (a, b) => {
      return a * b;
    };
  }

export function wordCap (str) {
    const upperCase = str.charAt(0).toUpperCase() + str.slice(1)
    return upperCase
}


export { strLength, reverseString };