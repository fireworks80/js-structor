const recursive = (() => {
  const _recursive = (maxNum, acc) => {
    if (!acc.length) acc.push(1);

    const current = acc[acc.length - 1];

    if (acc.length === 1) acc.push(current);

    const prev = acc[acc.length - 2];

    if (current >= maxNum) return acc;

    acc.push(prev + current);

    return _recursive(maxNum, acc);
  };
  return (maxNum) => _recursive(maxNum, []);
})();

console.log(recursive(100));