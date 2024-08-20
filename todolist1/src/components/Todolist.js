import React, { useState } from "react";

const Todolist = () => {
  const [task, settask] = useState("");
  const [todo, settodo] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const submitHanler = (e) => {
    e.preventDefault();
    console.log(task);
    settodo([...todo, { task }]);
    settask("");
    console.log(todo);
  };
  const deleteHandler = (index) => {
    let task1 = [...todo];
    task1.splice(index, 1);
    settodo(task1);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  let renderTask = <h2>no task Added yet</h2>;
  if (todo.length > 0) {
    renderTask = todo.map((t, index) => {
      return (
        <li key={index}>
          <div>
            <h5>{t.task}</h5>
            <form>
              <input
                type="checkbox"
                id="toggle-checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="toggle-checkbox">Completed</label>
              {isChecked && (
                <button
                  onclick={() => {
                    deleteHandler(index);
                  }}
                >
                  Delete
                </button>
              )}
            </form>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <div>
        <h1>Todolist</h1>
        <form action="" onSubmit={submitHanler}>
          <input
            type="text"
            name="task"
            id=""
            value={task}
            onChange={(e) => {
              settask(e.target.value);
            }}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
      <div>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Todolist;
