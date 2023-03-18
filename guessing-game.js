const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const randomInRange = (min, max) => {
	return parseInt(Math.random() * (max - min) + min);
};

let secretNumber;
let NumAttemps = 5;

function checkGuess(num) {
	const number = Number(num);

	if (NumAttemps == 0) {
		console.log("You lose!!");
		console.log(`I was thinking of ${secretNumber}`);
		rl.close();
	} else if (number > secretNumber) {
		console.log("Too High");
		askGuess();
	} else if (number < secretNumber) {
		console.log("Too Low");
		askGuess();
	} else {
		console.log("You Win!!");
		rl.close();
	}
}

function askGuess() {
	NumAttemps--;
	rl.question("Enter a guess: ", checkGuess);
}

// askGuess();
function askRange() {
	rl.question("Enter a minimum number: ", (min) => {
		rl.question("Enter a maximum number: ", (max) => {
			console.log(`I am thinking of a number between ${min} and ${max}`);
			secretNumber = randomInRange(Number(min), Number(max));
			askGuess();
		});
	});
}

function askLimit() {
	rl.question("Enter limit: ", (lim) => {
		NumAttemps = lim;
		askRange();
	});
}

askLimit();
