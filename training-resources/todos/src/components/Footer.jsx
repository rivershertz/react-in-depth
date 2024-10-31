import PropTypes from 'prop-types';

Footer.propTypes = {
  todos: PropTypes.array,
  clearCompleted: PropTypes.func,
};
export function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {props.todos.filter((todo) => !todo.isCompleted).length}
        </strong>{' '}
        items left
      </span>
      <button
        className="clear-completed"
        onClick={props?.clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
