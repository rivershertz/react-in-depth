import {useState} from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Main} from './components/Main';

function App() {
  const [todos, setTodos] = useState([]);

  function clearCompleted() {
    const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(incompleteTodos);
  }
  function addTodo(e, newTodo) {
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {name: newTodo, isCompleted: false, id: Math.random()},
      ]);
    }
  }

  function markCompleted(e) {
    const changedTodoId = +e.target.value;
    const [todo] = todos.filter((todo) => {
      return todo.id === changedTodoId;
    });

    const updatedTodos = todos.filter((todo) => todo.id !== changedTodoId);

    setTodos([
      ...updatedTodos,
      {id: todo.id, name: todo.name, isCompleted: !todo.isCompleted},
    ]);
  }
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        todos={todos}
        markCompleted={markCompleted}
      />
      <Footer
        todos={todos}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
