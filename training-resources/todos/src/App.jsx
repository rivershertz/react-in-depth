import {useState} from 'react';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Main} from './components/Main';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([
      ...todos,
      {name: newTodo, isCompleted: false, id: Math.random()},
    ]);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function markCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return {id: todo.id, name: todo.name, isCompleted: !todo.isCompleted};
    });
    setTodos(updatedTodos);
  }

  function clearCompleted() {
    const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(incompleteTodos);
  }

  function changeTodoName(todoId, newName) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
      return {id: todo.id, name: newName, isCompleted: todo.isCompleted};
    });

    setTodos(updatedTodos);
  }
  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        todos={todos}
        markCompleted={markCompleted}
        removeTodo={removeTodo}
        changeTodoName={changeTodoName}
      />
      <Footer
        todos={todos}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
