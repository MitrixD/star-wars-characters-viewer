import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

export const BackToHomeButton = () => (
  <IconButton
    component={Link}
    to="/"
    sx={{
      position: 'absolute',
      top: 120,
      left: 10,
      color: 'black',
    }}
  >
    <ArrowBackIcon
      sx={{
        fontSize: '2rem',
      }}
    />
  </IconButton>
);
