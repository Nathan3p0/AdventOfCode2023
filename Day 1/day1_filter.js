const fs = require('fs');
const dataFilePath = 'data.txt';
const fileContent = fs.readFileSync(dataFilePath, 'utf-8');

let sum = 0;

fileContent.split(/\r?\n/).forEach((line) => {
	const lineChars = line.split('').filter((char) => !isNaN(char));

	if (lineChars.length > 0) {
		const firstDigit = lineChars[0];
		const lastDigit = lineChars[lineChars.length - 1];

		sum += parseInt(firstDigit + lastDigit, 10);
	}
});

console.log(sum);
