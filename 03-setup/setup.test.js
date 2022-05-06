let animals = ['elephant', 'zebra', 'bear', 'tiger'];

describe('animals array', () => {
  // this will run just once before all tests start in this describe block
  beforeAll(() => {
    console.log('BEFORE ALL');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });
  // run before every test in this describe block
  beforeEach(() => {
    console.log('BEFORE EACH');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });
  // run after every test in this describe block
  afterEach(() => {
    console.log('AFTER EACH');
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
  });
  // this will run just once after all tests in this describe block
  afterAll(() => {
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
