import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { HOME_PAGE } from '../../../pages/home';

export const BackToHomeButton = () => (
  <IconButton
    component={Link}
    to={HOME_PAGE}
    sx={{
      position: 'absolute',
      top: 120,
      left: 10,
      color: 'black',
    }}
    data-testid={'back-button'}
  >
    <ArrowBackIcon
      sx={{
        fontSize: '2rem',
      }}
    />
  </IconButton>
);
