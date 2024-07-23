import { Fragment, useState } from 'react';

import Task from '../Task/Task';
import './TaskList.css';

export default function TaskList({ tasks, setTasks }) {
  const [editTask, setEditTask] = useState(null);

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
      setEditTask(null);
    }
  }

//   console.log(editTask)
  return (
    <>
      <ul className="todo-list">
        {!tasks.length ? (
          <p style={{ padding: '5px', textAlign: 'center' }}>Нет ни одной задачи</p>
        ) : (
          tasks.map((el) => {
            const body = [<Task key={el.id} el={el} setTasks={setTasks} setEditTask={setEditTask} />];
            if (editTask && editTask.id === el.id) {
              body.push(
                <li className="editing" key={el.id + 'editTask'}>
                  <input
                    onKeyDown={setTask}
                    type="text"
                    className="edit"
                    value={editTask.title}
                    onInput={(e) => {
                      setEditTask({ ...editTask, title: e.target.value });
                    }}
                  />
                </li>
              );
            }
            return <Fragment key={el.id}>{body}</Fragment>;
          })
        )}
      </ul>
    </>
  );
}
