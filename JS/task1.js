const user = {
  name: 'Ashan',
  email: 'ashan@example.com',
  age: 99,
  skills: { php: 0, js: 10, madness: 10, rage: 1 },
};

const cloneDeep = obj => Object.assign({}, obj);

console.log(cloneDeep(user));
