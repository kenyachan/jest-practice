function reverseString(string) {
	if (string === null)
		throw new Error("Argument cannot be 'null'");

	if (string === undefined)
		throw new Error("Argument cannot be 'undefined'");

	return string.split('').reverse().join('');
}

module.exports = reverseString;
