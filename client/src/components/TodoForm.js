import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function TodoForm({ saveTodo }) {
  const [value, setValue] = useState('');
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          saveTodo(value);
          setValue('');
        }}
      >
        <TextField
          variant="outlined"
          placeholder="add todo"
          margin="normal"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </form>
    </div>
  );
}

export default TodoForm;
