export const findOdd = (xs: number[]): number => {
  return Number(
    Object.entries(
      xs.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
      }, {} as Record<number, number>)
    ).reduce(
      (acc, item) => {
        if (item[1] % 2 === 1 && item[1] > acc.max) {
          return {
            key: item[0],
            max: item[1],
          };
        }
        return acc;
      },
      { max: 0, key: "" }
    ).key
  );
};

export function humanReadable(seconds:number):string {
  // TODO
  return `${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`
}
