const TodoModel = require('../../../app/models/todo');

const fields = ['id', 'title', 'createdAt', 'updatedAt'];

describe('Models -> Todo', () => {
  test('it should have the right fields', () => {
    expect(Object.keys(TodoModel.attributes)).toMatchObject(fields);
  });

  test('it should throw an error when creating without syncing', () => expect(TodoModel.create({ title: 'foo' }))
    .rejects.toThrow('no such table'));

  test('it should not throw an error when creating after syncing', () => TodoModel.sync()
    .then(() => expect(TodoModel.create({ title: 'foo' })).resolves.toBeInstanceOf(TodoModel)));
});
