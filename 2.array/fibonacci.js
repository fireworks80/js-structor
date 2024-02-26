// const fibonacci = [];
// fibonacci[1] = 1;
// fibonacci[2] = 2;

// for (let i = 3; i < 20; i += 1) {
// 	fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// for (let i = 0; i < fibonacci.length; i += 1) {
// 	console.log(fibonacci[i]);
// }

// array unshift
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

for (let i = numbers.length; i >= 0; i -= 1) {
	numbers[i] = numbers[i - 1];
}
numbers[0] = -1;

// console.log(numbers);

numbers.unshift(-2);
numbers.unshift(-4, -3);

// console.log(numbers);

numbers.pop();

// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
// 	numbers[i] = numbers[i + 1];
// }

numbers.shift();

// console.log(numbers);

const sliceNumbers = (numbers) => {
	const cloneNumbers = [...numbers];

	cloneNumbers.splice(5, 3);
	return cloneNumbers;
};

console.log(sliceNumbers(numbers));
console.log(numbers);
