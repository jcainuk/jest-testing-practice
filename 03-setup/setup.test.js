let animals = ['elephant', 'zebra', 'bear', 'tiger'];

describe('animals array', () => {
  beforeAll(() => {
  // this will run just once before all tests start
    console.log('BEFORE ALL');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  beforeEach(() => {
    console.log('BEFORE EACH');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  afterEach(() => {
    console.log('AFTER EACH');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

  afterAll(() => {
  // this will run just once before all tests start
    console.log('AFTER ALL');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });

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

/*
IF YOU WANT TO SKIP PREVIOUS TESTS
USE:

it.only()

*/

// describe('testing something else', () => {
//   it.only('true should be truthy', () => {
//     expect(true).toBeTruthy();
//   });
// });
