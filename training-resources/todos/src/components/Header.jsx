import PropTypes from 'prop-types';
import {useRef} from '../utils';

Header.propTypes = {
  addTodo: PropTypes.func,
};
export function Header(props) {
  function handleClick(e) {
    if (e.key === 'Enter') {
      props?.addTodo?.(input.current.value);
      input.current.value = '';
    }
  }
  const input = useRef('');
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        ref={input}
        onKeyDown={(e) => handleClick(e)}
      />
    </header>
  );
}
