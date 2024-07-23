import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Footer from './modules/Footer/Footer';
import NewTaskForm from './modules/NewTaskForm/NewTaskForm';
import TaskList from './modules/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  const isTaskPending = tasks.some((task) => task.status === 'pending');

  useEffect(() => {
    if (isTaskPending) {
      let timer = setInterval(() => {
        setTasks((prev) => {
          return prev.map((task) => {
            if (task.status === 'pending') {
              if (task.sec <= 0) {
                return { ...task, status: 'done' };
              }
              return { ...task, sec: task.sec - 1 };
            }
            return task;
          });
        });
      }, 1000);

      return function () {
        clearInterval(timer);
      };
    }
  }, [isTaskPending]);

  const filteredTasks = useMemo(() => {
    if (filter === '') {
      return tasks;
    }
    return tasks.filter((task) => {
      if (filter === 'active' && task.status !== 'done') {
        return true;
      }
      if (filter === 'completed' && task.status === 'done') {
        return true;
      }
      return false;
    });
  }, [tasks, filter]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm setTasks={setTasks} />
        </header>
        <section className="main">
          <TaskList tasks={filteredTasks} setTasks={setTasks} />
        </section>
        <Footer filter={filter} setFilter={setFilter} setTasks={setTasks} filteredTasks={filteredTasks} />
      </section>
    </>
  );
}

export default App;
