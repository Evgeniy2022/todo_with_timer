import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

export default function Footer({ filter, setFilter, setTasks, filteredTasks }) {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">{filteredTasks.length} item left</span>
        <ul className="filters">
          <li>
            <button className={filter === '' ? 'selected' : ''} onClick={() => setFilter('')}>
              All
            </button>
          </li>
          <li>
            <button className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>
              Active
            </button>
          </li>
          <li>
            <button className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>
              Completed
            </button>
          </li>
        </ul>
        <TasksFilter />
        <button
          className="clear-completed"
          onClick={() => setTasks((prev) => prev.filter((task) => task.status !== 'done'))}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}
