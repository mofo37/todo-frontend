function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, todo.completed)}
          className="todo-checkbox"
        />
        <span className="todo-title">{todo.title}</span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
