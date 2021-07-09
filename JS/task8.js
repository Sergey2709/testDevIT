let testData = [
  1,
  2,
  1990,
  85,
  24,
  'Vasya',
  'colya@example.com',
  'Rafshan',
  'ashan@example.com',
  true,
  false,
];

const array_skip_until = (arr, value) => {
  let newArr = [];
  if (!arr.includes(value)) {
    return [];
  }
  newArr = arr.slice(arr.indexOf(value));
  return newArr;
};

let result = array_skip_until(testData, 2); // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, 'Rafshan'); // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, 'asd'); // []
console.log(result);
console.log(result2);
console.log(result3);
