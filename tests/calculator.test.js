const calculator = require('../src/calculator.js');

describe('Adding two numbers', () => {
	let x = Math.floor(Math.random() * 10);

	test('Adding 0 to a number is the same as doing nothing', () => {
		expect(calculator.add(x, 0)).toEqual(x);
	});

	test('Adding two numbers, the result should not depend on parameter order', () => {
		let number1 = x + 1;
		let number2 = x + 2;
		expect(calculator.add(number1, number2)).toEqual(calculator.add(number2, number1));
	});

	test('Adding 1 twice is the same as adding 2', () => {
		expect(calculator.add(1, calculator.add(1, x))).toEqual(calculator.add(x, 2));
	});
});

describe('Subtracting two numbers', () => {
	let x = Math.floor(Math.random() * 10);

	test('Subtracting 0 from a number is the same as doing nothing', () => {
		expect(calculator.subtract(x, 0)).toEqual(x);
	});

	test('Subtracting two different numbers, the results should depend on parameter order', () => {
		let number1 = x + 1;
		let number2 = x + 2;
		expect(calculator.subtract(number1, number2)).not.toEqual(calculator.subtract(number2, number1));
	});

	test('Subtracting 1 twice is the same as subtracting 2', () => {
		expect(calculator.subtract(calculator.subtract(x, 1), 1)).toEqual(calculator.subtract(x, 2));
	});
});

describe('Dividing two numbers', () => {
	let x = Math.floor(Math.random() * 10);

	test('Dividing by 0 should be Infinity', () => {
		expect(calculator.divide(x, 0)).toEqual(Infinity);
	});

	test('Dividing by 1 should be the same as doing nothing', () => {
		expect(calculator.divide(x, 1)).toEqual(x);
	});

	test('Dividing by itself should equal 1', () => {
		expect(calculator.divide(x, x)).toEqual(1);
	});

	test('Dividing by 1 twice is the same as dividing by 1 once', () => {
		expect(calculator.divide(calculator.divide(x, 1), 1)).toEqual(calculator.divide(x, 1));
	});
});

describe('Multiplying two numbers', () => {
	let x = Math.floor(Math.random() * 10);

	test('Multiplying by 0 should be 0', () => {
		expect(calculator.multiply(x, 0)).toEqual(0);
	});

	test('Multiplying by 1 should be the same as doing nothing', () => {
		expect(calculator.multiply(x, 1)).toEqual(x);
	});
	
	test('Multiplying by n is the same as adding n times', () => {
		let n = Math.floor(Math.random() * 10);

		let result = 0;
		for (let i = n; i > 0; i--)
			result += x;
		
		expect(calculator.multiply(x, n)).toEqual(result);
	});
});

describe('Handling invalid input', () => {
	let x = Math.floor(Math.random() * 10);

	test('Adding invalid input to a number will throw an error', () => {
		expect(() => calculator.add(x, '!')).toThrow('Invalid Input');
	});

	test('Subtracting invalid input to a number will throw an error', () => {
		expect(() => calculator.subtract(x, '!')).toThrow('Invalid Input');
	});

	test('Dividing invalid input to a number will throw an error', () => {
		expect(() => calculator.divide(x, '!')).toThrow('Invalid Input');
	});

	test('Mulitplying invalid input to a number will throw an error', () => {
		expect(() => calculator.multiply(x, '!')).toThrow('Invalid Input');
	});
});
