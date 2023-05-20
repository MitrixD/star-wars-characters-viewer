import React from 'react';
import { Button, TextField } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
      <TextField label="Material-UI TextField" variant="outlined" />
      <p className="text-red-500">Tailwind CSS Text</p>
    </div>
  );
}

export default App;
