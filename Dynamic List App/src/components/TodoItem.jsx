function TodoItem({ task, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={onToggle}
      >
        {task.text}
      </span>

      <button className="delete-btn" onClick={onDelete}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;