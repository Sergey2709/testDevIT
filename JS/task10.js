// Синтаксис: array_unique(arr: array): any[]
// Пример:

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

const array_unique = (arr) => {
    return [...new Set(arr)];
}

let result = array_unique(testData.concat(testData2)); // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

console.log(result);