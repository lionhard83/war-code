export const sumOfIntervals = (intervals: [number, number][]) => {
  return intervals
    .reduce((acc, item, _) => {
      const indexes = acc.reduce((acc, itemIesime, index) => {
        if (isIntersecate(itemIesime, item)) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);
      if (indexes.length === 0) {
        acc.push(item);
      } else {
        const items = acc.filter((_, index) => indexes.includes(index));
        const itemToAdd = newItem([item, ...items]);
        acc = acc.filter((_, index) => !indexes.includes(index));
        acc.unshift(itemToAdd);
      }
      return acc;
    }, [] as [number, number][])
    .reduce((acc, item) => acc + (item[1] - item[0]), 0);
};

const isIntersecate = (arr1: [number, number], arr2: [number, number]) => {
  return arr1[1] > arr2[0] && arr1[0] < arr2[1];
};

const newItem = (arr: [number, number][]): [number, number] => {
  const min = Math.min(...arr.map((item) => item[0]));
  const max = Math.max(...arr.map((item) => item[1]));
  return [min, max];
};

console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);

console.log(
  sumOfIntervals([
    [1, 4],
    [7, 10],
    [3, 8],
  ])
);
