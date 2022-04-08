// require the sum.js file
const { sum, truthyOrFalsey } = require('./matchers');

// reference types (check equality of objects)
describe('reference variables type assertions', () => {
  it('should recognize that 2 objects are not the same variable', () => {
    const obj = {};
    expect(obj).not.toBe({});
  });
  it('should check the equality of 2 objects', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// Maths
describe('Maths tests', () => {
  it('should add 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});

// booleans
describe('boolean tests', () => {
  it('should say the value false', () => {
    const result = truthyOrFalsey(0);
    expect(result).toBeFalsy;
  });
  it('should NOT say the value is true', () => {
    const result = truthyOrFalsey(0);
    expect(result).not.toBeTruthy;
  });
  it('should say the value is true', () => {
    const result = truthyOrFalsey('hello');
    expect(result).toBeTruthy;
  });
  it('should NOT say the value is false', () => {
    const result = truthyOrFalsey('hello');
    expect(result).not.toBeFalsy;
  });
});
