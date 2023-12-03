const fs = require('fs');
const dataFilePath = 'data.txt';
const fileContent = fs.readFileSync(dataFilePath, 'utf-8');

let sum = 0;

fileContent.split(/\r?\n/).forEach((line) => {
	const lineChars = line.split('');

	let firstDigit;
	let secondDigit;

	for (let i = 0; i < lineChars.length; i++) {
		if (!isNaN(lineChars[i]) && !firstDigit) {
			firstDigit = lineChars[i];
		}

		const lastIndex = lineChars.length - 1 - i;
		if (!isNaN(lineChars[lastIndex]) && !secondDigit) {
			secondDigit = lineChars[lastIndex];
		}

		if (firstDigit && secondDigit) {
			break;
		}
	}

	if (!secondDigit) {
		secondDigit = firstDigit;
	}

	sum += parseInt(firstDigit + secondDigit, 10);
});

console.log(sum);
