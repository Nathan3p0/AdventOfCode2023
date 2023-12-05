const fs = require('fs');
const dataFilePath = 'data.txt';
const fileContent = fs.readFileSync(dataFilePath, 'utf-8');

let sum = 0;

const numbers = {
	one: 'on1e',
	two: 'tw2o',
	three: 'thr3ee',
	four: 'fou4r',
	five: 'fi5ve',
	six: 'si6x',
	seven: 'se7ven',
	eight: 'ei8ght',
	nine: 'ni9ne',
};

fileContent.split(/\r?\n/).forEach((line) => {
	for (const num in numbers) {
		const regex = new RegExp(num, 'g');
		line = line.replace(regex, `${numbers[num]}`);
	}

	const match = line.match(/\d/g);
	sum += parseInt(match[0] + match[match.length - 1]);
});

console.log(sum);
