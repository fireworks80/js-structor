class Queue {
	constructor() {
		this.items = [];
	}
	enqueue(value) {
		// queue 뒤쪽에 원소 추가
		this.items.push(value);
	}
	dequeue() {
		// queue 첫번째 요소 반환 후 queue에서 삭제
		return this.items.shift();
	}
	front() {
		// queue의 첫번째 원소 반환
		// 하지만 queue자체는 그대로 놔둔다
		return this.items[0];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}
}

// const queue = new Queue();

// console.log(queue.isEmpty());
// queue.enqueue('john');
// queue.enqueue('jack');

// queue.enqueue('camila');

// queue.print();

// console.log(queue.size());

// console.log(queue.isEmpty());

// queue.dequeue();
// queue.dequeue();
// queue.print();

// priorityQueue (우선순위 큐) - 우선순위를 설정해 원소를 정확한 위치에 추가하는 것. 그리고
// 추가는 순서대로 하되 삭제만 우선숭의에 따르는 것 (두 가지 방법으로 구현할 수 있다)

// 1.정확한 위치에 추가하기
// class QueueElement {
// 	constructor(element, priority) {
// 		this.element = element;
// 		this.priority = priority;
// 	}
// }

// class PriorityQueue extends Queue {
// 	constructor() {
// 		super();
// 	}
// 	enqueue(element, priority) {
// 		const queueElement = new QueueElement(element, priority);
// 		let added = false;

// 		if (this.isEmpty()) {
// 			this.items.push(queueElement);
// 			return;
// 		}

// 		for (let i = 0; i < this.items.length; i += 1) {
// 			if (queueElement.priority < this.items[i].priority) {
// 				this.items.splice(i, 0, queueElement);
// 				added = true;
// 				break;
// 			}
// 		} // for

// 		if (!added) {
// 			this.items.push(queueElement);
// 		}
// 	}
// 	print() {
// 		console.log(this.items);
// 	}
// }

class QueueElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue extends Queue {
	constructor() {
		super();
	}
	enqueue(element, priority) {
		const queueElement = new QueueElement(element, priority);
		let added = false;

		if (this.isEmpty()) {
			this.items.push(queueElement);
			return;
		}

		for (let i = 0; i < this.items.length; i += 1) {
			if (queueElement.priority > this.items[i].priority) continue;

			this.items.splice(i, 0, queueElement);
			added = true;
			break;
		}

		if (!added) {
			this.items.push(queueElement);
		}
	}
	print() {
		console.log(this.items);
	}
}

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('john', 2);
// priorityQueue.enqueue('jack', 1);
// priorityQueue.enqueue('han', 3);
// priorityQueue.enqueue('camila', 1);
// priorityQueue.print();

//환형 큐
// 핫 포테이토
// 원을 그리고 사람들이 서서 옆으로 감자를 옮기다 멈췄을때 감자를 들고 있는 사람은 퇴장
// 마지막에 남은 사람이 승자
const hotPotato = (nameList, num) => {
	const queue = new Queue();

	for (let i = 0; i < nameList.length; i += 1) {
		queue.enqueue(nameList[i]);
	}

	let eliminated = '';

	while (queue.size() > 1) {
		for (let i = 0; i < num; i += 1) {
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(`${eliminated}(을)를 뜨거운 감자 게임에서 퇴장시킵니다.`);
	}

	return queue.dequeue();
};

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const winner = hotPotato(names, 7);
console.log(`승자는 ${winner} 입니다.`);
