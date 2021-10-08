// const x = {
//   name: "yuma",
//   age: 25
// };

// const message1 = `私の名前${x.name}はです。${x.age}歳です`;
// console.log(message1);

// const { name, age } = x;
// const message２ = `私の名前${name}はです。${age}歳です`;
// console.log(message２);

// スプレッド構文
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1,num2) => console.log(num1+num2);
// // sumfunc(arr1[0],arr1[1]);
// sumfunc(...arr1);

// まとめる（展開の反対）
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// ↑コピーする際にイコールでコピーした場合参照が引き継がれてしまうので、NG
