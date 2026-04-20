import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Toggle complete
  const toggleTask = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  // Clear all
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <h1>Todo List 📝</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="list">
        {tasks.map((t, index) => (
          <TodoItem
            key={index}
            task={t}
            onDelete={() => deleteTask(index)}
            onToggle={() => toggleTask(index)}
          />
        ))}
      </div>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All 🧹
        </button>
      )}
    </div>
  );
}

export default App;