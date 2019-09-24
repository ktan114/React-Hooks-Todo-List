import React from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from '../container/useInputState';

function TodoForm({ saveTodo }) {
  const { value, reset, onChange } = useInputState('');
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          saveTodo(value);
          reset();
        }}
      >
        <TextField
          variant="outlined"
          placeholder="add todo"
          margin="normal"
          onChange={onChange}
          value={value}
        />
      </form>
    </div>
  );
}

export default TodoForm;
