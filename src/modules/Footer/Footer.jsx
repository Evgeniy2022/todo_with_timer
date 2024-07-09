import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

export default function Footer({ filtered, filterTasks, setTasks }) {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">{filterTasks.length} item left</span>
        <ul className="filters">
          <li>
            <button className="selected" onClick={() => filtered()}>
              All
            </button>
          </li>
          <li>
            <button onClick={() => filtered('active')}>Active</button>
          </li>
          <li>
            <button onClick={() => filtered('completed')}>Completed</button>
          </li>
        </ul>
        <TasksFilter />
        <button className="clear-completed" onClick={() => setTasks((prev) => prev.filter((task) => !task.done))}>
          Clear completed
        </button>
      </footer>
    </>
  );
}
