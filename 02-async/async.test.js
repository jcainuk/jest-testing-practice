const fetchData = require('./async');

it('should return correct todo', () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});
