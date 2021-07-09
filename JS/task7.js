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

const array_find = (arr, regOrSearch) => {
  const newArr = arr.reduce((acc, el) => {
    const regex = /^raf.*/i.exec(el); // ну, не смог я преобразовать строку в регулярное выражение - надеюсь научите :) !

    if (el === regOrSearch || regex !== null) {
      acc.push(el);
    }
    return acc;
  }, []);

  return newArr;
};

let result = array_find(testData, '/^raf.*/i'); // ["Rafshan"]
let result2 = array_find(testData, 'Rafshan'); // ["Rafshan"]

console.log(result, result2);
