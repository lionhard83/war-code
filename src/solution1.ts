export const narcissistic = (value: number): boolean =>
  value ===
  String(value)
    .split("")
    .reduce(
      (acc, item, _, { length }) => acc + Math.pow(Number(item), length),
      0
    );
