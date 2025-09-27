import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      <TextField sx={{ borderRadius: '0.375rem', border: '1px solid #ccc', width: '300px' }} id="filled-basic" label="Link" variant="filled" />
      <Button variant="contained">Generate QR Code</Button>
    </div>
  );
}
