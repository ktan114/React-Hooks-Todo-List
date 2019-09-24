import React from 'react';
import Typography from '@material-ui/core/Typography';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodoState from './container/useTodoState';

function App() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
  // const [todos, setTodos] = useState([]);
  // return (
  //   <div className="App">
  //     <Typography component="h1" variant="h2">
  //       Todos
  //     </Typography>
  //     <TodoForm
  //       saveTodo={todoText => {
  //         const trimmedText = todoText.trim();
  //         if (trimmedText.length > 0) {
  //           setTodos([...todos, trimmedText]);
  //         }
  //       }}
  //     />
  //     <TodoList
  //       todos={todos}
  //       deleteTodo={todoIndex => {
  //         const newTodos = todos.filter((_, index) => index !== todoIndex);

  //         setTodos(newTodos);
  //       }}
  //     />
  //   </div>
  // );
}

export default App;
