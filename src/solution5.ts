import axios from "axios";

type MyPromise = {
  then: () => void;
  catch: () => void;
  finally: () => void;
};

let p: Promise<User>;

console.time();
// const obj = axios.get("https://jsonplaceholder.typicode.com/users");
// obj
//   .then((response) => {
//     // t1
//     // t2
//     // t3
//     console.log("SONO DENTRO THEN");
//     // console.log("response:", response.data[0]);
//     const obj1 = axios.get(
//       "https://jsonplaceholder.typicode.com/users/" + response.data[0].id
//     );
//     obj1.then((response2) => {
//       console.log(response2.data);
//       console.timeEnd();
//     });
//   })
//   .catch((err) => {
//     console.log("err:", err.response.status);
//   })
//   .finally(() => {
//     console.log("eseguo cmq!");
//   });
// console.log("sono nell'ultima riga");

const loadData = async () => {
  console.time();
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const obj = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + data[0].id
    );
  } catch (err: any) {
    console.log("err:", err.response.status);
  }

  console.timeEnd();
};

loadData();
