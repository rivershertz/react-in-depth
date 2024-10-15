import {useRef} from '../utils';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  markCompleted: PropTypes.func,
  removeTodo: PropTypes.func,
  changeTodoName: PropTypes.func,
  todo: PropTypes.object,
};

export function TodoItem(props) {
  const todoName = useRef(props.todo.name);
  const todoItem = useRef({});
  function handleInput(e) {
    if (e.key === 'Enter') {
      props.changeTodoName(props.todo.id, todoName.current.value);
      todoItem.current.classList.remove('editing');
      todoName.current.blur();
    }
  }

  function editTodoName() {
    todoItem.current.classList.add('editing');
    todoName.current.focus();
  }

  return (
    <li
      key={props.todo.id}
      className={props.todo.isCompleted ? 'completed' : ''}
      ref={todoItem}>
      <div
        className="view"
        onClick={editTodoName}>
        <input
          className="toggle"
          type="checkbox"
          onChange={() => props.markCompleted(props.todo.id)}
        />
        <label>{props.todo.name}</label>
        <button
          className="destroy"
          onClick={() => props.removeTodo(props.todo.id)}
        />
      </div>
      <input
        className="edit"
        ref={todoName}
        onKeyDown={handleInput}
      />
    </li>
  );
}
