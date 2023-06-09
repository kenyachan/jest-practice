const validate = input => {
	if((typeof input) !== 'number')
		throw new Error('Invalid Input');
		//throw new Error(`Invalid input provided, expected "number", received "${typeof input}"`);
}

const add = (x, y) => {
	validate(x);
	validate(y);
	return x + y;
}

const subtract = (x, y) => {
	validate(x);
	validate(y);
	return x - y;
}

const divide = (x, y) => {
	validate(x);
	validate(y);
	return x / y;
}

const multiply = (x, y) => {
	validate(x);
	validate(y);
	return x * y;
}

const calculator = {
	add,
	subtract,
	divide,
	multiply,
}

module.exports = calculator;
