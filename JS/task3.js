function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) return a * b;
  else throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
  
  try {
    const result = primitiveMultiply(a, b);
    return result;
  } catch (err) {
    return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(8, 8));
// console.log(typeof (primitiveMultiply(8, 8)));
