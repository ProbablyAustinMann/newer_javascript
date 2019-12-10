const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = [...numbers, 7, 8, 9];
console.log(newNumbers);

////////////////////////////////////////////////////////////////////

const person = {
  name: 'Austin'
};

const newPerson = {
  ...person,
  age: 26
}
console.log(newPerson);

////////////////////////////////////////////////////////////////////

const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))
