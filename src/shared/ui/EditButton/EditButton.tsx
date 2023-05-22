import React, { FC } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

interface EditButtonProps {
  handleEditClick: () => void;
}

export const EditButton: FC<EditButtonProps> = ({ handleEditClick }) => (
  <Button
    sx={{
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'gray',
      },
    }}
    size={'large'}
    variant="contained"
    startIcon={<EditIcon />}
    onClick={handleEditClick}
    data-testid={'edit-button'}
    fullWidth
  >
    Edit
  </Button>
);
