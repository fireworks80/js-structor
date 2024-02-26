class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	#length = 0;
	#head = null;

	constructor() {}

	// list 맨 끝에 원소 추가
	append(element) {
		const node = new Node(element);
		let current = null;

		if (this.#head === null) {
			this.#head = node;
		} else {
			current = this.#head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.#length += 1;
	}

	// 해당 위치에 원소를 삽입
	insert(position, element) {
		if (position < 0) return false;

		const node = new Node(element);
		let current = this.#head;
		let previous = null;
		let index = 0;

		if (position === 0) {
			node.next = current;
			this.#head = node;
			this.#length += 1;
			return true;
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

	// 해당 위치에 있는 원소 삭제
	removeAt(position) {
		// 삭제 하려는 원소가 리스트의 첫 번째 원소인지 아닌지에 따라 두 가지 경우를 생각해야 한다.
		// 그래서 remove메서드를 원소의 위치를 기준으로 삭제하는 메서드
		// 원소의 값을 기준으로 삭제하는 메서드 두 가지로 나누어 구현할 것이다.
		if (position < 0) return null;

		let current = this.#head;
		let previous = null;
		let index = 0;

		if (position === 0) {
			this.#head = current.next;
		} else {
			while (index < position) {
				previous = current;
				current = current.next;
				index += 1;
			}
			// 현재의 다음을 이전 요소와 연결하여 현재를 건너 뛴다.
			previous.next = current?.next;
		}

		this.#length -= 1;

		return current?.element;
	}

	// 해당 원소의 인덱스를 반환
	// 존재하지 않을 경우 결과는 -1
	indexOf(element) {
		let current = this.#head;
		let index = 0;

		while (current) {
			if (element === current.element) return index;
			index += 1;
			current = current.next;
		}

		return -1;
	}

	// 원소를 삭제한다
	remove(element) {
		return this.removeAt(this.indexOf(element));
	}

	// 원소가 하나도 없으면 true
	isEmpty() {
		return this.#length === 0;
	}

	// 원소 개수를 반환
	size() {
		return this.#length;
	}

	toString() {
		let current = this.#head;
		let string = '';

		while (current) {
			string += current.element;
			current = current.next;
		}

		return string;
	}

	getHead() {
		return this.#head;
	}

	print() {}
}
const list = new LinkedList();
console.log(list.size());
list.append(15);
console.log(list.size());
list.append(10);

console.log(list.size());
console.log(list.toString());

// list.removeAt(1);

// console.log(list.toString());

// list.insert(1, 3);
list.insert(0, 8);

console.log(list.size());
console.log(list.toString());

// console.log(list.indexOf(8));
// console.log(list.indexOf(15));
// console.log(list.indexOf(10));
// console.log(list.indexOf(7));

// console.log(list.remove(15));

console.log(list.toString());
console.log(list.isEmpty());
console.log(list.size());
console.log(list.getHead());
