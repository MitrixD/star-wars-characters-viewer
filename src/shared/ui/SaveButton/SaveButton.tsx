import React, { FC } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';

interface SaveButtonProps {
  handleSaveClick: () => void;
}

export const SaveButton: FC<SaveButtonProps> = ({ handleSaveClick }) => (
  <Button
    variant="contained"
    sx={{
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'gray',
      },
    }}
    size={'large'}
    startIcon={<SaveIcon />}
    onClick={handleSaveClick}
    data-testid={'save-button'}
    fullWidth
  >
    Save
  </Button>
);
