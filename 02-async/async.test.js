const fetchData = require('./async');

it('should return correct todo', () => {
  const todo = fetchData(1);
  expect(todo.id).toBe(1);
});
