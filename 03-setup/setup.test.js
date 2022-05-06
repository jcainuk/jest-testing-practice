const animals = ['elephant', 'zebra', 'bear', 'tiger'];

describe('animals array', () => {
  it('should add an animal to the end of array', () => {
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });
});
