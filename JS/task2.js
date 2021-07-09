// var 

const arrays = [[1, 2, 3], [4, 5], [6]];

const flatArr = arrays.reduce((acc, el) => {
    return acc.concat(el);
}, [])
// → [1, 2, 3, 4, 5, 6]

console.log(flatArr);
