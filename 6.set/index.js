class Set {
	items = {};

	constructor() {}
	add(value) {
		if (this.has(value)) return false;

		this.items[value] = value;
		return true;
	}
	remove(value) {
		if (!this.has(value)) return false;

		delete this.items[value];

		return true;
	}
	// 어떤 원소가 집합에 포함되어 있는지 여부 boolean
	has(value) {
		return this.items.hasOwnProperty(value);
	}
	clear() {
		this.items = {};
	}
	// 원소의 개수 반환
	size() {
		return Object.keys(this.items).length;
	}
	// 집합의 모든 원소를 배열로 반환
	values() {
		return Object.keys(this.items);
	}
	// 합집합
	union(otherSet) {
		const unionSet = new Set();
		const addValue = (values, set) => values.forEach((value) => set.add(value));

		addValue(this.values(), unionSet);
		addValue(otherSet.values(), unionSet);

		return unionSet;
	}
	// 교집합
	intersection(otherSet) {
		const intersectionSet = new Set();
		const values = this.values();

		values.forEach((value) => {
			if (otherSet.has(value)) {
				intersectionSet.add(value);
			}
		});

		return intersectionSet;
	}

	// 차집합
	difference(otherSet) {
		const differenceSet = new Set();
		const values = this.values();

		values.forEach((value) => {
			if (!otherSet.has(value)) {
				differenceSet.add(value);
			}
		});

		return differenceSet;
	}

	// 부분 집합
	subset(otherSet) {
		if (this.size() > otherSet.size()) return false;

		const values = this.values();

		return values.every((value) => otherSet.has(value));
	}
}

const set = new Set();
set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());

set.add(2);
set.add(3);

const setB = new Set();

setB.add(1);
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const setC = new Set();
setC.add(3);

// union test
// const unionAB = set.union(setB);
// console.log(unionAB.values());

// intersection test
// const interSectionAB = set.intersection(setB);
// console.log(interSectionAB.values());

// const differenceAB = set.difference(setB);
// console.log(differenceAB.values());

console.log(set.subset(setB));
console.log(set.subset(setC));
