function capitalise(string) {
	const regEx = /^[A-Za-z]/;
	
	if (regEx.test(string) === false)
		throw new Error('String contains invalid characters');

	return `${string[0].toUpperCase()}${string.slice(1, string.length)}`;
}

module.exports = capitalise;
