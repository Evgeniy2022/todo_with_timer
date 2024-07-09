import "./Task.css";
import { formatDistanceToNow } from "date-fns";

export default function Task({ el, setTasks, setEditTask }) {
  function handleClick() {
    setTasks((prev) => [
      ...prev.map((item) => {
        return item.id === el.id ? { ...item, done: !item.done } : item;
      }),
    ]);
  }

  function deleteTask() {
    setTasks((prev) => [...prev.filter((item) => item.id !== el.id)]);
  }

  function changeEditTask() {
	setEditTask(el)
  }

  return (
    <li className={el.done && "completed"}>
      <div className="view">
        <input type="checkbox" className="toggle" checked={el.done} />
        <label onClick={handleClick}>
          <span className="description">{el.title}</span>
          <span className="created">
            created {formatDistanceToNow(el.date, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-edit" onClick={changeEditTask}></button>
        <button className="icon icon-destroy" onClick={deleteTask}></button>
      </div>
    </li>
  );
}
