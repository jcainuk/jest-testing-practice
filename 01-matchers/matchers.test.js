// require the sum.js file
const { sum, truthyOrFalsey } = require('./matchers');

// Maths
describe('Maths tests', () => {
  it('should add 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  // it('object assignment', () => {
  //   const obj = {};
  //   expect(obj).toBe({}); THIS FAILS :(
  // }

  it('object assignment', () => {
    const obj = {};
    expect(obj).toEqual({});// THIS PASSES :)
  });
});

// booleans
describe('boolean tests', () => {
  it('should say the value false', () => {
    const result = truthyOrFalsey(0);
    expect(result).toBeFalsy;
    expect(result).not.toBeTruthy;
  });
  it('should say the value is true', () => {
    const result = truthyOrFalsey('hello');
    expect(result).toBeTruthy;
    expect(result).not.toBeFalsy;
  });
});
