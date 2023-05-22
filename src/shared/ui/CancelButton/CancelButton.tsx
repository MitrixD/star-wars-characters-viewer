import React, { FC } from 'react';
import { Button } from '@mui/material';

interface CancelButtonProps {
  handleCancelClick: () => void;
}

export const CancelButton: FC<CancelButtonProps> = ({ handleCancelClick }) => (
  <Button
    sx={{
      color: 'black',
      borderColor: 'black',
      '&:hover': {
        backgroundColor: 'lightgray',
        borderColor: 'black',
      },
    }}
    size={'large'}
    variant="outlined"
    onClick={handleCancelClick}
    data-testid={'cancel-button'}
    fullWidth
  >
    Cancel
  </Button>
);
