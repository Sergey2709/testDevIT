// не знаю на сколько правильно, но ответ выдает...

var a = function (one, two) {
  return one + two;
};
var b = function () {
  return false;
};

const paralell = (arr, func) => {
    const nameFirstFunc = arr[0][0];
    const valuesFirstFunc = arr[0][1];
    let res1 = nameFirstFunc(...valuesFirstFunc);
    
    const nameSecondFunc = arr[1][0];
    let res2 = nameSecondFunc();
    
    const results = [res1, res2]
    return func(results);
}

paralell([[a, [1, 2]], [b]], function (results) {
  console.log(results); // [3, false]
});

