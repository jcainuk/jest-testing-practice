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
  expect(mockCalledback.mock.calls.length).toBe(2);
});
