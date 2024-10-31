import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem';

Main.propTypes = {
  todos: PropTypes.array,
  markCompleted: PropTypes.func,
  removeTodo: PropTypes.func,
  changeTodoName: PropTypes.func,
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
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodoName={props.changeTodoName}
            markCompleted={props.markCompleted}
            removeTodo={props.removeTodo}
          />
        ))}
      </ul>
    </section>
  );
}
