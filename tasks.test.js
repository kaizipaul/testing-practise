import Calculator, { strLength, reverseString, wordCap } from './tasks.js';

describe('check tasks', () => {
    test('checks if the string is reversed correctly', () => {
        expect(reverseString('hello')).toBe('olleh')
    })
    test('if the string passed has the correct length', () => {
        expect(strLength('kaizirege')).toBe(true)
    })

    test('checks if the first string is uppercase', () => {
        expect(wordCap('paul')).toBe('Paul')
    })
})

describe('compute', () => {
    test('check if numbers add correctly', () => {
        expect(Calculator.add(2,3)).toEqual(5)
    })
    test('check if numbers subtract correctly', () => {
        expect(Calculator.subtract(10,8)).toEqual(2)
    })
    test('check if numbers multiply correctly', () => {
        expect(Calculator.multiply(9,7)).toEqual(63)
    })
    test('check if numbers divide correctly', () =>{
        //arrange
        const a = 8
        const b = 4
        //act
        const divided = a/b
        //assert
        expect(Calculator.divide(a,b)).toEqual(divided)
    })
})

