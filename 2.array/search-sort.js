// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(list.reverse());
// console.log(list.sort());
// const sortFn = (a, b) => a - b;

// console.log(list.sort(sortFn));

const names = ['Ana', 'ana', 'john', 'John'];

// console.log(names.sort());
const compare = (a, b) => {
	if (a.toLowerCase() < b.toLowerCase()) return -1;
	if (a.toLowerCase() > b.toLowerCase()) return 1;
	return 0;
};

console.log(names.sort(compare));
