function array_combine(keys, values) {
  const obj = keys.reduce((acc, key, i) => {
    if (typeof keys[i] === 'boolean') {
      return acc;
    }

    acc[key] = values[i];
    return acc;
  }, {});
  return obj;
}

// examples
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
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
const result = array_combine(testData, testData2);
console.log(result);
