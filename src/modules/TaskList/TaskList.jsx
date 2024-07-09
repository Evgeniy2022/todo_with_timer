import { useState } from 'react';

import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, setTasks, filterTasks }) {
  const [editTask, setEditTask] = useState({});

  function setTask(e) {
    if (e.keyCode === 13) {
      setTasks((prev) => {
        return prev.map((task) => {
          if (task.id === editTask.id) {
            return { ...task, title: editTask.title };
          } else {
            return task;
          }
        });
      });
      setEditTask({});
    }
  }

  return (
    <>
      <ul className="todo-list">
        {!tasks.length ? (
          <p>Нет ни одной задачи</p>
        ) : (
          filterTasks.map((el, index) => {
            return <Task key={index} el={el} setTasks={setTasks} setEditTask={setEditTask} />;
          })
        )}
        <li className={`editing ${!Object.keys(editTask).length && 'hidden'}`}>
          <input
            onKeyDown={setTask}
            type="text"
            className="edit"
            value={editTask.title}
            onInput={(e) => setEditTask({ ...editTask, title: e.target.value })}
          />
        </li>
      </ul>
    </>
  );
}
