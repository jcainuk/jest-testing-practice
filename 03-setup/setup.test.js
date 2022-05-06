let animals = ['elephant', 'zebra', 'bear', 'tiger'];

beforeEach(() => {
  console.log('BEFORE EACH');
  animals = ['elephant', 'zebra', 'bear', 'tiger'];
});

describe('animals array', () => {
  it('should add an animal to the end of array', () => {
    animals.push('aligator');
    expect(animals[animals.length - 1]).toBe('aligator');
  });

  it('should add an animal to the beginning of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  it('should have initial length of 4', () => {
    expect(animals.length).toBe(4);
  });
});
