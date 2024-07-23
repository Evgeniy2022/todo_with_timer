import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default function Task({ el, setTasks, setEditTask }) {
  function handleToggle() {
    setTasks((prev) => [
      ...prev.map((item) => {
        return item.id === el.id ? { ...item, status: item.status === 'done' ? '' : 'done' } : item;
      }),
    ]);
  }

  function deleteTask() {
    setTasks((prev) => [...prev.filter((item) => item.id !== el.id)]);
  }

  function changeEditTask() {
    setEditTask(el);
  }

  function handleTimerToggle() {
    setTasks((prev) => [
      ...prev.map((item) => {
        return item.id === el.id ? { ...item, status: item.status === 'pending' ? '' : 'pending' } : item;
      }),
    ]);
  }

  const secFinal = el.sec % 60;
  const secString = secFinal < 10 ? '0' + secFinal : secFinal.toString();

  const minFinal = Math.floor(el.sec / 60);
  const minString = minFinal < 10 ? '0' + minFinal : minFinal.toString();

  return (
    <li className={el.status === 'done' ? 'completed' : ''}>
      <div className="view">
        <input type="checkbox" className="toggle" onChange={handleToggle} checked={el.status === 'done'} />
        <label>
          <span className="title">{el.title}</span>
          <span className="description">
            {el.status === 'done' || el.status === '' ? (
              <button onClick={handleTimerToggle} className="icon icon-play"></button>
            ) : (
              <button className="icon icon-pause" onClick={handleTimerToggle}></button>
            )}
            <span className="description-timer">{`${minString}:${secString}`}</span>
          </span>
          <span className="created">created {formatDistanceToNow(el.date, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={changeEditTask}></button>
        <button className="icon icon-destroy" onClick={deleteTask}></button>
      </div>
    </li>
  );
}
