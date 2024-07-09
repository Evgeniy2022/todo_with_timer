import { useEffect, useState } from 'react';
import './App.css';
import Footer from './modules/Footer/Footer';
import NewTaskForm from './modules/NewTaskForm/NewTaskForm';
import TaskList from './modules/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterTasks, setFilterTasks] = useState([]);

  useEffect(() => {
    setFilterTasks(tasks);
  }, [tasks]);

  function filtered(condition) {
    if (condition === 'active') {
      setFilterTasks(tasks.filter((task) => task.done === false));
    } else if (condition === 'completed') {
      setFilterTasks(tasks.filter((task) => task.done === true));
    } else {
      setFilterTasks(tasks);
    }
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm setTasks={setTasks} />
        </header>
        <section className="main">
          <TaskList tasks={tasks} setTasks={setTasks} filterTasks={filterTasks} />
        </section>
        <Footer filtered={filtered} filterTasks={filterTasks} setTasks={setTasks} />
      </section>
    </>
  );
}

export default App;
