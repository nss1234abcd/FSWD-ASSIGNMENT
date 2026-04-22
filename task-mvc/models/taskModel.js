let tasks = [
  { id: 1, text: "Learn MVC", completed: false }
];

module.exports = {
  getTasks: () => tasks,

  addTask: (task) => {
    tasks.push(task);
  },

  updateTask: (id) => {
    tasks = tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
  },

  deleteTask: (id) => {
    tasks = tasks.filter(t => t.id !== id);
  }
};