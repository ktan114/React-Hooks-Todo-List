import React from 'react';
import Typography from '@material-ui/core/Typography';

import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={console.warn} />
    </div>
  );
}

export default App;
