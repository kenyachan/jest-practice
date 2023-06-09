function caesarCipher(string, shiftFactor) {
	let stringArr = string.split('');
	let cipheredStringArr = [];

	stringArr.forEach(character => { 
		let cipheredCharacter = character;
		if (validateCharacter(character) === true)
			cipheredCharacter = cipher(character, shiftFactor);
			
		cipheredStringArr.push(cipheredCharacter);
	});

	return cipheredStringArr.join('');
}

function cipher(character, shiftFactor) {
	const upperCaseExp = /[A-Z]/;
	const lowerCaseExp = /[a-z]/;
	const charCode_a = 'a'.charCodeAt(0); // 97
	const charCode_A = 'A'.charCodeAt(0); // 65
	const charCode_z = 'z'.charCodeAt(0); // 122
	const charCode_Z = 'Z'.charCodeAt(0); // 90

	let shift = shiftFactor % 26;
	let cipheredCharCode = character.charCodeAt(0) + shift;

	if (lowerCaseExp.test(character) && cipheredCharCode > charCode_z) {
		let newShift = shift - (charCode_z - character.charCodeAt(0) + 1);

		cipheredCharCode = charCode_a + newShift;
	}

	if (lowerCaseExp.test(character) && cipheredCharCode < charCode_a) {
		let newShift = shift + (character.charCodeAt(0) - charCode_a + 1);

		cipheredCharCode = charCode_z + newShift;
	}

	if (upperCaseExp.test(character) && cipheredCharCode > charCode_Z) {
		let newShift = shift - (charCode_Z - character.charCodeAt(0) + 1);

		cipheredCharCode = charCode_A + newShift;
	}

	if (upperCaseExp.test(character) && cipheredCharCode < charCode_A) {
		let newShift = shift + (character.charCodeAt(0) - charCode_A + 1);

		cipheredCharCode = charCode_Z + newShift;
	}

	return String.fromCharCode(cipheredCharCode);
}

function validateCharacter(character) {
	let re = /[A-Za-z]/;

	return re.test(character);
}

module.exports = caesarCipher;
