const reverseString = require('../src/reverseString');

test('Reversing a string twice will undo the reverse', () => {
	let string = 'test123';
	expect(reverseString(reverseString(string))).toEqual(string);
});

test('Reverse a single word', () => {
	expect(reverseString('Test')).toMatch(/tseT/);
});

test('Reverse a sentence', () => {
	expect(reverseString('Hello world!')).toMatch(/!dlrow olleH/);
});

test('Reverse an empty string', () => {
	expect(reverseString('')).toMatch('');
});

test('Null input to throw error', () => {
	expect(() => reverseString(null)).toThrow(/Argument cannot be 'null'/);
});

test('Undefined input to throw error', () => {
	expect(() => reverseString(undefined)).toThrow(/Argument cannot be 'undefined'/);
});

