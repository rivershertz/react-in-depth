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

  function markCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return {id: todo.id, name: todo.name, isCompleted: !todo.isCompleted};
    });

    setTodos([...updatedTodos]);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        todos={todos}
        markCompleted={markCompleted}
        removeTodo={removeTodo}
      />
      <Footer
        todos={todos}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
