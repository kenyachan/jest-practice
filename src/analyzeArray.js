Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

Array.prototype.average = function() {
	let sum = this.reduce((current, previous) => current + previous, 0);
	return sum/this.length;
};

function analyzeArray(array) {
	return {
		average: array.average(),
		min: array.min(),
		max: array.max(),
		length: array.length
	}
}

module.exports = analyzeArray;
