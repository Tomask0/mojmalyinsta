// src/app/o-mne/page.tsx

"use client"


import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from './top100Films';

export default function Test() {
  return (
    <Container>
      <Typography> Testing page</Typography>
      <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </Container>
  );
}
