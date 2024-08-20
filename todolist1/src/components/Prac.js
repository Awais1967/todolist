import React, { useEffect, useState } from "react";

const Prac = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodo([...todo, { task, completed: false }]);
      setTask("");
    }
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem('todo');
    if (savedTodos) {
      setTodo(JSON.parse(savedTodos));
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const handleCheckboxChange = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  const deleteHandler = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  const renderTasks =
    todo.length > 0 ? (
      todo.map((t, index) => (
        <li key={index} className="flex items-center justify-between py-2 border-b">
          <span className={`flex-grow ${t.completed ? 'line-through text-gray-500' : ''}`}>{t.task}</span>
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`chbox-${index}`}
              checked={t.completed}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            <label htmlFor={`chbox-${index}`} className="mr-2 text-sm text-gray-600">completed</label>
            {t.completed && (
              <button
                type="button"
                onClick={() => deleteHandler(index)}
                className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Delete
              </button>
            )}
          </div>
        </li>
      ))
    ) : (
      <h2 className="text-lg text-gray-500 italic">No tasks added yet</h2>
    );

    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
          <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="mb-4">
              <form onSubmit={submitHandler} className="flex">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="flex-grow px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a new task"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add
                </button>
              </form>
            </div>
            <div>
              <ul className="bg-white rounded shadow-sm">{renderTasks}</ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Prac;