import { useState } from 'react';
import './NewTaskForm.css';
import { v4 as uuidv4 } from 'uuid';

export default function NewTaskForm({ setTasks }) {
  const [value, setValue] = useState({});

  function createTask(e) {
    if (e.keyCode === 13 && value.name) {
      setTasks((prev) => [
        ...prev,
        {
          title: value.name,
          id: uuidv4(),
          sec: (+value.sec || 0) + (+value.min || 0) * 60,
          status: '',
          date: new Date(),
        },
      ]);
      setValue({
        name: '',
        min: '',
        sec: '',
      });
    }
  }

  return (
    <form className="new-todo-form" onKeyDown={createTask}>
      <input
        value={value.name || ''}
        onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        value={value.min || ''}
        onChange={(e) => setValue((prev) => ({ ...prev, min: e.target.value }))}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        value={value.sec || ''}
        onChange={(e) => setValue((prev) => ({ ...prev, sec: e.target.value }))}
      />
    </form>
  );
}
