import {useState} from 'react';
export function Header(props) {
  const input = useState({current: ''})[0];
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
