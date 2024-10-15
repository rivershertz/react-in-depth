import {useState} from 'react';

export function Main(props) {
  const checkbox = useState({current: false})[0];
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
      />
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.isCompleted ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={props.markCompleted}
                value={todo.id}
                ref={checkbox}
              />
              <label>{todo.name}</label>
              <button className="destroy" />
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  );
}
