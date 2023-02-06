import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = event => {
    event.preventDefault();
    if (editingIndex === -1) {
      setTasks([...tasks, task]);
      } else {
      const newTasks = [...tasks];
      newTasks[editingIndex] = task;
      setTasks(newTasks);
      setEditingIndex(-1);
      }
    setTask('');
  };

  const handleRemove = index => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleEdit = index => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={event => setTask(event.target.value)}
        />
        <button type="submit">
        {editingIndex === -1 ? 'Add' : 'Update'}
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;