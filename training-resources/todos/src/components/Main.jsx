import PropTypes from 'prop-types';

Main.propTypes = {
  todos: PropTypes.array,
  markCompleted: PropTypes.func,
  removeTodo: PropTypes.func,
};

export function Main(props) {
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
                onChange={() => props.markCompleted(todo.id)}
              />
              <label>{todo.name}</label>
              <button
                className="destroy"
                onClick={() => props.removeTodo(todo.id)}
              />
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  );
}
