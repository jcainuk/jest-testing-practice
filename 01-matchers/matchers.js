// Run 'npm run test' in terminal when ready

// Write a function called 'sum' to get sum of 2 numbers
const sum = (num1, num2) => num1 + num2;

// Write a function called 'truthyOrFalsey' to evaluate a value as true or false
const truthyOrFalsy = (value) => (Boolean(value));
console.log(truthyOrFalsy('hello'));

const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK');
};

// export the matchers.js file functions
module.exports = { sum, truthyOrFalsy, compileAndroidCode };
