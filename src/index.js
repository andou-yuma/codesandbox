const x = {
  name: "yuma",
  age: 25
};

const message1 = `私の名前${x.name}はです。${x.age}歳です`;
console.log(message1);

const { name, age } = x;
const message２ = `私の名前${name}はです。${age}歳です`;
console.log(message２);
