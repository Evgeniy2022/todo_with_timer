import { useState } from 'react';
import './NewTaskForm.css';

export default function NewTaskForm({ setTasks }) {
  const [value, setValue] = useState('');

  function createTask(e) {
    if (e.keyCode === 13) {
      setTasks((prev) => [
        ...prev,
        {
          title: value,
          id: prev.length + 1,
          done: false,
          date: new Date(),
        },
      ]);
      setValue('');
    }
  }

  return (
    <>
      <input
        onKeyDown={createTask}
        value={value}
        onInput={(e) => setValue(e.target.value)}
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </>
  );
}
