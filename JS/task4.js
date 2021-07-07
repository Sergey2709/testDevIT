var arr = [1, 2, 3];
const num = [0];

Array.prototype.push.apply(num, arr);

console.log(num);
