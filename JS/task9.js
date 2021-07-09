let testData4 = [
  { name: 'Vasya', email: 'vasya@example.com', age: 20 },
  { name: 'Dima', email: 'dima@example.com', age: 34 },
  { name: 'Colya', email: 'colya@example.com', age: 46 },
  { name: 'Misha', email: 'misha@example.com', age: 16 },
  { name: 'Ashan', email: 'ashan@example.com', age: 99 },
  { name: 'Rafshan', email: 'rafshan@example.com', age: 11 },
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
  [
    [
      [
        [
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
          [{ name: 'Rafshan', email: 'rafshan@example.com', age: 11 }],
        ],
      ],
    ],
  ],
];

const array_normalize = (arr, type, bool = false) => {
  const resultArr = arr.reduce((acc, el) => {
    if (bool === true && typeof el === 'number' && typeof type !== 'object') {
      acc.push(`${el}`);
    }

    if (typeof el === `${type}` && typeof el !== 'object' && typeof type !== 'object') {
      acc.push(el);
    }

    if (typeof type === 'object' && typeof el === 'object' && bool === true) {
      if (!Array.isArray(el)) {
        const objTypeArr = Object.entries(el);
        const keyNewObj = Object.keys(type)[0];
        const newOblect = {};
        newOblect[`${keyNewObj}`] = el[Object.keys(type)[0]]

        acc.push(newOblect);
      }
    }
    
    return acc;
  }, []);
  return resultArr;
};

// Пример:
let result = array_normalize(testData4, 'string'); // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true); // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, { age: 'float' }); // []
let result4 = array_normalize(testData4, { age: 'float' }, true); // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
