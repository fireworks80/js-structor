class Stack {
	items = [];
	constructor() {}

	push(value) {
		this.items.push(value);
	}
	pop() {
		return this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	clear() {
		this.items = [];
	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}
}

const stack = new Stack();

// console.log(stack.isEmpty());
// stack.push(5);
// stack.push(8);
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.push(15);
// // console.log(stack.print());
// stack.pop();
// stack.pop();
// console.log(stack.size());
// stack.print();

const divideBy2 = (decNumber, base) => {
	const remStack = new Stack();
	const digits = '0123456789ABCDEF';

	while (decNumber > 0) {
		const rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	remStack.print();
	let binaryString = '';
	while (!remStack.isEmpty()) {
		binaryString += digits[remStack.pop()];
	}

	return binaryString;
};

console.log(divideBy2(100345, 2));
console.log(divideBy2(100345, 8));
console.log(divideBy2(100345, 16));
