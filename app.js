class Person {
  constructor(name) {
    this.name = name;
  }
}

/** comment1 */
const profile = {
  name: "soarflat",
  sex: "male",
  location: "Tokyo"
};

/**
 * comment2
 */
const hoge = () => {
  console.log("hoge");
};

const fooBar = (foo, bar) => {
  console.log(foo);
  console.log(bar);
  const a = [1, 2, 3];
  let sum = 0;
  for (const i in a) {
    sum += a[i];
  }
};

fooBar(111, {
  hoge: "hoge!"
});
