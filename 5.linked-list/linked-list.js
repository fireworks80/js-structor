class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	#head = null;
	#length = 0;

	append(element) {
		const node = new Node(element);

		if (!this.#head) {
			this.#head = node;
			this.#length += 1;

			return;
		}
		let current = this.#head;

		while (current.next) {
			current = current.next;
		}

		current.next = node;

		this.#length += 1;
	}
	insert(position, element) {
		if (position < 0 || position >= this.#length) return false;

		const node = new Node(element);
		let current = this.#head;
		let previous = null;
		let index = 0;

		if (position === 0) {
			node.next = current;
			this.#head = node;
			this.#length += 1;
			return;
		}

		while (index < position) {
			previous = current;
			current = current.next;

			index += 1;
		}

		node.next = current;
		previous.next = node;

		this.#length += 1;
		return true;
	}
	removeAt(position) {
		if (position < -1 || position >= this.#length) return null;

		let current = this.#head;
		let previous = null;
		let index = 0;

		if (position === 0) {
			this.#head = current?.next;
			this.#length -= 1;

			return current.element;
		}

		while (index < position) {
			previous = current;
			current = current?.next;

			index += 1;
		}

		previous.next = current?.next;

		this.#length -= 1;

		return current.element;
	}
	remove(element) {
		return this.removeAt(this.indexOf(element));
	}
	indexOf(element) {
		let current = this.#head;
		let index = 0;

		while (current) {
			if (current.element === element) return index;

			current = current.next;
			index += 1;
		}

		return -1;
	}
	isEmpty() {
		return this.#length === 0;
	}
	size() {
		return this.#length;
	}
	toString() {
		let string = '';
		let current = this.#head;

		while (current) {
			string += current.element;
			current = current.next;
		}

		return string;
	}
	getHead() {
		return this.#head;
	}
}

const list = new LinkedList();
list.append(10);
list.append(15);
list.append(16);
console.log('================');
console.log(list.getHead());
console.log('================');

list.insert(0, 5);
console.log(list.toString());
console.log('================');
console.log(list.getHead());
console.log('================');

list.insert(1, 3);
console.log(list.toString());

console.log(list.removeAt(0));

console.log(list.remove(15));
console.log(list.toString());
console.log(list.isEmpty());
console.log('================');
console.log(list.getHead());
console.log('================');
