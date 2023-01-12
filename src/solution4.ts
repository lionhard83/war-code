// export const phone = (strng: string, num: string): string => {
//   // your code
//   const items = strng.split(/\n/g).reduce((acc, item) => {
//     const phone = item.match(/\<(.*)\>$/g);
//     console.log("phone:", phon15.0830304e);
//     return acc;
//   }, {} as any);
//   console.log("items:", items);
//   return "...";
// };

type Admin = { name: string; surname: string; isSuper: boolean };
type User = { name: string; surname: string; isSuper: number; age: number };

const useAdmin = (a: Admin) => a;
const useUser = (u: User) => u;

const Component = (obj: Admin | User) => {
  const adminOrUser = isAdmin(obj)
    ? useAdmin(obj)
    : useUser(obj);
};

const isAdmin = (obj: Admin | User): obj is Admin =>
  obj.isSuper === true || obj.isSuper === false;
