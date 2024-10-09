export function Main(props) {
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
      />
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
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
