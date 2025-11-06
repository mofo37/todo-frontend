import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
