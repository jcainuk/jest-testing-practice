// Mock a callback function

const axios = require('axios');

const fetchData = async (id) => {
  const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return results.data;
};
const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it('mock callback', () => {
  const mockCalledback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCalledback);
  // Access the .mock property
  // Expect the number of times the function was called the 2
  // .calls is in fact an array e.g. [ [ call1 ], [ call2 ] ]
  expect(mockCalledback.mock.calls.length).toBe(2);

  expect(mockCalledback.mock.calls[0][0]).toBe(0);

  expect(mockCalledback.mock.calls[1][0]).toBe(1);

  // value of first item in array after function call
  expect(mockCalledback.mock.results[0].value).toBe(42); // 0 + 42

  // value of second item in array after function call
  expect(mockCalledback.mock.results[1].value).toBe(43); // 1 + 42
});

// mock a return value
it('mock return', () => {
  const mock = jest.fn();
  // you can insert any value you like (true, false, whatever)
  // you can append .mockReturnValueOnce as many times as you like
  mock.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce('hello');

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe('hello');
});

// SPIES
