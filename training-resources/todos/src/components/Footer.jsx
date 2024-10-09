export function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props?.todos?.length}</strong> items left
      </span>
      <button
        className="clear-completed"
        onClick={props?.clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
