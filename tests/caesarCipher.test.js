const caesarCipher = require('../src/caesarCipher');

describe('Caesar Cipher Tests', () => {
	test('Shift all alphabet characters by 1', () => {
		expect(caesarCipher('ab1!c', 1)).toMatch(/bc1!d/);
	});

	test('Cipher will maintain a characters case', () => {
		expect(caesarCipher('AbC', 1)).toMatch(/BcD/);
	});

	test('Shifting by "-n" will undo the cipher', () => {
		let randomNumber = Math.floor(Math.random() * 100);
		let stringToCipher = 'test123';

		expect(caesarCipher(caesarCipher(stringToCipher, randomNumber), randomNumber * -1))
			.toEqual(stringToCipher);
	});
});

describe('Cipher wrapping', () => {
	test('Shift will wrap from "z" to "a"', () => {
		expect(caesarCipher('xyz', 1)).toMatch(/yza/);
	});

	test('Shift will wrap from "Z" to "A"', () => {
		expect(caesarCipher('XYZ', 1)).toMatch(/YZA/);
	});

	test('Shift factor of 26 is the same as doing nothing', () => {
		expect(caesarCipher('abc', 26)).toMatch(/abc/);
	});

	test('Shift factor greater than 26 will continue wrapping', () => {
		expect(caesarCipher('abc', 26 * 2 + 5)).toMatch(caesarCipher('abc', 5));
	});
});
