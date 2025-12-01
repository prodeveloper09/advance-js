const numbers = [10, 9, 10, 30, 20];
const output = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}

function square(element) {
    return element * element;
}

numbers.map(square);

numbers.map(function(element, index, array) {
  console.log(element, index, array);
});

const result = numbers.map(function (element) {
  return element * element;
});

console.log(result);

const result2 = numbers.map((element) => element * element);
console.log(result2);

const square = numbers.map((x) => x * x);
console.log(square);

const filter = numbers.filter(x => x > 10);

const find = numbers.find((x) => x > 10);

console.log(find);
