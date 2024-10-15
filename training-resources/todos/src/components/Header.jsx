import PropTypes from 'prop-types';
import {useRef} from '../utils';

Header.propTypes = {
  addTodo: PropTypes.func,
};
export function Header(props) {
  const input = useRef('');
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        ref={input}
        onKeyDown={(e) => props?.addTodo?.(e, input.current.value)}
      />
    </header>
  );
}
