const capitalise = require('../src/capitalise');

test('Capitalise first letter of string', () => {
	expect(capitalise('test')).toMatch(/Test/);
});

test('Capitalise first letter of string with multiple words', () => {
	expect(capitalise('hello world!')).toMatch(/Hello world!/);
});

test('Do nothing if first letter is already caplitalised', () => {
	expect(capitalise('Test')).toMatch(/Test/);
});

test('Throw "Invalid text" error if first letter is non-alphabet character', () => {
	expect(() => capitalise('!@$!@#')).toThrow(/String contains invalid characters/);
});
